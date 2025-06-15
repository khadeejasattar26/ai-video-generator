# 🎥 AI Video Generator

An end-to-end full-stack application to generate dynamic, AI-powered marketing and real estate videos based on user input. Built using Next.js, Express, and integrated with Google's Gemini (Veo3) model.

---

## 🚀 Features

* ✍️ Generate videos for:

  * Marketing use cases (e.g., energy drinks)
  * Real estate virtual tours
* ✨ Custom user input for tone, style, audience, and product details
* 🔢 Styled with Tailwind CSS and Framer Motion animations
* 📲 Responsive design with video preview and download support
* ✨ Glassmorphism & gradient UI aesthetics

---

## ⚙️ Tech Stack

### Frontend

* **Framework:** Next.js (React with SSR)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, Framer Motion
* **UX Enhancements:**

  * Headless UI (animated dropdowns)
  * React Hot Toast (toast notifications)
* **Video Handling:** HTML5 video tag with download + clipboard support

### Backend

* **Runtime:** Node.js
* **Framework:** Express.js
* **Endpoints:**

  * `POST /api/videos/marketing`
  * `POST /api/videos/realestate`
* **Tasks:** Accepts video generation input and communicates with Gemini API

### AI Integration

* **LLM Service:** Google Gemini (Veo3) or equivalent
* **Function:** Converts user input into dynamic video generation prompts

---

## 💡 How It Works

1. User selects tone, audience, and style for the video
2. Inputs features (e.g., product benefits or property details)
3. Clicks "Generate Video"
4. Frontend sends POST request to backend
5. Backend formats prompt and sends it to Gemini/Veo3
6. Receives generated video URL
7. Displays preview with options to download or copy link

---

## 📂 Folder Structure (Client)

```
client/
├── pages/
│   ├── marketing.tsx
│   └── realestate.tsx
├── styles/
│   └── globals.css
└── components/
```

---

## 🔧 Installation

```bash
# Clone repo
$ git clone https://github.com/yourusername/ai-video-generator.git
$ cd ai-video-generator

# Install dependencies
$ cd client && npm install
$ cd ../server && npm install

# Start client and server
$ npm run dev      # for Next.js frontend
$ npm run start    # for Express backend
```

---

## 💼 Use Cases

* Marketing video creation for product launches
* Real estate agents creating virtual property tours
* Social media content generation

---


## 📅 Credits

Built by Khadeeja Sattar.
