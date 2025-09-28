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
    <div className="flex flex-col items-center text-center mt-10 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Welcome */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow">
        💻 IT Learning Resources
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10 text-lg">
        Ushbu platformada siz IT fanidan barcha asosiy dars materiallari va
        qo‘shimcha resurslarni topishingiz mumkin. Har bir bo‘lim alohida Unit
        ko‘rinishida joylashtirilgan.
      </p>

      {/* Units grid */}
      <div className="w-full max-w-6xl text-left mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">
          📘 Dars bo‘limlari
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, i) => (
            <a
              key={i}
              href={unit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={unit.image}
                alt={unit.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition">
                  {unit.title}
                </h3>
                <p className="text-sm text-gray-500 mt-auto italic">
                  Gamma Material
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Jeopardy promo */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-700">
          🎮 Jeopardy Game
        </h2>
        <p className="text-gray-700 mb-6">
          Bilimingizni interaktiv savol-javob o‘yini orqali mustahkamlang.
        </p>
        <Link
          to="/jeopardy1"
          className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 hover:shadow-lg transform hover:scale-105 transition"
        >
          O‘yinni boshlash →
        </Link>
      </div>
    </div>
  );
};

export default Home;
