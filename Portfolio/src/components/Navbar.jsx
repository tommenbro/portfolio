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
      <div className="flex space-x-10 justify-center items-center text-center pt-12 sm:pt-7 pb-7">
        <div className="sm:mr-72 dark:bg-accent dark:hover:bg-secondary dark:text-light dark:hover:text-white bg-white hover:bg-light hover:border-dark border-secondary border-[1px] dark:border-[0px] text-dark hover:text-black duration-500 rounded-full">
          <button
            onClick={switchTheme}
            className="p-3 justify-center items-center text-center flex space-x-2"
          >
            <h1 className="text-sm hidden dark:block">Dark</h1>
            <BsMoonFill className="text-sm hidden dark:block" />
            <h1 className="text-sm block dark:hidden">Light</h1>
            <BsSunFill className="text-sm block dark:hidden" />
          </button>
        </div>
        <a
          className="hidden sm:block hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white duration-500">
            About
          </h1>
        </a>
        <a
          className="hidden sm:block hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white  duration-500">
            Development
          </h1>
        </a>
        <a
          className="hidden sm:block hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white  duration-500">
            Experience
          </h1>
        </a>
        <a
          className="hidden sm:block hover:bg-light dark:bg-dark dark:hover:bg-accent hover:cursor-pointer hover:shadow-sm duration-500 px-3 py-2 rounded-lg"
          href="#about"
        >
          <h1 className="text-sm text-black dark:text-white  duration-500">
            More
          </h1>
        </a>

        <div className="space-x-5 pl-48 hidden sm:flex">
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
