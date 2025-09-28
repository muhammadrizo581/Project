import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    question: "What novel begins with the line 'Call me Ishmael'?",
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
    question:
      "Which epic poem begins with 'Sing, O Muse, of the rage of Achilles'?",
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

const QuizGame2 = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

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

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleSkip = () => {
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
              <span className="text-green-600 font-bold">
                {questions[current].category}
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {questions[current].question}
            </h3>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="bg-gray-200 hover:bg-green-100 text-gray-800 px-4 py-3 rounded-lg shadow transition text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={handleSkip}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
            <p className="mt-6 text-gray-500 text-sm text-center">
              Question {current + 1} of {questions.length}
            </p>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
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
            <button
              onClick={() => navigate("/quiz3")}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow"
            >
              Go to Game 3 ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame2;
