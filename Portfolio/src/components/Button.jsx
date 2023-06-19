import { BsDownload } from "react-icons/bs";
const Button = () => {
  return (
    <div className="bg-dark hover:shadow-sm  hover:bg-accent hover:cursor-pointer border-dark hover:border-dark border-[1px] duration-500 rounded-lg px-3 py-2 w-fit items-center justify-center text-center">
      <div className="flex text-light items-center text-center justify-center">
        <h1 className="font-regular font-roboto mr-2 text-sm">Resume</h1>
        <BsDownload className="items-center justify-center text-sm" />
      </div>
    </div>
  );
};

export default Button;
