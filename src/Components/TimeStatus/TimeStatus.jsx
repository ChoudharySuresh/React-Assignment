const TimeStatus = () => {
  return (
    <section className="flex items-center gap-3">
      <div className="w-[18rem] h-[12rem] p-[1.3rem] bg-white rounded-xl timeStatusCardShadow">
        <div className="flex justify-end">
          <div className="w-[1rem] h-[1rem] bg-[#26D75A] rounded-full"></div>
        </div>
        <h1 className="my-3 font-semibold">On Time</h1>
        <div>
          <div className="flex items-center justify-between mb-1">
            <p>Completed Iteratiions</p>
            <p className="font-semibold text-black">7</p>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p>Total Iterations</p>
            <p className="font-semibold text-black">9</p>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p>% Iterations Done</p>
            <p className="font-semibold text-black">77.8%</p>
          </div>
        </div>
      </div>
      <div className="w-[18rem] h-[12rem] p-[1.3rem] bg-white rounded-xl timeStatusCardShadow">
        <div className="flex justify-end">
          <div className="w-[1rem] h-[1rem] bg-[#26D75A] rounded-full"></div>
        </div>
        <h1 className="my-3 font-semibold">On Scope</h1>
        <div>
          <div className="flex items-center justify-between mb-1">
            <p>Story Points Done</p>
            <p className="font-semibold text-black">3200</p>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p>Total Story Points</p>
            <p className="font-semibold text-black">4230</p>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p>% Stories Done</p>
            <p className="font-semibold text-black">70.9%</p>
          </div>
        </div>
      </div>
      <div className="w-[18rem] h-[12rem] p-[1.3rem] bg-white rounded-xl timeStatusCardShadow">
        <div className="flex justify-end">
          <div className="w-[1rem] h-[1rem] bg-[#FF6E66] rounded-full"></div>
        </div>
        <h1 className="my-3 font-semibold">On Velocity</h1>
        <div>
          <div className="flex items-center justify-between mb-1">
            <p>Average Velocity</p>
            <p className="font-semibold text-black">428.6</p>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p>Required Velocity</p>
            <p className="font-semibold text-black">615.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeStatus;
