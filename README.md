# 🧠 Smart Task Summarizer

This is a simple AI-powered web app that helps project managers clean up messy task lists. It summarizes each task, adds useful tags, and assigns a priority score.

---

## ✨ Features

- ✍️ Paste messy task descriptions (from calls, meetings, or notes)
- 🤖 AI summarizes and tags each task
- 🔢 Ranks all tasks with priority from 1 (high) to N (low)
- 🎨 Displays results as clean, colorful cards in the UI

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **AI Model**: OpenRouter (GPT-3.5-turbo)

---

## 📂 Folder Structure

```
Smart-Task-Summarizer/
├── backend/
│   ├── controllers/       # Handles API logic
│   ├── routes/            # API routes
│   ├── services/          # AI logic using OpenRouter
│   └── server.js          # Express app
├── frontend/
│   └── src/
│       ├── components/    # TaskCard component
│       ├── pages/         # Summarizer.jsx main page
│       ├── services/      # API call logic
│       ├── App.jsx
│       └── main.jsx
```

---

## ▶️ How to Run

### 1. Clone the Repo

```bash
git clone https://github.com/5ujay/smart-task-summarizer.git
```

### 2. Setup Backend

```bash
cd backend
npm install
```

`.env` file content:

```env
PORT=5000
OPENROUTER_API_KEY=your_key_here
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Test Data

Paste this in the input box:

```
Fix login error on mobile
Ask Priya about frontend deployment
Prepare charts for dashboard report
Check SSL expiry with vendor
Schedule client call to review scope
```

---

## 🤖 AI Usage Note

This project uses the [OpenRouter API](https://openrouter.ai) (GPT-3.5-turbo) for task summarization. The AI logic was designed and refined manually by me using OpenRouter's documentation and prompt engineering.

---

## 🤖 Where I Used ChatGPT

I used ChatGPT to assist with:

🧩 Designing the backend folder structure (routes, controller, service)

🔧 Writing and refining the openaiService.js AI logic

🔄 Integrating the backend API with the React frontend

🗂️ Setting up the clean folder structure for both frontend/ and backend/

💡 Getting UI/UX suggestions for Tailwind CSS to improve the frontend look

All logic and implementation was reviewed, understood, and integrated by me manually.
