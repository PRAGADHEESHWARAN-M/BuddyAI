
# 🤖 Buddy AI – Futuristic AI Book Assistant

Buddy AI is an intelligent, futuristic web application built with **React**, designed to help users **search books, articles, news, and Wikipedia** content from around the world — all inside the app. With an animated UI, dynamic robot logo, and interactive suggestions, Buddy AI delivers a fun and functional AI experience.

![Buddy AI Preview](./assets/buddy-preview.png) <!-- Replace or remove based on your project structure -->

---

## 🚀 Features

- 🔍 **Smart Search Interface**
- 📚 **Book Suggestions** with Google Books previews
- 📰 **News & Article Search** (Google redirect or in-app)
- 🧠 **Wikipedia Integration**
- 🤖 **Dynamic Robot Logo** with neon effect + sound (`bookaa.mp3`)
- 🎨 **Animated UI** with futuristic design and dark theme
- 🧩 **Frontend-Only** (No backend needed!)

---

## 📁 Project Structure

```
buddy-ai/
├── public/
│   ├── index.html
│   └── bookaa.mp3
├── src/
│   ├── App.js
│   ├── BuddyChatbot.js
│   ├── BuddyChatbot.css
│   ├── index.js
│   └── assets/
│       └── logo.png
├── package.json
└── README.md
```

---

## 🛠️ Installation & Running Locally

### Prerequisites:
- Node.js & npm installed: [https://nodejs.org](https://nodejs.org)

### Steps:
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/buddy-ai.git
cd buddy-ai

# Install dependencies
npm install

# Run the app
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

You can deploy this app easily with **GitHub Pages**:

1. Add this to your `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/buddy-ai",
   ```
2. Add deploy scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run:
   ```bash
   npm install gh-pages --save-dev
   npm run deploy
   ```

Then visit: `https://YOUR_USERNAME.github.io/buddy-ai`

---

## 📸 Screenshots

> Add screenshots here if you have them!

---

## 📄 License

This project is open-source and free to use.  
Feel free to fork it or improve it!

---

## 👤 Author

- **Pragadheeshwaran M**  
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

## 💬 Feedback

Have suggestions or ideas to improve Buddy AI?  
Open an [issue](https://github.com/YOUR_USERNAME/buddy-ai/issues) or send a pull request!
