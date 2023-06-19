import Button from "./Button";
import Button2 from "./Button2";
import LightSwitch from "./LightSwitch";
import LightSwitch2 from "./LightSwitch2";

const Navbar = () => {
  return (
    <div className="top-0 sm:h-42 bg-white flex-col">
      <div className="flex space-x-10 justify-center items-center text-center pt-7">
        <div className="flex space-x-5 mr-48">
          <LightSwitch />
          <LightSwitch2 />
        </div>
        <a
          className="hover:bg-light hover:cursor-pointer hover:shadow-sm duration-500 p-3 rounded-xl"
          href="#about"
        >
          <h1 className="text-sm text-black  duration-500">About</h1>
        </a>
        <a
          className="hover:bg-light hover:cursor-pointer hover:shadow-sm duration-500 p-3 rounded-xl"
          href="#dev"
        >
          <h1 className="text-sm text-black  duration-500">Development</h1>
        </a>
        <a
          className="hover:bg-light hover:cursor-pointer hover:shadow-sm duration-500 p-3 rounded-xl"
          href="#edu"
        >
          <h1 className="text-sm text-black  duration-500">Education</h1>
        </a>
        <a
          className="hover:bg-light hover:cursor-pointer hover:shadow-sm duration-500 p-3 rounded-xl"
          href="#other"
        >
          <h1 className="text-sm text-black  duration-500">Other</h1>
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
