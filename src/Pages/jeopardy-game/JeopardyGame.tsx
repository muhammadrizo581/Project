import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

type Question = {
  category: string;
  question: string;
  options: string[];
  correct: string;
};

const questions: Question[] = [
  // 🖥 Technology
  {
    category: "Technology",
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Markdown Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    category: "Technology",
    question: "Which company created React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correct: "Facebook",
  },
  {
    category: "Technology",
    question: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Styled Sheets",
      "Colorful Style Syntax",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    category: "Technology",
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "IBM"],
    correct: "Netscape",
  },
  {
    category: "Technology",
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    correct: "MongoDB",
  },

  // 🔬 Science
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correct: "Mars",
  },
  {
    category: "Science",
    question: "What gas do humans need to breathe?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    correct: "Oxygen",
  },
  {
    category: "Science",
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Hydrogen", "Salt", "Water"],
    correct: "Water",
  },
  {
    category: "Science",
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Friction", "Gravity", "Inertia"],
    correct: "Gravity",
  },
  {
    category: "Science",
    question: "Who proposed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Tesla"],
    correct: "Albert Einstein",
  },

  // 📜 History
  {
    category: "History",
    question: "Who was the first President of the United States?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "John Adams",
      "Thomas Jefferson",
    ],
    correct: "George Washington",
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    options: ["1918", "1940", "1945", "1955"],
    correct: "1945",
  },
  {
    category: "History",
    question: "Who was the founder of the Mongol Empire?",
    options: ["Kublai Khan", "Genghis Khan", "Attila", "Tamerlane"],
    correct: "Genghis Khan",
  },
  {
    category: "History",
    question: "Which empire built the Colosseum?",
    options: ["Greek", "Roman", "Ottoman", "Persian"],
    correct: "Roman",
  },
  {
    category: "History",
    question: "Who was known as the Maid of Orléans?",
    options: ["Cleopatra", "Joan of Arc", "Elizabeth I", "Catherine the Great"],
    correct: "Joan of Arc",
  },

  // 🌍 Geography
  {
    category: "Geography",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correct: "Pacific",
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Rome", "Paris"],
    correct: "Paris",
  },
  {
    category: "Geography",
    question: "Mount Everest is part of which mountain range?",
    options: ["Andes", "Rockies", "Himalayas", "Alps"],
    correct: "Himalayas",
  },
  {
    category: "Geography",
    question: "Which desert is the largest in the world?",
    options: ["Kalahari", "Gobi", "Sahara", "Arctic"],
    correct: "Sahara",
  },
  {
    category: "Geography",
    question: "Which country has the largest population?",
    options: ["India", "China", "USA", "Brazil"],
    correct: "China",
  },

  // ⚽ Sports
  {
    category: "Sports",
    question: "How many players are in a soccer team?",
    options: ["9", "10", "11", "12"],
    correct: "11",
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Germany", "Argentina", "France", "Brazil"],
    correct: "France",
  },
  {
    category: "Sports",
    question: "What sport is known as the 'king of sports'?",
    options: ["Tennis", "Cricket", "Football", "Basketball"],
    correct: "Football",
  },
  {
    category: "Sports",
    question: "In tennis, what is the term for a score of zero?",
    options: ["Zero", "Love", "Null", "Blank"],
    correct: "Love",
  },
  {
    category: "Sports",
    question: "Who holds the record for most Olympic gold medals?",
    options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"],
    correct: "Michael Phelps",
  },
];

export default function QuizGame1() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[current].correct)
      setScore((p) => ({ ...p, correct: p.correct + 1 }));
    else setScore((p) => ({ ...p, wrong: p.wrong + 1 }));

    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-blue-50 text-gray-900"
      }`}
    >
      <div
        className={`rounded-2xl shadow-xl p-8 w-full max-w-2xl transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Progress bar */}
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-6">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {!finished ? (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Category:{" "}
              <span className="text-blue-600 dark:text-yellow-400 font-bold">
                {questions[current].category}
              </span>
            </h2>

            <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
              {questions[current].question}
            </h3>

            <div className="grid gap-4 mb-6">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className={`px-5 py-3 rounded-lg text-left font-medium shadow transition transform hover:scale-[1.02] ${
                    darkMode
                      ? "bg-gray-700 hover:bg-blue-700 text-gray-100"
                      : "bg-blue-100 hover:bg-blue-200 text-gray-800"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <p className="text-center text-sm opacity-80 mb-4">
              Question {current + 1} of {questions.length}
            </p>
          </>
        ) : (
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-extrabold text-blue-500 mb-4">
              🎉 Quiz Completed!
            </h2>
            <p className="text-lg">
              ✅ Correct: {score.correct} / ❌ Wrong: {score.wrong}
            </p>
            <p className="mt-2 font-semibold text-xl">
              Final Score:{" "}
              <span className="text-blue-600 dark:text-yellow-400">
                {score.correct} / {questions.length}
              </span>
            </p>
            <button
              onClick={() => navigate("/jeopardy2")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Go to Game 2 ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
