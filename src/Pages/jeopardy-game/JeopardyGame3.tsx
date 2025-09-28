import { useState } from "react";

type Question = {
  category: string;
  question: string;
  options: string[];
  correct: string;
};

const questions: Question[] = [
  // ⚛ Physics
  {
    category: "Physics",
    question: "What force pulls objects toward the Earth?",
    options: ["Magnetism", "Gravity", "Inertia", "Friction"],
    correct: "Gravity",
  },
  {
    category: "Physics",
    question: "What is the speed of light?",
    options: ["299,792 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
    correct: "299,792 km/s",
  },
  {
    category: "Physics",
    question: "What unit measures force?",
    options: ["Watt", "Pascal", "Newton", "Joule"],
    correct: "Newton",
  },
  {
    category: "Physics",
    question: "Who formulated the three laws of motion?",
    options: ["Einstein", "Galileo", "Isaac Newton", "Tesla"],
    correct: "Isaac Newton",
  },
  {
    category: "Physics",
    question: "What is absolute zero in Celsius?",
    options: ["0°C", "-100°C", "-273°C", "-300°C"],
    correct: "-273°C",
  },

  // 🧪 Chemistry
  {
    category: "Chemistry",
    question: "What is H2O?",
    options: ["Oxygen", "Hydrogen", "Salt", "Water"],
    correct: "Water",
  },
  {
    category: "Chemistry",
    question: "What is NaCl?",
    options: ["Sugar", "Salt", "Ammonia", "Alcohol"],
    correct: "Salt",
  },
  {
    category: "Chemistry",
    question: "What gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide",
  },
  {
    category: "Chemistry",
    question: "What is the atomic number of Hydrogen?",
    options: ["0", "1", "2", "3"],
    correct: "1",
  },
  {
    category: "Chemistry",
    question: "What is the symbol for Gold?",
    options: ["Ag", "Go", "Au", "Gd"],
    correct: "Au",
  },

  // 💻 Programming
  {
    category: "Programming",
    question: "What does 'JS' stand for?",
    options: ["JavaSource", "JavaScript", "JustScript", "JScript"],
    correct: "JavaScript",
  },
  {
    category: "Programming",
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Applied Protocol Interface",
      "Application Process Input",
    ],
    correct: "Application Programming Interface",
  },
  {
    category: "Programming",
    question: "What keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "static", "const"],
    correct: "const",
  },
  {
    category: "Programming",
    question:
      "Which programming language is known as the 'mother of all languages'?",
    options: ["C", "Assembly", "Java", "Python"],
    correct: "C",
  },
  {
    category: "Programming",
    question:
      "What is the runtime environment for JavaScript outside browsers?",
    options: ["JVM", "Node.js", "React", "Docker"],
    correct: "Node.js",
  },

  // 🌐 Languages
  {
    category: "Languages",
    question: "What is the most spoken language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correct: "Mandarin Chinese",
  },
  {
    category: "Languages",
    question: "What is the official language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correct: "Portuguese",
  },
  {
    category: "Languages",
    question: "What alphabet does Russian use?",
    options: ["Latin", "Arabic", "Cyrillic", "Greek"],
    correct: "Cyrillic",
  },
  {
    category: "Languages",
    question: "What language has the most words?",
    options: ["English", "Mandarin", "German", "Arabic"],
    correct: "English",
  },
  {
    category: "Languages",
    question: "Which language is written from right to left?",
    options: ["French", "Arabic", "Spanish", "Italian"],
    correct: "Arabic",
  },

  // 🎭 Culture
  {
    category: "Culture",
    question: "Where did the Olympics originate?",
    options: ["Italy", "Egypt", "Greece", "China"],
    correct: "Greece",
  },
  {
    category: "Culture",
    question: "Which country is famous for Samurai?",
    options: ["Japan", "China", "Korea", "Vietnam"],
    correct: "Japan",
  },
  {
    category: "Culture",
    question: "What is the traditional dance of Spain?",
    options: ["Salsa", "Tango", "Flamenco", "Cha-cha"],
    correct: "Flamenco",
  },
  {
    category: "Culture",
    question: "Which festival is known as the festival of lights in India?",
    options: ["Holi", "Diwali", "Navratri", "Eid"],
    correct: "Diwali",
  },
  {
    category: "Culture",
    question: "Which civilization built Machu Picchu?",
    options: ["Aztec", "Inca", "Maya", "Roman"],
    correct: "Inca",
  },
];

const QuizGame3 = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[current].correct) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-2xl w-full">
        {!finished ? (
          <>
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Category:{" "}
              <span className="text-red-600 font-bold">
                {questions[current].category}
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {questions[current].question}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="bg-gray-200 hover:bg-red-100 text-gray-800 px-4 py-3 rounded-lg shadow transition text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Question {current + 1} of {questions.length}
            </p>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              🎉 Quiz Finished!
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              ✅ Correct Answers: {score.correct}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              ❌ Wrong Answers: {score.wrong}
            </p>
            <p className="font-bold text-xl text-gray-800">
              Final Score: {score.correct} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame3;
