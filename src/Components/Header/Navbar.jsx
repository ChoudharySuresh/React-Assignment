import { IoIosSearch } from "react-icons/io";
import { Chat, Bell, User2, Setting } from "../../Images";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

const Navbar = () => {
  const [searchVisible, setSerarchVisible] = useState(false);
  return (
    <section className="flex items-center justify-between px-4">
      {/* Search Box */}

      <div className="relative w-full md:w-[60%] lg:w-[50%] xl:w-[25.5rem] md:mr-4 lg:mx-20">
        <Input
          type="search"
          label="Search"
          placeholder="Search by profile, setting, artifact etc..."
          className="pl-8 pr-4 py-2 border-2 border-gray-500 rounded-md outline-none text-black"
          onFocus={() => setSerarchVisible(true)}
          onBlur={() => setSerarchVisible(false)}
        />
        {searchVisible && (
          <IoIosSearch className="absolute top-[0.8rem] ml-3 text-[#539BBB]" />
        )}
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 ">
        <button className="p-2 shadow-2xl bg-white rounded-xl notificationShadow">
          <img src={Bell} alt="bell" />
        </button>
        <button className="p-2 shadow-2xl bg-white rounded-xl notificationShadow">
          <img src={Chat} alt="chat" />
        </button>
        <button className="p-2 shadow-2xl bg-white rounded-xl notificationShadow">
          <img src={Setting} alt="chat" />
        </button>
        <div>
          <img src={User2} alt="" className="rounded-full w-10 h-10" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
