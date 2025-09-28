import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Part 1", path: "https://it-journey-1g6l9it.gamma.site/" },
    { title: "Part 2", path: "/part2" },
    { title: "Part 3", path: "/part3" },
    { title: "Jeopardy", path: "/jeopardy" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">
          Resources
        </Link>
        <div className="flex space-x-4">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-semibold underline" : ""}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
