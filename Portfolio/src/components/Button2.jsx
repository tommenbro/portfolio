import { BsGithub } from "react-icons/bs";
const Button = () => {
  return (
    <div className="bg-white dark:bg-light dark:hover:bg-white hover:shadow-sm hover:bg-light border-accent hover:border-dark border-[1px] hover:cursor-pointer duration-500 rounded-lg px-3 py-2 w-fit items-center justify-center text-center">
      <div className="flex text-dark items-center text-center justify-center">
        <h1 className="font-regular font-roboto mr-2 text-sm">Github</h1>
        <BsGithub className="items-center justify-center text-sm" />
      </div>
    </div>
  );
};

export default Button;
