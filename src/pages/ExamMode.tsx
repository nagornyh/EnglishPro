import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Trophy,
  Target,
  Zap,
  ChevronRight,
  RotateCcw,
  Home,
  BookOpen,
  Award,
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import db from '../services/database';
import { getGrammarByLevel } from '../data/grammar/index';
import { getPhrasalVerbsByLevel } from '../data/phrasal-verbs';
import { getIdiomsByLevel } from '../data/idioms';
import { getVocabularyByLevel } from '../data/vocabulary-everyday';
import { getTheoryByLevel } from '../data/grammar-theory';

interface ExamQuestion {
  id: number;
  type: 'multiple-choice' | 'fill-blank' | 'translation' | 'sentence-order';
  question: string;
  options?: string[];   // multiple-choice options
  words?: string[];    // sentence-order: shuffled word chips
  correctAnswer: string | string[];
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  totalPoints: number;
  earnedPoints: number;
  timeUsed: number;
  timeLimit: number;
  passed: boolean;
  grade: string;
  questionResults: Array<{
    question: ExamQuestion;
    userAnswer: string;
    isCorrect: boolean;
  }>;
}

type ExamLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

const EXAM_CONFIG: Record<ExamLevel, { questions: number; timeMinutes: number; passPercent: number }> = {
  'A1': { questions: 15, timeMinutes: 15, passPercent: 60 },
  'A2': { questions: 20, timeMinutes: 20, passPercent: 65 },
  'B1': { questions: 25, timeMinutes: 30, passPercent: 70 },
  'B2': { questions: 30, timeMinutes: 35, passPercent: 70 },
  'C1': { questions: 35, timeMinutes: 45, passPercent: 75 },
  'C2': { questions: 40, timeMinutes: 50, passPercent: 80 },
};

