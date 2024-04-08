import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Logo } from "../../Images/index";
import { navLinks, navLinks2 } from "../../Utils/Constant";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  return (
    <aside
      className={`bg-[#2F667F] ${
        expanded ? "w-[17.81rem]" : "w-fit"
      } h-screen flex flex-col justify-between p-4 mx-4 my-2 shadow-2xl rounded-3xl sticky top-0 sidebarShadow`}
    >
      {/* Sidebar Upper */}
      <div>
        <div
          className={`flex ${
            expanded ? "justify-end mr-6" : "justify-center"
          }  `}
        >
          <button onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? (
              <IoIosArrowDropleft className="text-3xl text-white" />
            ) : (
              <IoIosArrowDropright className="text-3xl text-white" />
            )}
          </button>
        </div>

        <div
          className={`${
            expanded ? "w-auto" : "w-0"
          } overflow-hidden transition-all mt-8`}
        >
          <img src={Logo} alt="logo" />
        </div>
      </div>

      {/* Sidebar Links */}
      <nav>
        <ul>
          {navLinks.map((link) => (
            <Link key={link.id} to={link.path}>
              <li
                className={` ${
                  location.pathname === link.path ? "bg-[#539BBB]" : ""
                } text-white px-4 py-3 flex items-center mb-3 gap-4 hover:bg-[#539BBB] rounded-2xl`}
              >
                <img src={link.icon} alt="icon" />
                <p className={`${expanded ? "" : "hidden"}`}>{link.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Sidebar Lower */}
      <div>
        <hr className="mb-3" />
        <ul>
          {navLinks2.map((link) => (
            <li
              className=" text-white px-4 py-3 flex items-center mb-3 gap-4 hover:bg-[#539BBB] rounded-2xl"
              key={link.id}
            >
              <img src={link.icon} alt="icon" />
              <a href={link.path} className={`${expanded ? "" : "hidden"}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
