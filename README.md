# FitFlex: Your Personal Fitness Companion 🏋️‍♂️

FitFlex is a modern fitness web application designed to help users explore exercises, equipment, and workout categories.  
It provides an **easy-to-use interface** for fitness enthusiasts and uses **RapidAPI** to fetch real-time exercise data.

---

## 🚀 Features
- Browse exercises by **body parts** and **equipment**.
- Visual exercise details with **images and GIFs**.
- Advanced **search functionality**.
- Fully responsive UI built with **React** + **Tailwind CSS**.
- Organized codebase with `components/`, `pages/`, and `styles/` folders.
- Secure API integration using **environment variables** (`.env` file).

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router
- **Styling:** Tailwind CSS, Bootstrap (optional)
- **Icons:** React Icons (FontAwesome, etc.)
- **API:** RapidAPI (ExerciseDB or similar)
- **Version Control:** Git & GitHub

---


---

## ⚙️ Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Sabi0603/fitflex.git
   cd fitflex


## Install dependencies

 - npm install


## Environment Variables

This project uses environment variables for security.  
Create a `.env` file in the project root using the `.env.example` file as a reference.

1. Duplicate `.env.example` and rename it to `.env`
2. Add your own RapidAPI key:

REACT_APP_RAPID_API_KEY=your_api_key_here
ESLINT_NO_DEV_ERRORS=true

3. Never share your `.env` file or push it to GitHub