const LEVEL_TO_NUM: Record<ExamLevel, number> = {
  'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6,
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pickRandom<T>(arr: T[], n: number, exclude?: T): T[] {
  const filtered = exclude ? arr.filter(x => x !== exclude) : arr;
  const shuffled = shuffle(filtered);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

/** Dynamically generates exam questions from data modules. Returns 20-30+ questions. */
function generateQuestionsForLevel(level: ExamLevel): ExamQuestion[] {
  const numLevel = LEVEL_TO_NUM[level];
  const questions: ExamQuestion[] = [];
  let idCounter = 1;

  const addQ = (q: Omit<ExamQuestion, 'id'>) => {
    questions.push({ ...q, id: idCounter++ });
  };

  const difficultyForLevel = (): ExamQuestion['difficulty'] => {
    if (numLevel <= 2) return Math.random() < 0.7 ? 'easy' : 'medium';
    if (numLevel <= 4) return ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)] as ExamQuestion['difficulty'];
    return Math.random() < 0.6 ? 'hard' : 'medium';
  };

  const pointsForDifficulty = (d: ExamQuestion['difficulty']) =>
    d === 'easy' ? 5 : d === 'medium' ? 10 : 15;

  // a) Grammar questions from grammarTheory recognition exercises
  const theoryModules = getTheoryByLevel(level);
  for (const mod of theoryModules) {
    const rec = mod.exercises?.recognition ?? [];
    for (const ex of rec.slice(0, 5)) {
      if (ex.options?.length && ex.correct >= 0 && ex.correct < ex.options.length) {
        const d = difficultyForLevel();
        const questionText = ex.question
          ? `${ex.sentence} ${ex.question}`.trim()
          : ex.sentence;
        addQ({
          type: 'multiple-choice',
          question: questionText,
          options: ex.options,
          correctAnswer: ex.options[ex.correct],
          category: 'grammar',
          difficulty: d,
          points: pointsForDifficulty(d),
        });
      }
    }
    // True-false from predicted errors (as multiple-choice) - incorrect sentences
    for (const err of (mod.predictedErrors ?? []).slice(0, 2)) {
      addQ({
        type: 'multiple-choice',
        question: `Is this sentence correct? "${err.error}"`,
        options: ['True', 'False'],
        correctAnswer: 'False',
        category: 'grammar',
        difficulty: numLevel <= 2 ? 'easy' : 'medium',
        points: numLevel <= 2 ? 5 : 10,
      });
    }
    // True-false with correct sentences from formation rules
    for (const rule of mod.formationRules ?? []) {
      for (const step of (rule.steps ?? []).slice(0, 1)) {
        if (step.example && step.example.length > 10) {
          addQ({
            type: 'multiple-choice',
            question: `Is this sentence correct? "${step.example}"`,
            options: ['True', 'False'],
            correctAnswer: 'True',
            category: 'grammar',
            difficulty: numLevel <= 2 ? 'easy' : 'medium',
            points: numLevel <= 2 ? 5 : 10,
          });
          break; // One per rule
        }
      }
    }
  }

  // b) Vocabulary questions from everydayVocabulary
  const vocabTopics = getVocabularyByLevel(numLevel);
  const allWords = vocabTopics.flatMap(t => t.words);
  for (const word of shuffle(allWords).slice(0, 12)) {
    const others = pickRandom(allWords, 3, word).map(w => w.translation);
    const options = shuffle([word.translation, ...others]);
    addQ({
      type: 'multiple-choice',
      question: `What does "${word.word}" mean?`,
      options,
      correctAnswer: word.translation,
      category: 'vocabulary',
      difficulty: numLevel <= 2 ? 'easy' : difficultyForLevel(),
      points: pointsForDifficulty('easy'),
    });
  }

  // "Complete the sentence" vocabulary - use example if available
  for (const word of shuffle(allWords).slice(0, 6)) {
    if (word.example && word.example.toLowerCase().includes(word.word.toLowerCase())) {
      const blanked = word.example.replace(new RegExp(word.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '_____');
      addQ({
        type: 'fill-blank',
        question: `Complete: "${blanked}"`,
        correctAnswer: word.word,
        category: 'vocabulary',
        difficulty: 'medium',
        points: 10,
      });
    }
  }

  // c) Phrasal verb questions (B1+)
  if (numLevel >= 3) {
    const pvList = getPhrasalVerbsByLevel(numLevel);
    for (const pv of shuffle(pvList).slice(0, 8)) {
      const phrase = `${pv.verb} ${pv.particle}`;
      const others = pickRandom(pvList, 3, pv).map(p => p.meaningEs);
      const options = shuffle([pv.meaningEs, ...others]);
      addQ({
        type: 'multiple-choice',
        question: `What does "${phrase}" mean?`,
        options,
        correctAnswer: pv.meaningEs,
        category: 'vocabulary',
        difficulty: numLevel >= 5 ? 'hard' : 'medium',
        points: numLevel >= 5 ? 15 : 10,
      });
    }
    for (const pv of shuffle(pvList).slice(0, 4)) {
      const phrase = `${pv.verb} ${pv.particle}`;
      const ex = pv.example.split(/[.!?]/)[0];
      if (ex) {
        const verbPattern = new RegExp(`\\b${pv.verb}(?:ed|ing|s)?\\s+${pv.particle.replace(/\s+/g, '\\s+')}\\b`, 'gi');
        const blanked = ex.replace(verbPattern, '_____');
        if (blanked.includes('_____')) {
          addQ({
            type: 'fill-blank',
            question: `Complete: ${blanked}`,
            correctAnswer: phrase,
            category: 'vocabulary',
            difficulty: 'medium',
            points: 10,
          });
        }
      }
    }
  }

  // d) Idiom questions (B2+)
  if (numLevel >= 4) {
    const idiomList = getIdiomsByLevel(numLevel);
    for (const idiom of shuffle(idiomList).slice(0, 6)) {
      const others = pickRandom(idiomList, 3, idiom).map(i => i.meaningEs);
      const options = shuffle([idiom.meaningEs, ...others]);
      addQ({
        type: 'multiple-choice',
        question: `What does "${idiom.idiom}" mean?`,
        options,
        correctAnswer: idiom.meaningEs,
        category: 'vocabulary',
        difficulty: 'hard',
        points: 15,
      });
    }
  }

  // e) Grammar topics - transform examples/commonMistakes into questions
  const grammarList = getGrammarByLevel(numLevel);
  for (const topic of shuffle(grammarList).slice(0, 8)) {
    for (const mistake of (topic.commonMistakes ?? []).slice(0, 3)) {
      const wrongWords = mistake.wrong.split(/\s+/);
      const correctWords = mistake.correct.split(/\s+/);
      if (wrongWords.length === correctWords.length) {
        const diffIdx = wrongWords.findIndex((w, i) => w !== correctWords[i]);
        if (diffIdx >= 0) {
          wrongWords[diffIdx] = '_____';
          const questionText = wrongWords.join(' ');
          addQ({
            type: 'fill-blank',
            question: `Complete: "${questionText}"`,
            correctAnswer: correctWords[diffIdx],
            category: 'grammar',
            difficulty: topic.level >= 5 ? 'hard' : 'medium',
            points: topic.level >= 5 ? 15 : 10,
          });
        }
      }
    }
    for (const ex of (topic.examples ?? []).slice(0, 3)) {
      const words = ex.english.split(/\s+/);
      if (words.length >= 3) {
        const idx = Math.floor(words.length / 2);
        const answer = words[idx];
        words[idx] = '_____';
        addQ({
          type: 'fill-blank',
          question: `Complete: "${words.join(' ')}"`,
          correctAnswer: answer,
          category: 'grammar',
          difficulty: topic.level <= 2 ? 'easy' : 'medium',
          points: topic.level <= 2 ? 5 : 10,
        });
      }
    }
  }

  // Sentence-order questions – B2+ only
  if (numLevel >= 7) {
    const sentenceBanks: Array<{ sentence: string; difficulty: 'medium' | 'hard'; level: number }> = [
      { sentence: 'Not only did she pass the exam but she also got the highest grade', difficulty: 'hard', level: 8 },
      { sentence: 'Rarely have I seen such dedication in a student', difficulty: 'hard', level: 8 },
      { sentence: 'Had it not been for your help I would have failed', difficulty: 'hard', level: 9 },
      { sentence: 'No sooner had he arrived than the meeting started', difficulty: 'hard', level: 8 },
      { sentence: 'It is widely acknowledged that language shapes thought', difficulty: 'medium', level: 7 },
      { sentence: 'The more you practise the more confident you will become', difficulty: 'medium', level: 7 },
      { sentence: 'Under no circumstances should personal data be shared with third parties', difficulty: 'hard', level: 9 },
      { sentence: 'Only when we understand the problem can we begin to solve it', difficulty: 'hard', level: 9 },
    ];
    const eligible = sentenceBanks.filter(s => s.level <= numLevel + 2);
    for (const entry of pickRandom(eligible, Math.min(3, eligible.length))) {
      const words = entry.sentence.split(' ');
      questions.push({
        id: questions.length + 1,
        type: 'sentence-order',
        question: 'Ordena las palabras para formar una oración correcta:',
        words: shuffle([...words]),
        correctAnswer: entry.sentence.toLowerCase(),
        category: 'grammar',
        difficulty: entry.difficulty,
        points: entry.difficulty === 'hard' ? 15 : 10,
      });
    }
  }

  return shuffle(questions);
}

export default function ExamMode() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  
  // State
  const [stage, setStage] = useState<'select' | 'exam' | 'results'>('select');
  const [selectedLevel, setSelectedLevel] = useState<ExamLevel | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  // sentence-order state: maps question index → current ordered word list
  const [sentenceOrder, setSentenceOrder] = useState<Record<number, string[]>>({});

  // Timer
  useEffect(() => {
    if (stage !== 'exam' || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [stage, timeRemaining]);

  // Generate questions based on level - uses data modules + hardcoded fallback
  const generateQuestions = useCallback((level: ExamLevel): ExamQuestion[] => {
    const config = EXAM_CONFIG[level];
    const difficultyDistribution = {
      'A1': { easy: 0.6, medium: 0.3, hard: 0.1 },
      'A2': { easy: 0.4, medium: 0.4, hard: 0.2 },
      'B1': { easy: 0.3, medium: 0.4, hard: 0.3 },
      'B2': { easy: 0.2, medium: 0.4, hard: 0.4 },
      'C1': { easy: 0.1, medium: 0.4, hard: 0.5 },
      'C2': { easy: 0.1, medium: 0.3, hard: 0.6 },
    };
    const dist = difficultyDistribution[level];

    // Get questions from data modules (20-30+)
    const fromData = generateQuestionsForLevel(level);

    // Level-aware fallback – only used when data modules produce too few questions
    const fallbackByLevel: Record<ExamLevel, ExamQuestion[]> = {
      'A1': [
        { id: 901, type: 'multiple-choice', question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes', category: 'grammar', difficulty: 'easy', points: 5 },
        { id: 902, type: 'multiple-choice', question: 'What is the opposite of "hot"?', options: ['warm', 'cold', 'cool', 'freezing'], correctAnswer: 'cold', category: 'vocabulary', difficulty: 'easy', points: 5 },
        { id: 903, type: 'multiple-choice', question: 'I ___ a student.', options: ['is', 'am', 'are', 'be'], correctAnswer: 'am', category: 'grammar', difficulty: 'easy', points: 5 },
        { id: 904, type: 'multiple-choice', question: 'They ___ playing football right now.', options: ['is', 'am', 'are', 'be'], correctAnswer: 'are', category: 'grammar', difficulty: 'medium', points: 10 },
        { id: 905, type: 'fill-blank', question: 'Complete: "The weather is _____ today." (beautiful)', correctAnswer: 'beautiful', category: 'vocabulary', difficulty: 'easy', points: 5 },
      ],
      'A2': [
        { id: 911, type: 'multiple-choice', question: 'He ___ working here since 2010.', options: ['has been', 'have been', 'is', 'was'], correctAnswer: 'has been', category: 'grammar', difficulty: 'medium', points: 10 },
        { id: 912, type: 'multiple-choice', question: 'Choose the correct word: "She gave me a lot of good ___."', options: ['advise', 'advice', 'advices', 'advising'], correctAnswer: 'advice', category: 'vocabulary', difficulty: 'easy', points: 5 },
        { id: 913, type: 'fill-blank', question: 'Complete: "I have been waiting _____ two hours." (preposition)', correctAnswer: 'for', category: 'grammar', difficulty: 'easy', points: 5 },
        { id: 914, type: 'multiple-choice', question: 'The book ___ on the table when I arrived.', options: ['lay', 'lied', 'lain', 'was lying'], correctAnswer: 'was lying', category: 'grammar', difficulty: 'medium', points: 10 },
        { id: 915, type: 'translation', question: 'Translate: "Me gustaría reservar una mesa para dos."', correctAnswer: 'I would like to book a table for two', category: 'translation', difficulty: 'medium', points: 10 },
      ],
      'B1': [
        { id: 921, type: 'multiple-choice', question: 'If I ___ rich, I would travel the world.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', category: 'grammar', difficulty: 'medium', points: 10 },
        { id: 922, type: 'multiple-choice', question: 'I wish I ___ speak French fluently.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', category: 'grammar', difficulty: 'medium', points: 10 },
        { id: 923, type: 'fill-blank', question: 'Complete: "She succeeded _____ passing the exam." (preposition)', correctAnswer: 'in', category: 'grammar', difficulty: 'medium', points: 10 },
        { id: 924, type: 'multiple-choice', question: 'He denied ___ the window.', options: ['to break', 'breaking', 'break', 'broke'], correctAnswer: 'breaking', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 925, type: 'multiple-choice', question: 'The film was ___ boring that I fell asleep.', options: ['such', 'so', 'too', 'very'], correctAnswer: 'so', category: 'grammar', difficulty: 'medium', points: 10 },
      ],
      'B2': [
        { id: 931, type: 'multiple-choice', question: 'The news ___ very surprising to the committee.', options: ['was', 'were', 'are', 'have been'], correctAnswer: 'was', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 932, type: 'multiple-choice', question: 'Had I known about the meeting, I ___ attended.', options: ['would have', 'will have', 'would', 'had'], correctAnswer: 'would have', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 933, type: 'multiple-choice', question: 'Hardly ___ arrived when the meeting started.', options: ['I had', 'had I', 'I have', 'have I'], correctAnswer: 'had I', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 934, type: 'fill-blank', question: 'Complete: "Not only ___ he arrive late, but he also forgot the report." (auxiliary)', correctAnswer: 'did', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 935, type: 'translation', question: 'Translate: "Si hubiera sabido, te habría avisado."', correctAnswer: 'If I had known, I would have warned you', category: 'translation', difficulty: 'hard', points: 15 },
      ],
      'C1': [
        { id: 941, type: 'multiple-choice', question: '___ the project fail, the entire budget would be reviewed.', options: ['Should', 'Would', 'If', 'Unless'], correctAnswer: 'Should', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 942, type: 'fill-blank', question: 'Complete: "The report highlighted the _____ of implementing new policies." (nominalisation of "difficult")', correctAnswer: 'difficulty', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 943, type: 'multiple-choice', question: 'She is known to ___ written the original manuscript.', options: ['be', 'have', 'has', 'had'], correctAnswer: 'have', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 944, type: 'multiple-choice', question: 'The decision, ___ it may seem controversial, was legally sound.', options: ['even though', 'however', 'albeit', 'despite'], correctAnswer: 'albeit', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 945, type: 'fill-blank', question: 'Complete: "At no point _____ management acknowledge the error." (inversion)', correctAnswer: 'did', category: 'grammar', difficulty: 'hard', points: 15 },
      ],
      'C2': [
        { id: 951, type: 'multiple-choice', question: 'The proposition is _____ untenable; it ignores decades of empirical research.', options: ['inherently', 'ostensibly', 'manifestly', 'incidentally'], correctAnswer: 'manifestly', category: 'vocabulary', difficulty: 'hard', points: 15 },
        { id: 952, type: 'fill-blank', question: 'Complete: "_____ as it may seem, the results were consistent across all trials." (concessive inversion)', correctAnswer: 'Strange', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 953, type: 'multiple-choice', question: 'The author\'s argument, while cogent, fails to account for the _____ nature of cultural identity.', options: ['immutable', 'protean', 'linear', 'reductive'], correctAnswer: 'protean', category: 'vocabulary', difficulty: 'hard', points: 15 },
        { id: 954, type: 'multiple-choice', question: 'Were the hypothesis to be _____, the entire theoretical framework would require revision.', options: ['refuted', 'validated', 'corroborated', 'postulated'], correctAnswer: 'refuted', category: 'grammar', difficulty: 'hard', points: 15 },
        { id: 955, type: 'fill-blank', question: 'Complete: "The policy has been criticised for its _____ of marginalised voices." (nominalisation of "exclude")', correctAnswer: 'exclusion', category: 'grammar', difficulty: 'hard', points: 15 },
      ],
    };

    // Only use fallback if data modules don't provide enough questions
    const pool = fromData.length >= config.questions
      ? fromData
      : [...fromData, ...fallbackByLevel[level]];
    const shuffledPool = shuffle(pool);

    // Select by difficulty distribution
    const easyCount = Math.floor(config.questions * dist.easy);
    const mediumCount = Math.floor(config.questions * dist.medium);
    const hardCount = config.questions - easyCount - mediumCount;

    const easy = shuffle(shuffledPool.filter(q => q.difficulty === 'easy'));
    const medium = shuffle(shuffledPool.filter(q => q.difficulty === 'medium'));
    const hard = shuffle(shuffledPool.filter(q => q.difficulty === 'hard'));

    const generated: ExamQuestion[] = [];
    generated.push(...easy.slice(0, easyCount));
    generated.push(...medium.slice(0, mediumCount));
    generated.push(...hard.slice(0, hardCount));

    // Fill remaining slots if we didn't get enough per difficulty
    const usedIds = new Set(generated.map(q => q.id));
    const remaining = shuffle(shuffledPool.filter(q => !usedIds.has(q.id)));
    for (let i = 0; generated.length < config.questions && i < remaining.length; i++) {
      generated.push(remaining[i]);
    }

    return shuffle(generated).slice(0, config.questions).map((q, idx) => ({ ...q, id: idx + 1 }));
  }, []);

  // Start exam
  const startExam = (level: ExamLevel) => {
    setSelectedLevel(level);
    const generatedQuestions = generateQuestions(level);
    setQuestions(generatedQuestions);
    setUserAnswers(new Array(generatedQuestions.length).fill(''));
    setCurrentQuestion(0);
    setTimeRemaining(EXAM_CONFIG[level].timeMinutes * 60);
    setStage('exam');
  };

  // Answer question
  const answerQuestion = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  };

  // Navigate questions
  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestion(index);
    }
  };

  // Finish exam
  const finishExam = async () => {
    if (!selectedLevel || !user) return;

    const config = EXAM_CONFIG[selectedLevel];
    const results: ExamResult['questionResults'] = [];
    let correctCount = 0;
    let earnedPoints = 0;

    questions.forEach((q, idx) => {
      const userAnswer = userAnswers[idx].toLowerCase().trim();
      const correct = q.type === 'sentence-order'
        ? userAnswer === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer).toLowerCase().trim()
        : Array.isArray(q.correctAnswer)
          ? q.correctAnswer.some(a => a.toLowerCase().includes(userAnswer) || userAnswer.includes(a.toLowerCase()))
          : q.correctAnswer.toLowerCase().trim() === userAnswer ||
            q.correctAnswer.toLowerCase().includes(userAnswer);

      if (correct) {
        correctCount++;
        earnedPoints += q.points;
      }

      results.push({
        question: q,
        userAnswer: userAnswers[idx],
        isCorrect: correct,
      });
    });

    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = (correctCount / questions.length) * 100;
    const passed = percentage >= config.passPercent;
    
    // Calculate grade
    let grade = 'F';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 85) grade = 'A';
    else if (percentage >= 80) grade = 'B+';
    else if (percentage >= 75) grade = 'B';
    else if (percentage >= 70) grade = 'C+';
    else if (percentage >= 65) grade = 'C';
    else if (percentage >= 60) grade = 'D';

    const result: ExamResult = {
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      totalPoints,
      earnedPoints,
      timeUsed: (config.timeMinutes * 60) - timeRemaining,
      timeLimit: config.timeMinutes * 60,
      passed,
      grade,
      questionResults: results,
    };

    setExamResult(result);
    setStage('results');

    // Award XP
    const xpEarned = earnedPoints + (passed ? 50 : 0);
    await updateUser({
      progress: {
        ...user.progress,
        totalXP: user.progress.totalXP + xpEarned,
      },
    });

    // Save result
    await db.upsertDailyStats(user.id, {
      date: new Date().toISOString().split('T')[0],
      xpEarned,
      lessonsCompleted: 1,
      accuracy: Math.round(percentage),
    });
  };

  // Format time
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!user) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {/* Level Selection */}
        {stage === 'select' && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h1 className="heading-2 text-white mb-2">🎓 Modo Examen</h1>
              <p className="text-gray-400">
                Pon a prueba tus conocimientos con un examen cronometrado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(Object.keys(EXAM_CONFIG) as ExamLevel[]).map((level) => {
                const config = EXAM_CONFIG[level];
                return (
                  <motion.button
                    key={level}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => startExam(level)}
                    className="card card-hover text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-accent-primary">{level}</span>
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {config.questions} preguntas
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {config.timeMinutes} minutos
                      </p>
                      <p className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {config.passPercent}% para aprobar
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="card bg-amber-500/10 border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Consejo</p>
                  <p className="text-sm text-gray-400">
                    Selecciona el nivel que corresponda a tu dominio actual. 
                    Puedes repetir el examen para mejorar tu puntuación.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Exam */}
        {stage === 'exam' && questions.length > 0 && (
          <motion.div
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Header with timer */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </h2>
                <p className="text-sm text-gray-400">
                  Nivel {selectedLevel} • {questions[currentQuestion].category}
                </p>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                timeRemaining < 60 ? 'bg-red-500/20 text-red-400' : 'bg-dark-700 text-white'
              }`}>
                <Clock className="w-5 h-5" />
                <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-1 rounded text-xs ${
                  questions[currentQuestion].difficulty === 'easy' 
                    ? 'bg-green-500/20 text-green-400'
                    : questions[currentQuestion].difficulty === 'medium'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {questions[currentQuestion].points} pts
                </span>
              </div>

              <h3 className="text-xl text-white mb-6">
                {questions[currentQuestion].question}
              </h3>

              {/* Multiple choice options */}
              {questions[currentQuestion].type === 'multiple-choice' && (
                <div className="grid gap-3">
                  {questions[currentQuestion].options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => answerQuestion(option)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        userAnswers[currentQuestion] === option
                          ? 'bg-accent-primary text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                    >
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Fill blank or translation */}
              {(questions[currentQuestion].type === 'fill-blank' || 
                questions[currentQuestion].type === 'translation') && (
                <input
                  type="text"
                  value={userAnswers[currentQuestion]}
                  onChange={(e) => answerQuestion(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  className="input-field text-lg"
                />
              )}

              {/* Sentence order */}
              {questions[currentQuestion].type === 'sentence-order' && (() => {
                const qi = currentQuestion;
                const q = questions[qi];
                const available = q.words ?? [];
                const ordered: string[] = sentenceOrder[qi] ?? [];
                // Derive bank display from ordered — just subtract ordered words from available
                const orderedCopy = [...ordered];
                const bankDisplay = available.filter(w => {
                  const idx = orderedCopy.indexOf(w);
                  if (idx !== -1) { orderedCopy.splice(idx, 1); return false; }
                  return true;
                });
                const addWord = (word: string) => {
                  const next = [...ordered, word];
                  setSentenceOrder(prev => ({ ...prev, [qi]: next }));
                  answerQuestion(next.join(' ').toLowerCase());
                };
                const removeWord = (idx: number) => {
                  const next = ordered.filter((_, i) => i !== idx);
                  setSentenceOrder(prev => ({ ...prev, [qi]: next }));
                  answerQuestion(next.join(' ').toLowerCase());
                };
                const clearAll = () => {
                  setSentenceOrder(prev => ({ ...prev, [qi]: [] }));
                  answerQuestion('');
                };
                return (
                  <div className="space-y-4">
                    {/* Answer area */}
                    <div className="min-h-[56px] p-3 bg-dark-700 rounded-xl border border-dark-600 flex flex-wrap gap-2 items-start">
                      {ordered.length === 0 && (
                        <span className="text-gray-500 text-sm">Haz clic en las palabras para ordenarlas aquí...</span>
                      )}
                      {ordered.map((word, i) => (
                        <button
                          key={i}
                          onClick={() => removeWord(i)}
                          className="px-3 py-1 bg-accent-primary text-white rounded-lg text-sm hover:bg-accent-primary/80 transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                    {/* Word bank */}
                    <div className="flex flex-wrap gap-2">
                      {bankDisplay.map((word, i) => (
                        <button
                          key={i}
                          onClick={() => addWord(word)}
                          className="px-3 py-1 bg-dark-600 text-gray-300 rounded-lg text-sm hover:bg-dark-500 border border-dark-500 transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                    {ordered.length > 0 && (
                      <button onClick={clearAll} className="text-xs text-gray-500 hover:text-gray-300 underline">
                        Limpiar
                      </button>
                    )}
                  </div>
                );
              })()}

            </div>

            {/* Question navigator */}
            <div className="flex flex-wrap gap-2">
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToQuestion(idx)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    idx === currentQuestion
                      ? 'bg-accent-primary text-white'
                      : userAnswers[idx]
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => goToQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
                className="btn-secondary flex-1 disabled:opacity-50"
              >
                Anterior
              </button>
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={() => goToQuestion(currentQuestion + 1)}
                  className="btn-primary flex-1"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={finishExam}
                  className="btn-primary flex-1 bg-green-600 hover:bg-green-700"
                >
                  Terminar Examen
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Results */}
        {stage === 'results' && examResult && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Result header */}
            <div className={`card text-center ${
              examResult.passed 
                ? 'bg-gradient-to-br from-green-900/50 to-dark-800' 
                : 'bg-gradient-to-br from-red-900/50 to-dark-800'
            }`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                {examResult.passed ? (
                  <Trophy className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                ) : (
                  <Target className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                )}
              </motion.div>

              <h1 className={`text-3xl font-bold mb-2 ${
                examResult.passed ? 'text-green-400' : 'text-red-400'
              }`}>
                {examResult.passed ? '¡Aprobado!' : 'Sigue Practicando'}
              </h1>

              <div className="flex justify-center gap-8 mt-6">
                <div>
                  <p className="text-4xl font-bold text-white">{examResult.grade}</p>
                  <p className="text-sm text-gray-400">Calificación</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">
                    {Math.round((examResult.correctAnswers / examResult.totalQuestions) * 100)}%
                  </p>
                  <p className="text-sm text-gray-400">Precisión</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">{examResult.earnedPoints}</p>
                  <p className="text-sm text-gray-400">Puntos</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{examResult.correctAnswers}</p>
                <p className="text-xs text-gray-400">Correctas</p>
              </div>
              <div className="card text-center">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">
                  {examResult.totalQuestions - examResult.correctAnswers}
                </p>
                <p className="text-xs text-gray-400">Incorrectas</p>
              </div>
              <div className="card text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{formatTime(examResult.timeUsed)}</p>
                <p className="text-xs text-gray-400">Tiempo usado</p>
              </div>
              <div className="card text-center">
                <Zap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">
                  +{examResult.earnedPoints + (examResult.passed ? 50 : 0)}
                </p>
                <p className="text-xs text-gray-400">XP ganados</p>
              </div>
            </div>

            {/* Review answers */}
            <div className="card">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="w-full flex items-center justify-between"
              >
                <span className="font-medium text-white">Ver respuestas detalladas</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                  showExplanation ? 'rotate-90' : ''
                }`} />
              </button>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {examResult.questionResults.map((result, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg ${
                          result.isCorrect 
                            ? 'bg-green-500/10 border border-green-500/20' 
                            : 'bg-red-500/10 border border-red-500/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {result.isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm text-white">{result.question.question}</p>
                            {!result.isCorrect && (
                              <div className="mt-2 text-xs">
                                <p className="text-red-400">Tu respuesta: {result.userAnswer || '(vacío)'}</p>
                                <p className="text-green-400">
                                  Correcta: {Array.isArray(result.question.correctAnswer) 
                                    ? result.question.correctAnswer.join(' / ')
                                    : result.question.correctAnswer}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="btn-secondary flex-1 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Inicio
              </button>
              <button
                onClick={() => setStage('select')}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Otro Examen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
