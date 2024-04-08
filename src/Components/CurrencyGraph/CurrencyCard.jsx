import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
const CurrencyCard = ({ data }) => {
  const { Number, direction, icon, lowerNumber, status, subNumber, id } = data;
  return (
    <div
      className={`w-[12.9rem] ${id === 1 && `bg-[#8EBAE3]`} 
      ${id === 2 && `bg-[#14827B]`}  
      ${id === 3 && `bg-[#FFFFFF]`}
      ${id === 4 && `bg-[#FF4F52]`}
      ${id === 3 ? "text-black" : "text-white"}
      rounded-xl relative currencyCardShadow`}
    >
      <div className="flex flex-col gap-4 px-5 py-2 relative z-10">
        <div>
          <h1 className="uppercase">{status}</h1>
          <p className="text-xs">Lorem Ipsum</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl">{Number}</h2>
            {direction === "up" ? (
              <IoCaretUpSharp className="" />
            ) : (
              <IoCaretDownSharp className="" />
            )}
          </div>
          <p className="text-sm">{subNumber}</p>
        </div>
        <div>
          <p className="text-xs">{lowerNumber}</p>
        </div>
      </div>

      <img src={icon} alt="icon" className="absolute bottom-0 z-0 rounded-xl" />
    </div>
  );
};

export default CurrencyCard;
