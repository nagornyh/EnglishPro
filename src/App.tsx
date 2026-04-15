import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

import Layout from './components/Layout';

// Imports estáticos: evita fallos "Failed to fetch dynamically imported module" en dev
// (Vite + lazy + ciertas redes/proxy/alias) y mantiene una sola instancia de React.
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Levels from './pages/Levels';
import LevelDetail from './pages/LevelDetail';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Achievements from './pages/Achievements';
import Settings from './pages/Settings';
import PlacementTest from './pages/PlacementTest';
import TaskComplete from './pages/TaskComplete';
import LessonFlow from './pages/LessonFlow';
import StudyPlan from './pages/StudyPlan';
import ErrorReviewMode from './pages/ErrorReviewMode';
import ExamMode from './pages/ExamMode';
import StoryMode from './pages/StoryMode';
import ReadingPractice from './pages/ReadingPractice';
import GrammarLessons from './pages/GrammarLessons';
import PhrasesBank from './pages/PhrasesBank';
import IdiomsExplorer from './pages/IdiomsExplorer';
import RegionalVariants from './pages/RegionalVariants';
import ReviewSession from './pages/ReviewSession';
import ScenarioMode from './pages/ScenarioMode';
import WordExplorer from './pages/WordExplorer';
import QuickLesson from './pages/QuickLesson';
import TroubleWordsReview from './pages/TroubleWordsReview';
import SentenceBank from './pages/SentenceBank';
import Challenges from './pages/Challenges';
import Collection from './pages/Collection';
import Notebook from './pages/Notebook';
import GrammarExplorer from './pages/GrammarExplorer';
import LevelSelector from './pages/LevelSelector';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-gray-400">Cargando EnglishPro...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public route */}
      <Route
        path="/welcome"
        element={user ? <Navigate to="/" replace /> : <Welcome />}
      />

      {/* Placement test - semi-protected (can access without full setup) */}
      <Route path="/placement-test" element={<PlacementTest />} />

      {/* Level selector for initial setup */}
      <Route
        path="/select-level"
        element={
          <ProtectedRoute>
            <LevelSelector isInitialSetup />
          </ProtectedRoute>
        }
      />

      {/* Protected routes with Layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/level/:levelId" element={<LevelDetail />} />
        <Route path="/level/:levelId/task/:taskId" element={<Practice />} />
        <Route path="/lesson/:levelId/:taskId" element={<LessonFlow />} />
        <Route path="/task-complete/:levelId/:taskId" element={<TaskComplete />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/:activityType" element={<Practice />} />
        <Route path="/study-plan" element={<StudyPlan />} />
        <Route path="/error-review" element={<ErrorReviewMode />} />
        <Route path="/exam" element={<ExamMode />} />
        <Route path="/stories" element={<StoryMode />} />
        <Route path="/reading" element={<ReadingPractice />} />
        <Route path="/grammar" element={<GrammarLessons />} />
        <Route path="/phrases" element={<PhrasesBank />} />
        <Route path="/idioms" element={<IdiomsExplorer />} />
        <Route path="/regional" element={<RegionalVariants />} />
        <Route path="/review" element={<ReviewSession />} />
        <Route path="/scenarios" element={<ScenarioMode />} />
        <Route path="/words" element={<WordExplorer />} />
        <Route path="/quick" element={<QuickLesson />} />
        <Route path="/trouble-words" element={<TroubleWordsReview />} />
        <Route path="/sentences" element={<SentenceBank />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/grammar-explorer" element={<GrammarExplorer />} />
        <Route path="/change-level" element={<LevelSelector />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Catch all - redirect to home or welcome */}
      <Route path="*" element={<Navigate to={user ? '/' : '/welcome'} replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <UserProvider>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
