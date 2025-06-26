# Thoughtful AI Support Chatbot

A simple React-based conversational agent that answers common questions about Thoughtful AI using predefined responses.

## Features

- Predefined hardcoded answers for EVA, CAM, PHIL, and general info
- Friendly chat UI with user and bot messages
- Handles greetings like "hi", "hello", "how are you"
- Graceful fallback when input is unclear or unsupported

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/thoughtful-ai-chatbot.git
cd thoughtful-ai-chatbot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Project Structure

- `App.jsx`: Main logic and message handling
- `data.js`: Hardcoded Q&A with keyword matching
- `ChatBubble.jsx`: Message styling
- `index.js`: Entry point
- `index.html`: HTML shell

## Example Questions to Try

- What does the eligibility verification agent (EVA) do?
- How does the payment posting agent (PHIL) work?
- What are the benefits of using Thoughtful AI's agents?
- hi / hello / greetings

## Tech Stack

- React
- JavaScript
- HTML + CSS (custom or Tailwind-ready)

## Evaluation Criteria Match

- ✔ Accepts and responds to user input
- ✔ Uses hardcoded responses
- ✔ Handles edge cases and invalid input
- ✔ Friendly, chat-style display
