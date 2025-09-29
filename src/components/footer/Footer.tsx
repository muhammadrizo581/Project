import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo + About */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">Resources</h2>
          <p className="text-sm leading-relaxed">
            Ushbu platforma sizga IT fanidan dars materiallari, interaktiv
            o‘yinlar va foydali resurslarni taqdim etadi. Bilimingizni oshirish
            uchun barcha materiallar bir joyda.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/pdf" className="hover:text-white transition">
                PDF Materials
              </Link>
            </li>
            <li>
              <Link to="/jeopardy1" className="hover:text-white transition">
                Jeopardy Game
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://gamma.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Gamma Materials
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Hosting (Vercel)
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                TailwindCSS
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                React Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Yangiliklardan boxabar bo‘lish uchun email manzilingizni qoldiring.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg focus:outline-none text-gray-800 flex-1"
            />
            
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://facebook.com"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Extra links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Resources Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
