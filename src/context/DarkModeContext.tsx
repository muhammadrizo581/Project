import { createContext, useContext, useState, type ReactNode } from "react";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  // default holatda true => dark mode
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={
          darkMode
            ? "dark bg-gray-900 text-gray-100 min-h-screen"
            : "bg-white text-gray-900 min-h-screen"
        }
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error("useDarkMode must be used inside DarkModeProvider");
  return ctx;
};
