import { Link } from "react-router-dom";

const Home = () => {
  const units = [
    {
      title: "Unit 1: Introduction to Computing Systems",
      url: "https://computing-systems-uzwkgc3.gamma.site/",
      image: "/numbers/1.png",
    },
    {
      title: "Unit 2: Computing Devices & Digital Displays",
      url: "https://computing-devices-3297nk8.gamma.site/",
      image: "/numbers/2.png",
    },
    {
      title: "Unit 3: Word Processing",
      url: "https://word-processing-unit-3ly5306.gamma.site/",
      image: "/numbers/3.png",
    },
    {
      title: "Unit 4: Computer Networking Fundamentals",
      url: "https://computer-networking-0t096ih.gamma.site/",
      image: "/numbers/4.png",
    },
    {
      title: "Unit 5: Information Technology Journey",
      url: "https://it-journey-1g6l9it.gamma.site/",
      image: "/numbers/5.png",
    },
    {
      title: "Unit 6: Web Browsing",
      url: "https://web-browsing-x8ovl2f.gamma.site/",
      image: "/numbers/6.png",
    },
    {
      title: "Unit 7: Databases vs Spreadsheets",
      url: "https://databases-vs-spreadsheet-cg0otp9.gamma.site/",
      image: "/numbers/7.png",
    },
    {
      title: "Unit 8: Desktop Publishing",
      url: "https://desktop-publishing-guide-i9yccct.gamma.site/",
      image: "/numbers/8.png",
    },
    {
      title: "Unit 9: E-commerce & Computer Memory",
      url: "https://ecommerce-computer-memor-sfq4t85.gamma.site/",
      image: "/numbers/9.png",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center mt-10 px-6 min-h-screen">
      {/* Welcome */}
      <h1 className="text-5xl font-extrabold text-blue-700 dark:text-yellow-400 mb-6 drop-shadow-lg">
        💻 IT Learning Resources
      </h1>


      {/* Units grid */}
      <div className="w-full max-w-6xl text-left mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-blue-700 dark:text-yellow-400 drop-shadow">
          📘 Dars bo‘limlari
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {units.map((unit, i) => (
            <a
              key={i}
              href={unit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={unit.image}
                  alt={unit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition">
                  {unit.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto italic">
                  📑 Gamma Material
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Jeopardy promo */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border border-yellow-200 dark:border-gray-600 rounded-2xl p-10 shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">
          🎮 Jeopardy Game
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
          Bilimingizni interaktiv savol-javob o‘yini orqali mustahkamlang va
          o‘zingizni sinovdan o‘tkazing!
        </p>
        <Link
          to="/jeopardy1"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          🚀 O‘yinni boshlash
        </Link>
      </div>
    </div>
  );
};

export default Home;
