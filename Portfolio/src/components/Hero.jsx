import TypeWriter from "./TypeWriter";
import { BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Button from "./Button";
import Button2 from "./Button2";

const Hero = () => {
  return (
    <div className="items-center justify-center text-center flex pt-12 sm:pt-24">
      <TypeWriter />
      <div className="sm:hidden flex mt-96 absolute items-center justify-center text-center space-x-5">
        <Button />
        <Button2 />
      </div>
      <div className="flex absolute sm:bottom-24 bottom-72 space-x-12 items-center justify-center text-center">
        <a
          href="https://www.linkedin.com/"
          className="pt-10  items-center justify-center text-center"
        >
          <BsLinkedin
            className="text-dark hover:text-black dark:text-light hover:dark:text-white duration-300 items-center justify-center text-center"
            size={40}
          />
        </a>
        <a
          href="mailto:2masnakkerud2@gmail.com"
          className="pt-10  items-center justify-center text-center"
        >
          <AiFillMail
            className="text-dark hover:text-black dark:text-light hover:dark:text-white duration-300 items-center justify-center text-center"
            size={54}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
