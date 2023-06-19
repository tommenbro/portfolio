import Button from "./Button";
import Button2 from "./Button2";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="top-0 sm:h-42 bg-white dark:bg-dark flex-col">
      <div className="flex space-x-10 justify-center items-center text-center pt-7">
        <div className="mr-48 dark:bg-accent dark:hover:bg-secondary dark:text-light dark:hover:text-white bg-secondary hover:bg-accent text-white hover:text-light duration-300 rounded-full p-3 justify-center items-center text-center flex">
          <button onClick={switchTheme}>
            {theme ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
          </button>
        </div>
        <a
          className="hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white duration-500">
            About
          </h1>
        </a>
        <a
          className="hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white  duration-500">
            Development
          </h1>
        </a>
        <a
          className="hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white  duration-500">
            Experience
          </h1>
        </a>
        <a
          className="hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white  duration-500">
            Other
          </h1>
        </a>

        <div className="flex space-x-5 pl-48">
          <a
            href="https://github.com/tommenbro"
            rel="noreferrer"
            target="_blank"
          >
            <Button2 />
          </a>
          <a
            href="https://github.com/tommenbro"
            rel="noreferrer"
            target="_blank"
          >
            <Button />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
