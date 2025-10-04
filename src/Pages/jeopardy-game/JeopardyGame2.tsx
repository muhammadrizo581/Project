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
  // ➗ Math
  {
    category: "Math",
    question: "What is the value of π rounded to two decimal places?",
    options: ["3.12", "3.14", "3.15", "3.16"],
    correct: "3.14",
  },
  {
    category: "Math",
    question: "What is the perimeter of a square with side length 5?",
    options: ["15", "20", "25", "30"],
    correct: "20",
  },
  {
    category: "Math",
    question: "What is the area of a triangle with base 10 and height 6?",
    options: ["20", "30", "40", "60"],
    correct: "30",
  },
  {
    category: "Math",
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correct: "30",
  },
  {
    category: "Math",
    question: "What is the derivative of x²?",
    options: ["x", "x²", "2x", "2"],
    correct: "2x",
  },

  // 🧬 Biology
  {
    category: "Biology",
    question: "What organ pumps blood throughout the body?",
    options: ["Lungs", "Liver", "The heart", "Kidneys"],
    correct: "The heart",
  },
  {
    category: "Biology",
    question: "What part of the cell contains DNA?",
    options: ["Nucleus", "Cytoplasm", "Ribosome", "Mitochondria"],
    correct: "Nucleus",
  },
  {
    category: "Biology",
    question: "What gas do humans exhale?",
    options: ["Oxygen", "Carbon Monoxide", "Carbon Dioxide (CO₂)", "Nitrogen"],
    correct: "Carbon Dioxide (CO₂)",
  },
  {
    category: "Biology",
    question: "What blood type is known as the universal donor?",
    options: ["A", "B", "AB", "O negative"],
    correct: "O negative",
  },
  {
    category: "Biology",
    question: "What process do plants use to convert sunlight into energy?",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
    correct: "Photosynthesis",
  },

  // 📚 Literature
  {
    category: "Literature",
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charles Dickens", "Mark Twain"],
    correct: "Jane Austen",
  },
  {
    category: "Literature",
    question: "What novel begins with 'Call me Ishmael'?",
    options: [
      "Great Expectations",
      "Moby-Dick",
      "War and Peace",
      "The Odyssey",
    ],
    correct: "Moby-Dick",
  },
  {
    category: "Literature",
    question: "Who created the character Sherlock Holmes?",
    options: [
      "Agatha Christie",
      "Arthur Conan Doyle",
      "Jules Verne",
      "Oscar Wilde",
    ],
    correct: "Arthur Conan Doyle",
  },
  {
    category: "Literature",
    question: "Which novel introduced the character Jay Gatsby?",
    options: [
      "The Great Gatsby",
      "To Kill a Mockingbird",
      "Catcher in the Rye",
      "1984",
    ],
    correct: "The Great Gatsby",
  },
  {
    category: "Literature",
    question: "Which epic poem begins with 'Sing, O Muse, of the rage of Achilles'?",
    options: ["The Iliad", "The Odyssey", "Beowulf", "Aeneid"],
    correct: "The Iliad",
  },

  // 🎨 Art
  {
    category: "Art",
    question: "Which artist painted 'The Last Supper'?",
    options: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Raphael",
      "Vincent van Gogh",
    ],
    correct: "Leonardo da Vinci",
  },
  {
    category: "Art",
    question: "Which movement is Claude Monet associated with?",
    options: ["Cubism", "Surrealism", "Impressionism", "Baroque"],
    correct: "Impressionism",
  },
  {
    category: "Art",
    question: "Who painted 'The Persistence of Memory'?",
    options: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Claude Monet",
      "Henri Matisse",
    ],
    correct: "Salvador Dalí",
  },
  {
    category: "Art",
    question: "What is the art of folding paper into shapes called?",
    options: ["Origami", "Calligraphy", "Kirigami", "Papercraft"],
    correct: "Origami",
  },
  {
    category: "Art",
    question: "Which sculptor created 'The Thinker'?",
    options: ["Rodin", "Michelangelo", "Donatello", "Bernini"],
    correct: "Rodin",
  },

  // 🎵 Music
  {
    category: "Music",
    question: "Who composed 'The Four Seasons'?",
    options: [
      "Johann Sebastian Bach",
      "Antonio Vivaldi",
      "Mozart",
      "Beethoven",
    ],
    correct: "Antonio Vivaldi",
  },
  {
    category: "Music",
    question: "What is the highest male singing voice?",
    options: ["Baritone", "Tenor", "Bass", "Countertenor"],
    correct: "Tenor",
  },
  {
    category: "Music",
    question: "Who wrote the opera 'The Magic Flute'?",
    options: ["Beethoven", "Wolfgang Amadeus Mozart", "Handel", "Tchaikovsky"],
    correct: "Wolfgang Amadeus Mozart",
  },
  {
    category: "Music",
    question: "Which instrument family does the trumpet belong to?",
    options: ["Woodwind", "String", "Brass", "Percussion"],
    correct: "Brass",
  },
  {
    category: "Music",
    question:
      "Which composer became deaf later in life but continued composing?",
    options: ["Bach", "Beethoven", "Chopin", "Rachmaninoff"],
    correct: "Beethoven",
  },
];

export default function QuizGame2() {
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
        darkMode ? "bg-gray-900 text-gray-100" : "bg-green-50 text-gray-900"
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
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {!finished ? (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Category:{" "}
              <span className="text-green-600 dark:text-yellow-400 font-bold">
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
                      ? "bg-gray-700 hover:bg-green-700 text-gray-100"
                      : "bg-green-100 hover:bg-green-200 text-gray-800"
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
            <h2 className="text-3xl font-extrabold text-green-500 mb-4">
              🎉 Quiz Completed!
            </h2>
            <p className="text-lg">
              ✅ Correct: {score.correct} / ❌ Wrong: {score.wrong}
            </p>
            <p className="mt-2 font-semibold text-xl">
              Final Score:{" "}
              <span className="text-green-600 dark:text-yellow-400">
                {score.correct} / {questions.length}
              </span>
            </p>
            <button
              onClick={() => navigate("/jeopardy3")}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Go to Game 3 ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
