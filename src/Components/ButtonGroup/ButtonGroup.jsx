import { HiOutlinePlus } from "react-icons/hi2";
const ButtonGroup = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#2F667F] text-white w-[11.81rem]">
        <HiOutlinePlus className="text-xl" />
        Create Report
      </button>
      <button className="px-5 py-2 rounded-full border-[2px] border-[#6C6F6B] w-[15rem] font-medium text-[#2F667F]">
        Share this dashboard
      </button>
      <button className="px-5 py-2 rounded-full border-[2px] border-[#6C6F6B] w-[11rem]  font-medium text-[#6C6F6B]">
        Select duration
      </button>
      <button className="px-5 py-2 rounded-full border-[2px] border-[#6C6F6B] w-[16rem] font-medium text-[#6C6F6B]">
        Compare with Duration
      </button>
    </div>
  );
};

export default ButtonGroup;
