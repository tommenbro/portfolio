import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
const LightSwitch2 = () => {
  return (
    <div className="hover:shadow-sm bg-dark  hover:cursor-pointer duration-500 rounded-full px-3 py-2 w-fit items-center justify-center text-center">
      <div className="flex text-light items-center text-center justify-center">
        <h1 className="font-regular font-roboto mr-2 text-sm">Mode</h1>
        <BsLightbulb className="items-center justify-center text-sm" />
      </div>
    </div>
  );
};

export default LightSwitch2;
