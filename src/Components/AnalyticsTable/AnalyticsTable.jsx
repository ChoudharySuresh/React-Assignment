import { IoIosArrowDown } from "react-icons/io";
import Table from "./Table";
const AnalyticsTable = () => {
  return (
    <section className="my-4 w-[55.125rem] h-[22.688rem] bg-white py-4">
      {/* Table Nav */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-1">
          <h1 className="uppercase">Pageviews</h1>
          <IoIosArrowDown className="text-black" />
        </div>
        <div className="flex items-center gap-4">
          {/* Button Group */}
          <div className="w-[22rem]">
            <button className="border-l-2 border-r-2 border-t-2 border-b-2 px-1 py-1 w-[3.5rem] text-[0.6rem] font-medium">
              Today
            </button>
            <button className="border-r-2 border-t-2 border-b-2 px-2 py-1  text-[0.6rem] font-medium">
              Yesterday
            </button>
            <button className="border-r-2 border-t-2 border-b-2 px-1 py-1 w-[3.5rem] text-[0.6rem] font-medium">
              Week
            </button>
            <button className="border-r-2 border-t-2 border-b-2 px-1 py-1 w-[3.5rem] text-[0.6rem] font-medium bg-[#A2D2FC]">
              Month
            </button>
            <button className="border-r-2 border-t-2 border-b-2 px-1 py-1 w-[3.5rem] text-[0.6rem] font-medium">
              Quarter
            </button>
            <button className="border-r-2 border-t-2 border-b-2  px-1 py-1 w-[3.5rem] text-[0.6rem] font-medium">
              Year
            </button>
          </div>
          {/* Select Period */}
          <div className="px-4 py-1 flex items-center gap-1 border-2 rounded-md">
            <p className="text-xs">Select period</p>
            <IoIosArrowDown className="text-[#D9DADB]" />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      {/* Actual Table */}
      <div>
        <Table />
      </div>
    </section>
  );
};

export default AnalyticsTable;
