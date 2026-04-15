# 🎓 EnglishPro — Aplicación de Aprendizaje de Inglés

Una aplicación web interactiva y moderna para aprender inglés, desde nivel principiante (A1) hasta avanzado (C2+), con 13 niveles, más de 146 lecciones completas y un sistema de gamificación completo.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan) ![Vite](https://img.shields.io/badge/Vite-7-purple)

---

## 📋 Índice

1. [Para Usuarios de Windows — Guía de Inicio Desde Cero](#-para-usuarios-de-windows--guía-de-inicio-desde-cero)
2. [Cómo Usar la Aplicación](#-cómo-usar-la-aplicación)
3. [Todas las Secciones y Modos](#-todas-las-secciones-y-modos)
4. [Contenido del Curso](#-contenido-del-curso)
5. [Sistema de Aprendizaje Avanzado](#-sistema-de-aprendizaje-avanzado)
6. [Historial de Cambios](#-historial-de-cambios)
7. [Para Desarrolladores](#-para-desarrolladores)
8. [Solución de Problemas](#-solución-de-problemas)

---

## 🖥️ Para Usuarios de Windows — Guía de Inicio Desde Cero

> Esta sección está escrita para personas **sin experiencia técnica**. Sigue los pasos en orden y tendrás la app funcionando en menos de 10 minutos. Si ya tienes Node.js instalado, salta al Paso 2.

---

### Paso 1 — Instalar Node.js (solo la primera vez)

Node.js es el programa que permite ejecutar la aplicación en tu computadora. **Solo necesitas instalarlo una vez.**

1. Abre tu navegador (Chrome, Edge, etc.) y ve a:
   **https://nodejs.org**

2. Haz clic en el botón verde grande que dice **"LTS"** (es la versión recomendada).

3. Se descargará un archivo `.msi`. Ábrelo y sigue los pasos del instalador (haz clic en "Next" → "Next" → "Install" → "Finish").

4. Para verificar que se instaló correctamente, abre **PowerShell** o **Símbolo del sistema (cmd)**:
   - Presiona las teclas `Windows + R`
   - Escribe `powershell` y presiona Enter

   Luego escribe estos comandos (uno a la vez) y presiona Enter después de cada uno:
   ```
   node -v
   npm -v
   ```
   Si ves números como `v22.x.x` y `10.x.x`, ¡Node.js está instalado correctamente!

---

### Paso 2 — Descargar el proyecto

Si tienes el proyecto en una carpeta de tu computadora (por ejemplo `C:\Users\TuNombre\engpage\english-learning-app`), ve directamente al Paso 3.

Si aún no lo tienes, descárgalo y descomprímelo en una carpeta de tu elección.

---

### Paso 3 — Instalar las dependencias (solo la primera vez)

1. Abre **PowerShell** (presiona `Windows + R`, escribe `powershell`, presiona Enter).

2. Navega a la carpeta del proyecto. Reemplaza la ruta con la ruta real en tu computadora:
   ```powershell
   cd "C:\ruta\a\english-learning-app"
   ```
   Por ejemplo:
   ```powershell
   cd "C:\Users\TuNombre\engpage\english-learning-app"
   ```

3. Ejecuta el siguiente comando para instalar todo lo necesario:
   ```powershell
   npm install
   ```
   Esto puede tardar entre 1 y 3 minutos. Verás texto avanzar en la pantalla — es normal.

---

### Paso 4 — Iniciar la aplicación

Una vez que `npm install` haya terminado, ejecuta:

```powershell
npm run dev
```

Verás algo como esto en la pantalla:
```
  VITE v7.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
```

4. Abre tu navegador y ve a la dirección:

   **http://localhost:5173**

   ¡La aplicación está lista para usar!

> **Nota:** Cada vez que quieras usar la app, solo necesitas repetir el Paso 4 (`npm run dev`). El Paso 3 (`npm install`) solo se hace una vez.

#### Opción alternativa: Abrir dentro de VS Code

Si tienes el proyecto abierto en **Visual Studio Code**, puedes ver la app sin salir del editor:

1. Abre la terminal integrada (`Ctrl + ñ` o `Ctrl + \``)
2. Ejecuta `npm run dev`
3. Presiona `Ctrl + Shift + P` y escribe **"Simple Browser: Show"**
4. Pega la URL `http://localhost:5174` (o la que indique la terminal)
5. La app se abre en una pestaña dentro de VS Code

---

### Paso 5 — Cerrar la aplicación

Cuando termines de usar la app, vuelve a la ventana de PowerShell y presiona:

```
Ctrl + C
```

Eso detiene el servidor. Puedes cerrar PowerShell normalmente.

---

### Resumen rápido de comandos

| Lo que quieres hacer | Comando |
|----------------------|---------|
| Instalar (primera vez) | `npm install` |
| Iniciar la app | `npm run dev` |
| Detener la app | `Ctrl + C` |
| Ejecutar los tests | `npm test` |

---

## 🎮 Cómo Usar la Aplicación

### Primer Uso — Crear tu Perfil

Al abrir la app por primera vez verás la **pantalla de bienvenida**:

1. Haz clic en **"Nuevo usuario"**
2. Escribe tu nombre y confirma
3. La app te hará un **test de nivel** opcional — te hará preguntas para saber dónde comenzar
4. Si no quieres hacer el test, elige tu nivel manualmente (A1 = principiante completo)
5. ¡Listo! Ya estás dentro de la app

> Tu progreso se guarda automáticamente en tu navegador. No necesitas crear una cuenta ni conectarte a internet.

---

### El Panel Principal (Dashboard)

Es la primera pantalla que ves al iniciar sesión. Desde aquí puedes ver de un vistazo:

| Elemento | Qué significa |
|----------|---------------|
| 🔥 **Racha** | Cuántos días seguidos has estudiado |
| ⚡ **XP de hoy** | Puntos de experiencia ganados hoy |
| 📊 **Progreso del nivel** | Qué porcentaje del nivel actual completaste |
| 🎯 **Meta diaria** | Cuánto te falta para cumplir tu objetivo del día |
| 📚 **Continuar lección** | El botón grande para retomar donde lo dejaste |
| 🏆 **Desafíos diarios** | Retos cortos con recompensas de XP |
| 📖 **Palabra del Día** | Vocabulario nuevo cada día con audio y ejemplo |
| 🧠 **Perfil de Habilidades** | Gráfico adaptativo de tus fortalezas y debilidades |
| 📝 **Mini-Examen** | Evaluación bisemanal de 10 preguntas adaptadas |

---

## 📖 Todas las Secciones y Modos

La app tiene un menú de navegación en la parte inferior (en móvil) o lateral (en escritorio). En escritorio, la barra lateral se puede colapsar para ganar más espacio. En móvil, una barra de navegación inferior con 5 accesos rápidos (Inicio, Niveles, Práctica, Progreso, Logros) permite navegar sin abrir el menú completo. Todas las páginas incluyen migas de pan (breadcrumbs) para saber siempre dónde estás y volver atrás fácilmente. Aquí está todo lo que puedes hacer:

---

### 🏠 Panel Principal
**Ruta:** `/` (la pantalla de inicio)

Tu centro de mando. Muestra tu progreso, racha actual, XP ganado hoy, y un botón directo para continuar tu lección activa. También incluye la Palabra del Día, los desafíos diarios, tu perfil de habilidades adaptativo y tu posición en la liga personal. Todo el contenido está centrado y adaptado al tamaño de la pantalla.

---

### 📚 Niveles y Lecciones
**Ruta:** `/levels` y `/level/:id`

Aquí están los **13 niveles del curso**, organizados por el marco europeo CEFR:

| Nivel App | CEFR | Descripción |
|-----------|------|-------------|
| 1 | A1 | Principiante — saludos, números, colores |
| 2 | A1+ | Básico — familia, casa, rutinas |
| 3 | A2 | Elemental — tiempos simples, compras |
| 4 | A2+ | Pre-intermedio — viajes, trabajo |
| 5 | B1 | Intermedio bajo — opiniones, planes |
| 6 | B1+ | Intermedio — narración, descripción |
| 7 | B2 | Intermedio alto — debate, argumentos |
| 8 | B2+ | Pre-avanzado — idioms, register |
| 9 | C1 | Avanzado — lenguaje académico |
| 10 | C1+ | Avanzado alto — matices y precisión |
| 11 | C2 | Maestría — lenguaje nativo |
| 12 | C2+ | Experto — registro literario |
| 13 | C2++ | Maestro — dominio completo |

Dentro de cada nivel hay varias **tareas/lecciones**. Al hacer clic en una lección entras al **Flujo de Lección**.

---

### 🎯 Flujo de Lección (LessonFlow)
**Ruta:** `/lesson/:nivel/:tarea`

Es el corazón de la app. Cada lección tiene varios pasos que avanzan automáticamente:

1. **Introducción** — Se explica qué vas a aprender en esta lección
2. **Teoría** — Explicación del tema con ejemplos (gramática, vocabulario, etc.)
3. **Actividades** — Ejercicios interactivos para practicar (ver tipos abajo)
4. **Repaso Final** — Consolidación de lo aprendido
5. **¡Completado!** — Pantalla de logro con XP ganado

Durante la lección verás:
- Una **barra de progreso** en la parte superior que avanza con cada paso
- Un **indicador visual del paso actual** con nombre y contador (ej. "Vocabulario 5/18")
- Un **contador de XP** que se llena mientras aciertas
- Botones de **"Continuar"** o **"Comprobar"** para avanzar
- Botón **"Atrás"** en cada paso para volver al anterior (sin salir de la lección)
- Botón flotante **"Repasar teoría"** para consultar la teoría en cualquier momento
- Los pasos del stepper son clicables si ya los completaste

---

### 🏋️ Práctica Libre
**Ruta:** `/practice`

Aquí puedes practicar actividades sueltas sin seguir el orden del curso. Elige el tipo de actividad que quieras:

| Actividad | Descripción |
|-----------|-------------|
| 🃏 **Flashcards** | Tarjetas de vocabulario: ves la palabra, piensas la respuesta, la volteas |
| ❓ **Quiz** | Preguntas de opción múltiple |
| ✏️ **Completa los espacios** | Rellena los huecos en una oración |
| 🔄 **Traducción** | Traduce frases del español al inglés |
| 🔤 **Ordena las palabras** | Forma una oración moviendo las palabras |
| 🔁 **Repetición espaciada** | Repasa lo que estás a punto de olvidar |

---

### 📖 Gramática
**Ruta:** `/grammar`

Referencia completa de todos los temas gramaticales del curso, organizados por nivel. Puedes buscar cualquier tiempo verbal, estructura o regla y ver ejemplos con explicaciones en español.

---

### 🔍 Explorador de Gramática
**Ruta:** `/grammar-explorer`

Una herramienta interactiva para explorar y practicar reglas gramaticales específicas con ejercicios en tiempo real.

---

### 🔄 Sesión de Repaso
**Ruta:** `/review`

El sistema de **repetición espaciada** (SRS). La app recuerda qué palabras y conceptos ya sabes y cuáles estás a punto de olvidar, y te presenta exactamente lo que necesitas repasar en ese momento. Es la forma más eficiente de memorizar.

---

### ⚡ Lección Rápida
**Ruta:** `/quick`

Lecciones de **5 minutos**. Perfectas para días en que tienes poco tiempo. La app selecciona el contenido más importante para que no pierdas la racha.

---

### 📝 Modo Examen
**Ruta:** `/exam`

Un examen cronometrado con preguntas de todos los niveles que has estudiado. Ideal para medir tu progreso real. Al terminar ves tu puntuación detallada.

---

### 📖 Modo Historia
**Ruta:** `/stories`

Lee y escucha historias cortas en inglés adaptadas a tu nivel. Las palabras difíciles están resaltadas y puedes hacer clic en ellas para ver su traducción y pronunciación.

---

### 🗣️ Modo Escenarios
**Ruta:** `/scenarios`

Conversaciones simuladas en situaciones reales: en un restaurante, en el aeropuerto, en una entrevista de trabajo, etc. Practica el inglés tal como se usa en la vida cotidiana.

---

### 📖 Lectura
**Ruta:** `/reading`

Textos graduados por nivel con comprensión lectora. Desde noticias sencillas hasta artículos académicos, según tu nivel actual.

---

### 🔤 Explorador de Palabras
**Ruta:** `/words`

Explora familias de palabras: cómo una raíz se convierte en verbo, sustantivo, adjetivo y adverbio. Por ejemplo: `happy → happiness → unhappy → happily`.

---

### 📝 Banco de Frases
**Ruta:** `/phrases`

Más de 75 phrasal verbs y expresiones comunes organizados por categoría, con ejemplos y pronunciación.

---

### 💬 Expresiones (Idioms)
**Ruta:** `/idioms`

70 expresiones idiomáticas del inglés con su equivalente en español, ejemplos de uso y pronunciación.

---

### 📐 Variantes Regionales
**Ruta:** `/regional`

Diferencias entre el inglés americano, británico y australiano: pronunciación, vocabulario y ortografía.

---

### 🏥 Revisión de Errores
**Ruta:** `/error-review`

La app registra todos tus errores. En esta sección puedes repasar exactamente los puntos donde te equivocaste, con explicaciones detalladas de por qué estaba mal.

---

### 😰 Palabras Difíciles
**Ruta:** `/trouble-words`

Las palabras que más se te olvidan o con las que más te equivocas se agrupan aquí para un repaso enfocado.

---

### 📏 Banco de Oraciones
**Ruta:** `/sentences`

Más de 25 oraciones graduadas por dificultad para practicar lectura y escritura en contexto real.

---

### 🎯 Desafíos
**Ruta:** `/challenges`

Retos diarios y semanales con recompensas de XP extra. Incluye:
- Retos de racha (estudia X días seguidos)
- Retos de precisión (completa una actividad sin errores)
- Retos de velocidad
- Boss Battles (desafíos difíciles de nivel)

---

### 📅 Plan de Estudio
**Ruta:** `/study-plan`

Un plan de estudio personalizado que organiza tu aprendizaje semana a semana según tu nivel, disponibilidad de tiempo y objetivos. Puedes expandir cada semana para ver las actividades recomendadas.

---

### 📓 Libreta Personal
**Ruta:** `/notebook`

Tu cuaderno digital de estudio. Puedes:
- **Crear notas** con texto libre, etiquetas y tipo (gramática, vocabulario, etc.)
- **Crear listas de vocabulario** personalizadas con palabras que quieres memorizar
- **Sesiones de estudio** basadas en tus listas personales
- Ver estadísticas de tus notas y listas

---

### 🏆 Mi Colección
**Ruta:** `/collection`

Sistema de recompensas visuales. Al ganar XP y completar logros desbloqueas:
- **Avatares** — personaliza tu foto de perfil (👤 Estudiante, 🎓 Académico, etc.)
- **Temas** — cambia los colores de toda la app (Oscuro, Medianoche, Bosque, etc.)
- **Coleccionables** — medallas y trofeos con rareza (Común → Épico → Legendario)

---

### 📊 Mi Progreso
**Ruta:** `/progress`

Estadísticas detalladas de tu aprendizaje:
- XP total acumulado
- Lecciones completadas
- Palabras aprendidas
- Racha actual y racha más larga
- Gráfica semanal de actividad
- Desglose por habilidades (gramática, vocabulario, listening, etc.)

---

### 🏅 Logros
**Ruta:** `/achievements`

38 logros desbloqueables organizados por categoría:
- **XP** — acumula puntos de experiencia
- **Rachas** — estudia días consecutivos
- **Lecciones** — completa lecciones
- **Vocabulario** — aprende palabras nuevas
- **Coleccionables** — desbloquea items de la colección

---

### ⚙️ Configuración
**Ruta:** `/settings`

Personaliza tu experiencia:

| Sección | Opciones |
|---------|----------|
| **Perfil** | Cambia tu nombre, borra cuenta |
| **Apariencia** | Tema de color, tamaño de letra |
| **Notificaciones** | Recordatorios de estudio (activa/desactiva) |
| **Sonido** | Efectos de sonido, pronunciación en voz alta |
| **Aprendizaje** | Meta diaria de XP, velocidad de lecciones |
| **Datos** | Exportar progreso (JSON), importar progreso, limpiar todo |
| **Perfiles** | Crear, seleccionar y eliminar perfiles desde la pantalla de inicio |

---

### 🧪 Test de Nivel
**Ruta:** `/placement-test`

Un test de diagnóstico de 10 preguntas para determinar tu nivel inicial. Lo haces una sola vez al crear tu perfil. También puedes repetirlo desde Configuración si sientes que tu nivel ha cambiado.

---

## 🎮 Tipos de Actividades

Dentro de las lecciones y la práctica libre encontrarás estos tipos de ejercicios:

| Icono | Actividad | Cómo funciona |
|-------|-----------|---------------|
| 🃏 | **Flashcards** | Ve la palabra → adivina → voltea la tarjeta para confirmar |
| ❓ | **Opción Múltiple** | Elige la respuesta correcta entre 4 opciones |
| ✏️ | **Completa el espacio** | Escribe la palabra que falta en la oración |
| 🔄 | **Traducción** | Escribe la traducción de una frase |
| 🔤 | **Ordena palabras** | Arrastra palabras para formar la oración correcta |
| 🔡 | **Anagrama** | Reordena las letras para formar la palabra |
| 🎯 | **Une los pares** | Conecta cada palabra con su traducción |
| 🎤 | **Escucha** | Escucha el audio y elige la opción correcta |
| ✍️ | **Escritura guiada** | Escribe un párrafo corto con orientación |
| 🎭 | **Diálogo** | Practica una conversación interactiva |
| 📰 | **Lector de noticias** | Lee un artículo y responde preguntas |
| 🔀 | **Transformación** | Reescribe la oración usando una estructura dada |
| ⚡ | **Ronda rápida** | Responde el máximo de preguntas en 60 segundos |
| 💀 | **Ahorcado** | Adivina la palabra letra por letra |
| 🏗️ | **Constructor** | Construye oraciones complejas paso a paso |
| ⬜ | **Crucigrama** | Crucigrama de vocabulario |

---

## 🏅 Sistema de XP y Gamificación

La app tiene un sistema de puntos para mantenerte motivado:

- **XP (Puntos de Experiencia):** ganas XP por completar actividades y lecciones
- **Racha:** si estudias todos los días, tu racha sube. Si fallas un día, vuelve a 0
- **Meta diaria:** puedes configurar cuántos XP quieres ganar por día
- **Niveles de perfil:** al acumular suficiente XP, tu perfil sube de nivel
- **Liga personal:** compite contigo mismo semana a semana
- **Logros:** desbloquea medallas por hitos específicos
- **Colección:** desbloquea avatares, temas y coleccionables con tu progreso

---

## 📊 Resumen del Contenido del Curso

| Categoría | Cantidad |
|-----------|----------|
| 📚 Niveles | 13 (A1 → C2++) |
| 📖 Temas de Gramática | ~66 |
| 📦 Palabras de Vocabulario | ~650+ |
| 🗣️ Funciones Comunicativas | 24 |
| 🔊 Reglas de Pronunciación | 50 |
| ✍️ Temas de Escritura | 6 |
| 🎮 Tipos de Actividades | 16 |
| 🏅 Logros Desbloqueables | 38 |
| 🧠 Sistemas de Aprendizaje | 16 |

---

## 📚 Contenido del Curso

### Gramática Verbal (22 temas)

| Tiempo | Nivel | Ejemplo |
|--------|-------|---------|
| Verb TO BE (Present/Past) | 1 | I am / I was |
| Present Simple | 1 | I work every day |
| Present Continuous | 2 | I am working now |
| Past Simple | 2 | I worked yesterday |
| Past Continuous | 3 | I was working |
| Future Simple (Will) | 3 | I will work |
| Going to Future | 3 | I'm going to work |
| Present Perfect | 4 | I have worked |
| Present for Future | 4 | The train leaves at 5 |
| Past Perfect | 5 | I had worked |
| Present Perfect Continuous | 6 | I have been working |
| Future Continuous | 6 | I will be working |
| Past Perfect Continuous | 7 | I had been working |
| Future Perfect | 7 | I will have worked |
| Future Perfect Continuous | 8 | I will have been working |
| Zero Conditional | 4 | If you heat water, it boils |
| First Conditional | 4 | If it rains, I will stay home |
| Second Conditional | 5 | If I were rich, I would travel |
| Third Conditional | 7 | If I had studied, I would have passed |
| Mixed Conditionals | 7 | If I had studied, I would be a doctor now |
| Passive Voice | 6 | The cake was eaten |
| Reported Speech | 8 | She said she was tired |

### Gramática Esencial (23 temas)

- Artículos: A/An, The, Zero Article
- Pronombres: Subject, Object, Possessive, Reflexive
- Preposiciones de tiempo, lugar y movimiento
- Countable vs Uncountable Nouns
- Quantifiers (some, any, much, many, few, little)
- Demonstratives (this, that, these, those)
- There is / There are
- Adjective Order (OSASCOMP)
- Adverbs (manner, frequency, degree)
- Relative Clauses (who, which, that)
- Gerunds vs Infinitives
- Conjunctions y Linking Words
- Subject-Verb Agreement

### Gramática Adicional (15 temas)

| Tema | Nivel | Ejemplo |
|------|-------|---------|
| Comparatives & Superlatives | 2–3 | bigger, the biggest |
| Double Comparatives | 4 | The more you practice, the better you get |
| Tag Questions | 3 | You're coming, aren't you? |
| Indirect Questions | 4 | Could you tell me where the bank is? |
| Echo Questions | 4 | You went WHERE? |
| Negative Sentences | 1 | I don't like / She doesn't work |
| Emphatic Do/Does/Did | 4 | I DO understand! |
| So/Neither/Nor | 3 | So do I / Neither am I |
| Both/Either/Neither | 3 | Both of them / Either way |
| Articles with Proper Nouns | 4 | The USA, Ø Mount Everest |
| Subjunctive | 6 | I suggest (that) he go |
| Participle Clauses | 6 | Walking down the street, I saw... |
| Hedging Language | 5 | It might be, Perhaps, It seems... |
| Inversion | 8 | Never have I seen... |
| Cleft Sentences | 7 | It was John who called |

### Modales (6 temas)

| Modal | Nivel | Uso |
|-------|-------|-----|
| May / Might | 3 | Posibilidad, permiso |
| Will / Would (extended) | 3 | Peticiones, hábitos pasados |
| Shall | 4 | Sugerencias (I/we) |
| Need to / Needn't | 3 | Necesidad |
| Had Better | 4 | Consejo fuerte |
| Modal Perfects | 6 | could/should/would have |

### Semi-Modales (8 temas)

| Expresión | Nivel | Ejemplo |
|-----------|-------|---------|
| Be able to | 2 | I will be able to help |
| Be supposed to | 3 | You're supposed to be here |
| Be allowed to | 2 | Smoking is not allowed |
| Be about to | 3 | I'm about to leave |
| Be due to | 4 | The train is due to arrive |
| Be bound to | 4 | It's bound to rain |
| Be likely to | 3 | She's likely to agree |
| Used to / Be used to / Get used to | 3 | I used to smoke / I'm used to it |

### Vocabulario (~650+ palabras)

| Categoría | Cantidad |
|-----------|----------|
| Vocabulario Cotidiano | ~400 (12 temas) |
| Phrasal Verbs | 75 |
| Verbos Irregulares | 128 |
| Idioms | 70 |
| Vocabulario IT/Tecnología | 65 |
| Collocations (Make/Do/Take/Have/Get) | 60+ |
| False Friends (español-inglés) | 18 |

> Todas las palabras incluyen pronunciación españolizada. Ejemplo: `Three → Zri`, `Water → Wóter`, `Hello → Jelóu`.

### Pronunciación (50 reglas)

- 25 sonidos IPA con guía española (incluyendo /θ/, /ð/, /ʃ/, /æ/, schwa)
- Letras mudas (knife, write, climb, hour)
- Reglas de acento y entonación

### Funciones Comunicativas (24)

Dar y pedir direcciones, hacer reservaciones, compras, viajes, expresar sorpresa, felicitar, ofrecer ayuda, expresar preferencias, y 16 más.

### Escritura (6 temas)

- Estructura de emails (formal e informal)
- Puntuación (comma, apostrophe, semicolon)
- Estructura de párrafos
- Conectores escritos (furthermore, however, therefore...)
- Registro formal vs informal
- Abreviaciones comunes

---

## 🧠 Sistema de Aprendizaje Avanzado

La app incorpora **16 sistemas** de aprendizaje basados en ciencia cognitiva:

| Fase | Sistema | Qué hace |
|------|---------|----------|
| 1 | Repetición Espaciada (SM-2) | Programa repasos en el momento exacto antes de olvidar |
| 2 | Producción Activa | Ejercicios de construcción, no solo reconocimiento |
| 3 | Escenarios Inmersivos | Conversaciones en contextos reales |
| 4 | Scaffolding Progresivo | Ayudas que se reducen según tu dominio |
| 5 | Familias de Palabras | Conexiones morfológicas (happy → happiness) |
| 6 | Contexto Personalizado | Ejemplos adaptados a tus intereses |
| 7 | Microlearning | Lecciones de 5 minutos con logros inmediatos |
| 8 | Refuerzo Inteligente | Seguimiento de palabras problemáticas |
| 9 | Mnemotécnicas | Asociaciones visuales y etimologías |
| 10 | Feedback Enriquecido | Explicaciones detalladas de cada error |
| 11 | Variación de Ejercicios | Rotación de formatos para evitar monotonía |
| 12 | Timing Óptimo | Detección de fatiga cognitiva |
| 13 | Motivación Intrínseca | Datos curiosos y milestones significativos |
| 14 | Input Comprensible | Oraciones graduadas por dificultad |
| 15 | Motor Adaptativo | Ajusta la dificultad automáticamente según tu rendimiento |
| 16 | Interfaz Responsiva | Layout adaptativo con sidebar colapsable, bottom nav y container centrado |

---

## � Historial de Cambios

### Abril 2026 — Mejoras Globales de Calidad

#### Interactividad y Feedback en Actividades
- **Dictado**: Ahora tiene botón **"Comprobar"** que valida la respuesta del usuario contra el texto original. Muestra ✓ verde si es correcto o ✗ rojo con la respuesta correcta visible. El textarea se bloquea después de comprobar.
- **Producción escrita**: Incluye contador de palabras en tiempo real, validación mínima (5 palabras para continuar), y feedback visual verde al alcanzar 10+ palabras.
- **Escritura libre**: Validación contra el mínimo de palabras configurado por ejercicio. Contador cambia de gris a verde al cumplir el mínimo. Botón "Continuar" deshabilitado hasta cumplir el requisito.
- **Quiz de consolidación**: Explicaciones en español mostradas inline inmediatamente después de cada respuesta (no solo en el modal de revisión).
- **Preguntas tipo Matching**: Interfaz nueva de columna izquierda/derecha con selección visual, indicadores de pares correctos/incorrectos con verde/rojo.
- **Preguntas tipo Ordering**: Feedback por posición — verde si el elemento está en la posición correcta, rojo si no, con el orden correcto revelado después.

#### Correcciones de Estabilidad
- **Crash de hooks resuelto**: `renderSelfEvaluation` usaba `React.useState` directamente en una función non-component. Extraído a componente `SelfEvaluationStep` con wrapper.
- **ConsolidationQuiz**: Corregidos errores TypeScript de `options` posiblemente undefined.

#### False Friends (Amigos Falsos)
- `buildOptions()` ahora **garantiza** que la opción correcta y la incorrecta siempre aparecen en las 4 opciones.
- `buildContextMap()` muestra el significado en español de cada opción durante la corrección.
- `PronunciationHint` se muestra solo después de comprobar (no antes, para no dar pistas).
- Corregido soporte de fonética para frases de varias palabras.

#### Backup y Restauración de Progreso
- El archivo JSON de exportación ahora incluye **lecciones en curso** (`lessonDrafts`): si el usuario pausó a mitad de una lección, al restaurar continuará desde exactamente el mismo paso.
- La importación restaura con el **mismo ID y nombre** de perfil — sin crear duplicados ni sufijo "(imported)".
- Botón **"Restaurar progreso guardado"** añadido directamente en la pantalla de inicio (bienvenida).
- Botón de **eliminar perfil** visible en todos los perfiles de la pantalla de inicio, con confirmación.
- `ErrorBoundary` mejorado: errores de contexto React stale (tras HMR) disparan `window.location.reload()` en lugar de un reset inútil.
- `UserContext` configurado con `import.meta.hot.decline()` para forzar recarga completa cuando Vite invalida el módulo, evitando el error "useUser must be used within a UserProvider".

#### Colores y Visibilidad
- **Niveles 10–13**: Colores actualizados para contraste en fondo oscuro:
  - Nivel 10 (Expert+): Violeta claro `#a78bfa`
  - Nivel 11 (Mastery): Púrpura `#c084fc`
  - Nivel 12 (Mastery+): Rosa `#f472b6`
  - Nivel 13 (Native-Like): Dorado `#fbbf24`
- Selector de nivel (LevelSelector) actualizado con los mismos colores.

#### UI y Traducciones
- Todos los botones e instrucciones en español en los 41 renderers de pasos.
- `PronunciationHint` integrado en Flashcards, MultipleChoice, ListenAndSelect, IrregularVerbsPractice y FalseFriendsPractice.
- Header de lección: título a la izquierda, XP + Teoría + Salir a la derecha.
- Sidebar con hover-reveal (2px colapsado, 72px expandido) con `SaveProgressButton` integrado.

#### Datos y Contenido
- **146 tareas verificadas** en 13 niveles con campos completos:
  - `introduction`, `consolidationQuiz`, `commonMistakes`, `pronunciationFocus`, `modelDialogue`, `culturalNote`, `vocabulary`/`words`
- Cada nivel tiene entre 10-12 tareas con quiz de consolidación incluido.

---

## �👨‍💻 Para Desarrolladores

### Requisitos del Sistema

- **Node.js** v18 o superior
- **npm** v9 o superior

```powershell
node -v    # v18.x.x o superior
npm -v     # 9.x.x o superior
```

### Scripts Disponibles

```powershell
npm run dev          # Inicia el servidor de desarrollo (http://localhost:5173)
npm run build        # Compila para producción (genera la carpeta /dist)
npm run preview      # Previsualiza la build de producción
npm test             # Ejecuta todos los tests una vez
npm run test:watch   # Tests en modo watch (se re-ejecutan al guardar)
npm run test:ui      # Interfaz visual de tests en el navegador
npm run test:coverage # Tests con reporte de cobertura de código
```

### Tests

La suite de tests cubre todas las páginas principales:

```powershell
# Ejecutar todos los tests
npm test

# Ejecutar un archivo específico
npx vitest run src/__tests__/utils.test.ts

# Ver resultados detallados
npx vitest run --reporter=verbose
```

Cobertura por área:

| Área | Cobertura |
|------|-----------|
| Autenticación y registro | Alta |
| Dashboard | Alta |
| Flujo de lección (todos los pasos) | Alta |
| Settings (acciones reales) | Alta |
| Notebook (CRUD completo) | Alta |
| Collection (tabs y equipamiento) | Alta |
| Progress y Achievements | Alta |
| Práctica libre | Alta |
| Actividades (Flashcards, Quiz, etc.) | Media-Alta |
| Páginas de contenido (Grammar, Idioms...) | Media (smoke tests) |
| Transiciones/animaciones | No (limitación de jsdom) |

### Estructura del Proyecto

```
english-learning-app/
├── src/
│   ├── components/
│   │   ├── activities/         # 30+ componentes de actividades
│   │   ├── gamification/       # Sistema de XP, badges, ligas
│   │   ├── Layout.tsx          # Navegación principal (sidebar colapsable, bottom nav, breadcrumbs)
│   │   ├── WordOfTheDay.tsx    # Palabra del día con TTS
│   │   ├── MiniExam.tsx        # Mini-examen adaptativo bisemanal
│   │   └── ...
│   ├── context/
│   │   ├── UserContext.tsx     # Estado global del usuario
│   │   └── ThemeContext.tsx    # Tema de color e interfaz
│   ├── data/
│   │   ├── levels/             # Definición de los 13 niveles y sus tareas
│   │   ├── grammar/            # 22 tiempos verbales
│   │   ├── grammar-essentials.ts
│   │   ├── grammar-additional.ts
│   │   ├── modals-extended.ts
│   │   ├── modals-semi.ts
│   │   ├── phrasal-verbs.ts
│   │   ├── irregular-verbs.ts
│   │   ├── idioms.ts
│   │   ├── tech-vocabulary.ts
│   │   ├── vocabulary-everyday.ts
│   │   ├── vocabulary-general.ts
│   │   ├── communicative-functions.ts
│   │   ├── communicative-functions-extended.ts
│   │   ├── pronunciation.ts
│   │   ├── writing-skills.ts
│   │   └── index.ts
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # 32 páginas de la aplicación
│   ├── services/
│   │   ├── database.ts         # IndexedDB — persistencia local
│   │   ├── adaptiveEngine.ts   # Motor adaptativo de dificultad
│   │   ├── errorBasedExerciseGenerator.ts # Generador de ejercicios personalizados
│   │   ├── notebookService.ts  # Servicio de libreta
│   │   ├── spacedRepetition.ts # Algoritmo SM-2
│   │   ├── textAnalyzer.ts
│   │   ├── scaffoldingService.ts
│   │   ├── feedbackService.ts
│   │   ├── exerciseVariationService.ts
│   │   ├── troubleWordsService.ts
│   │   └── sessionTimingService.ts
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript globales
│   └── __tests__/
│       ├── e2e/                # 32 archivos de tests E2E
│       ├── utils.test.ts
│       └── setup.ts            # Configuración global de tests
├── public/                     # Recursos estáticos
├── index.html
├── package.json
├── vite.config.ts              # Configuración de Vite y Vitest
├── tsconfig.json
└── tailwind.config.js
```

### Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18 | UI framework |
| TypeScript | 5 | Tipado estático |
| Vite | 7 | Bundler y dev server |
| Tailwind CSS | 4 | Estilos |
| Framer Motion | 12 | Animaciones |
| React Router | 7 | Navegación |
| IndexedDB (idb) | 8 | Persistencia de datos local |
| Recharts | 3 | Gráficas de progreso |
| Lucide React | — | Iconos |
| Vitest | 3 | Testing |
| Testing Library | 16 | Tests de componentes |

---

## 🆘 Solución de Problemas

| Problema | Solución |
|----------|----------|
| **"npm no se reconoce como comando"** | Node.js no está instalado. Ve al Paso 1 de esta guía |
| **La app no inicia en el navegador** | Asegúrate de que PowerShell sigue abierto con `npm run dev` ejecutándose |
| **El puerto 5173 está ocupado** | Cierra otras apps que puedan usar ese puerto, o vite usará el siguiente disponible automáticamente |
| **Progreso no se guarda** | No uses el modo incógnito/privado del navegador — IndexedDB no funciona en ese modo |
| **No escucho la pronunciación** | Usa Chrome o Edge. Firefox puede tener limitaciones con la síntesis de voz |
| **La app va lenta** | Cierra otras pestañas del navegador. La primera carga es lenta por el code splitting |
| **Error "Cannot find module"** | Ejecuta `npm install` nuevamente y luego `npm run dev` |
| **Quiero borrar todo mi progreso** | Ve a ⚙️ Configuración → Datos → "Limpiar todos los datos" |

---

## 📦 Datos Guardados Localmente

La app guarda **todo en tu navegador** (IndexedDB), no en servidores externos:

- Perfiles de usuario y configuración
- Progreso en lecciones y niveles
- Palabras aprendidas y pendientes de repaso
- Notas y listas de vocabulario de la libreta
- Rachas y estadísticas diarias
- Logros desbloqueados y colección

Puedes **exportar** todo tu progreso en formato JSON desde ⚙️ Configuración → Datos → "Exportar datos", y **restaurarlo** más adelante con "Importar datos" o directamente desde la pantalla de inicio con el botón **"Restaurar progreso guardado"**.

El archivo de exportación incluye:
- Perfil, configuración y progreso general
- Lecciones completadas y estadísticas diarias
- Progreso de vocabulario (spaced repetition)
- **Lecciones en curso** (estado exacto de pausa — paso actual, pasos completados, texto escrito, posición en flashcards)

Al restaurar, el mismo perfil se sobreescribe sin crear duplicados. Si el usuario retoma una lección a medias, continuará exactamente desde donde la dejó.

---

**¡Disfruta aprendiendo inglés! 🎓✨**

> Pronunciación españolizada para cada palabra · Guardado automático local · 13 niveles A1–C2+ · 146 lecciones completas · Interfaz responsiva con sidebar colapsable · Backup/restore completo incluyendo lecciones en curso · Feedback visual en todas las actividades
