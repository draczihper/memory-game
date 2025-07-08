# 🧠 Memory Game (React + Vite + Tailwind)

A fun and responsive memory game built using **React**, **Vite**, and **Tailwind CSS**. The goal is to click all 12 unique images without repeating any — each correct click shuffles the board!

---

## 🚀 Live Demo

🔗 [View Live Game](https://memory-game-7ex.pages.dev/)  
🔗 [GitHub Repo](https://github.com/draczihper/memory-game)


---

## 🎮 How to Play

- Click on any image **only once**.
- After each click, the images **shuffle**.
- If you click the **same image twice**, your score resets.
- The game tracks your **best score**.
- Win by clicking all **12 images** without repeating.

---

## 📁 Project Structure

```

memory-game/
├── public/
├── src/
│   ├── components/
│   │   ├── ImageCard.jsx
│   │   ├── ImageGrid.jsx
│   │   └── ScoreBoard.jsx
│   ├── utils/
│   │   └── shuffle.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md

````

---

## 🧪 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 Features

- 12 dynamic character cards (fetched via API)
- Score and best score tracker
- Shuffle logic on every click
- Responsive and mobile-friendly UI
- Clean, reusable component structure

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memory-game.git
   cd memory-game
```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 🌐 API Note

This project assumes an API endpoint that returns an array of characters with the following format:

```json
[
  {
    "id": 1,
    "name": "Character Name",
    "image": "https://image-url.jpg"
  },
  ...
]
```

The API used here is [Pokemon API](https://pokeapi.co/docs/v2).
You can use a public API like [Rick and Morty API](https://rickandmortyapi.com/documentation/#get-all-characters) or mock your own.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contribution

Feel free to fork, open issues, and create PRs!
If you enjoyed this, give it a ⭐ on [GitHub](https://github.com/yourusername/memory-game)!

