from pathlib import Path

readme = r"""# FitLog — Workout Library

FitLog is a modern, responsive workout library built with Next.js. It helps users explore workouts, view detailed exercise information, add workouts to a daily plan, save workouts for later, and track completed exercises.

## 🚀 Live Demo

**Live Website:** :  fitlog123.netlify.app

**GitHub Repository:** https://github.com/toufique39/fitlog
---

## 📌 Project Description

FitLog is a dark-themed workout management application designed around a simple goal:

> **Train With Intent. Log Every Set.**

The application fetches workout data from an external API and presents it through a responsive workout library. Users can open individual workout details, build a daily workout plan, save favorite workouts, mark exercises as completed, and manage their plan from the My Plan page.

---

## ✨ Features

### 🏋️ Workout Library
- Displays all available workouts from the FitLog API.
- Responsive workout card layout.
- Shows:
  - Workout image
  - Muscle groups
  - Workout name
  - Equipment
  - Duration
  - Calories burned
  - Rating
  - Difficulty
- Click any workout to view its details.

### 📖 Workout Details
- Dedicated dynamic route for each workout.
- Large workout image.
- Workout description.
- Muscle group tags.
- Equipment and difficulty information.
- Sets and reps.
- Duration and calories.
- Rating.
- Step-by-step workout instructions.
- Add workout to today's plan.
- Save workout for later.
- Toast notifications for user actions.

### 📋 My Plan
- Today's workout plan.
- Saved workouts section.
- Live workout statistics:
  - Exercises
  - Minutes
  - Calories
- Sort workouts by:
  - Duration
  - Calories
  - Rating
- View workout details.
- Mark workouts as done/undone.
- Remove individual workouts.
- Clear the complete daily plan.
- Empty states with a link back to the workout library.

### 💾 Local Storage
The application stores user data in the browser's `localStorage`, including:
- Today's workout plan
- Saved workouts
- Completed workouts

This allows the selected workouts to remain available after refreshing the page.

### 🔢 Plan Limit
Users can add a maximum of **5 workouts** to today's plan.

### 📱 Responsive Design
The interface is designed for:
- Mobile
- Tablet
- Desktop

### ❌ 404 Page
A custom FitLog 404 page is included for invalid routes and workout IDs.

### ⏳ Loading States
Loading states are included while workout data is being loaded.

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Toastify**
- **Next.js App Router**
- **Context API**
- **Browser localStorage**
- **REST API**
- **Git & GitHub**
- **Netlify**

---

## 🔗 API

FitLog uses the following API:

### All Workouts
```text
https://api.abcz.workers.dev/api/fitlog
```

### Workout Data
Each workout contains information such as:

```text
id
name
image
muscleGroups
equipment
difficulty
duration
caloriesBurned
sets
reps
rating
description
instructions
```

---

## 📂 Project Structure

```text
fitlog/
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── src/
│   ├── api/
│   │   └── api.ts
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlanCard.tsx
│   │   ├── SortDropdown.tsx
│   │   ├── WorkoutActions.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── WorkoutDetails.tsx
│   │   └── WorkoutLibrary.tsx
│   ├── context/
│   │   └── FitLogContext.tsx
│   └── types/
│       └── workout.ts
│
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fitlog.git
```

### 2. Open the project

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:10000
```

> If your Next.js development server uses a different port, open the URL shown in your terminal.

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To run the production version locally:

```bash
npm start
```

---

## 🌐 Deployment

The project is deployed using **Netlify**.

Deployment flow:

```text
GitHub
   ↓
Netlify
   ↓
Next.js Build
   ↓
Live Website
```

Every new push to the connected GitHub repository can trigger a new deployment.

---

## 🎯 Main Routes

| Route | Description |
|---|---|
| `/` | Workout Library |
| `/workout/[id]` | Workout Details |
| `/my-plan` | Today's Plan & Saved Workouts |
| Invalid route | Custom 404 Page |

---

## 🧠 Key Implementation Concepts

This project demonstrates practical use of:

- Next.js App Router
- Dynamic routes
- Client Components
- React state management
- Context API
- `useEffect`
- API data fetching
- TypeScript interfaces
- Tailwind CSS
- Local storage persistence
- Responsive UI design
- Toast notifications
- Git/GitHub workflow
- Production deployment

---

## 📝 Notes

- Workout information is loaded from the provided FitLog API.
- User-specific plan and saved data are stored locally in the browser.
- The application does not require a separate backend for plan management.
- Maximum daily workout plan size is 5 workouts.

---


---

