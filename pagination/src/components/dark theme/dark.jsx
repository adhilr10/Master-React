import { useEffect, useState } from "react";

const Dark = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex items-center justify-center flex-col bg-white text-black dark:bg-[#242424] dark:text-white h-screen">
      <div className="mb-2">
        <button
          className="bg-white dark:bg-[#242424] outline outline-1"
          onClick={handleTheme}
        >{`${theme === "dark" ? "🌙" : "🔆"}`}</button>
      </div>
      {children}
    </div>
  );
};

export default Dark;
