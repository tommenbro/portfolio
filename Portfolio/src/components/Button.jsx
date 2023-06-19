import { BsDownload } from "react-icons/bs";
const Button = () => {
  return (
    <div className="bg-dark hover:bg-accent hover:cursor-pointer duration-500 flex-col relative rounded-lg px-3 py-2 w-fit items-center justify-center text-center">
      <div className="flex  text-light items-center text-center justify-center">
        <h1 className="font-regular font-roboto mr-2 text-sm">Resume</h1>
        <BsDownload className="items-center justify-center text-sm" />
      </div>
    </div>
  );
};

export default Button;
