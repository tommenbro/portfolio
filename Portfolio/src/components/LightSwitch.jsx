import { BsToggleOff, BsToggleOn } from "react-icons/bs";
const LightSwitch = () => {
  return (
    <div className="bg-white hover:shadow-sm  border-accent hover:border-dark border-[1px] hover:cursor-pointer duration-500 rounded-full px-3 py-2 w-fit items-center justify-center text-center">
      <div className="flex text-dark items-center text-center justify-center">
        <h1 className="font-regular font-roboto mr-2 text-sm">Light</h1>
        <BsToggleOn className="items-center justify-center text-sm" />
      </div>
    </div>
  );
};

export default LightSwitch;
