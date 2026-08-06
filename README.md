# AI Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **React**, and **Tailwind CSS** featuring an AI-powered portfolio assistant that answers questions about Nishan C Shetty using Google's Gemini API.

---

# Live Demo

https://portfolio-gdzyqfkw1-ns-76ce.vercel.app/

---

# GitHub Repository

https://github.com/nishancshetty/portfolio

---

# Features

- Modern responsive UI
- AI-powered portfolio assistant
- Real-time AI responses
- Mobile-friendly design
- Contact page
- Projects showcase
- Resume download
- Responsive navigation
- Error handling
- Loading states
- Unit tested with Vitest

---

# Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### AI

- Google Gemini API
- Google GenAI SDK

### Development

- Node.js
- Git
- GitHub
- Vercel
- VS Code

### Testing

- Vitest
- Testing Library

---

# Installation

Clone the repository

```bash
git clone https://github.com/nishancshetty/portfolio.git
```

Move into the project

```bash
cd portfolio
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` file in the project root.

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

You can obtain an API key from Google AI Studio.

---

# Running Tests

Run all unit tests

```bash
npm test
```

Vitest will execute all tests inside the project.

---

# Project Structure

```
app/
│
├── api/
│   └── chat/
│
├── about/
├── projects/
├── contact/
│
components/
│
├── Chat.tsx
├── Hero.tsx
├── Navbar.tsx
│
├── __tests__/
│   └── Chat.test.tsx
│
lib/
│
├── ai.ts
│
public/
│
README.md
```

---

# Architecture

The application follows a simple client-server architecture.

```
Browser
    │
    ▼
Next.js Application
    │
    ▼
API Route (/api/chat)
    │
    ▼
Google Gemini API
    │
    ▼
Generated Response
    │
    ▼
Chat Interface
```

### Browser

The user interacts with the portfolio website through the browser.

### Next.js Application

Next.js renders the portfolio pages and manages routing.

### API Route

The `/api/chat` route receives user prompts and forwards them to Google's Gemini API.

### Google Gemini API

Gemini generates responses using a custom system prompt containing Nishan's portfolio information.

### Response

The AI response is returned to the application.

### Chat Interface

The chat component displays the generated response in real time.

---

# AI Integration

The portfolio includes an AI assistant built using Google's Gemini API.

Instead of generating unrestricted responses, the assistant is guided using a detailed **system prompt** containing Nishan's:

- Education
- Skills
- Projects
- Career goals
- Interests
- Contact information

This ensures that the assistant only answers questions related to the portfolio and avoids generating inaccurate information.

### AI Workflow

1. User submits a message.
2. The message is sent to `/api/chat`.
3. The API forwards the request to Google Gemini.
4. Gemini generates a response using the portfolio system prompt.
5. The response is returned to the frontend.
6. The chat interface displays the response.

---

# Error Handling

The application gracefully handles common failures including:

- Empty user messages
- API request failures
- Invalid responses
- Network errors
- Unexpected exceptions

Users receive clear feedback instead of application crashes.

---

# Responsive Design

The website has been tested on multiple screen sizes.

- 320px
- 375px
- 768px
- 1024px
- 1440px

The layout maintains:

- No horizontal scrolling
- No content overflow
- Proper spacing
- Mobile-friendly navigation

---

# Performance

Performance optimizations include:

- Next.js App Router
- Optimized React rendering
- Component-based architecture
- Efficient API requests
- Lazy loading where appropriate

---

# Testing

The project includes unit testing using **Vitest** and **Testing Library**.

Current tests verify:

- Chat component renders successfully
- Input textbox is displayed correctly

Testing helps ensure components behave as expected and reduces regressions during development.

---

# Deployment

The application is deployed on **Vercel**.

Deployment includes:

- Automatic GitHub integration
- Environment variables
- Production build
- Serverless API routes

---

# Future Improvements

Possible future enhancements include:

- Conversation history
- Markdown rendering
- Theme switching
- Typing indicators
- AI streaming responses
- Speech-to-text input
- AI conversation memory
- Downloadable chat history

---

# About

**Nishan C Shetty**

Computer Science Engineering Student at NMAM Institute of Technology.

Currently looking for Frontend Developer internship opportunities.

Interested in:

- Frontend Development
- React
- Next.js
- AI Applications
- Modern Web Development

---

# Contact

**Email**

nishancshetty2006@gmail.com

**GitHub**

https://github.com/nishancshetty

**LinkedIn**

https://www.linkedin.com/in/nishan-shetty-1526b8387

**Portfolio**

https://portfolio-gdzyqfkw1-ns-76ce.vercel.app/

---

# License

This project is licensed under the MIT License.

---
