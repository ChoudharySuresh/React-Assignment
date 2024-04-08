import { VideoThumbnail } from "../Images/index";
const HomePage = () => {
  return (
    <section className="w-[58.75rem] flex items-start gap-4">
      {/* Left Part */}
      <div className="w-[32.5rem]">
        {/* Left Header */}
        <div className="my-4">
          <h1 className="text-2xl">Set-up Catalix for Success</h1>
          <p className="text-[#494C55] my-3">
            Get Catalix up to date or start your transformation by following the
            guide below.
          </p>
        </div>
        {/* left Card */}
        <div className="w-full h-[21.688rem] mt-8 bg-white rounded-lg flex flex-col items-center justify-center gap-8 homeCardShadow">
          <button className="px-5 py-2 rounded-full bg-[#539BBB] text-white">
            2/6
          </button>
          <h1 className="text-center w-[27rem] text-2xl">
            Build your development value stream map
          </h1>
          <button className="px-5 py-2 rounded-full bg-[#2F667F] text-white">
            Start Building
          </button>
          <div className="flex items-center gap-1">
            {Array(6)
              .fill()
              .map((item, index) => {
                return (
                  <div
                    className={`w-[0.5rem] h-[0.5rem] ${
                      index === 1 ? `bg-[#539BBB]` : `bg-[#616161]`
                    }  my-3 rounded-lg`}
                    key={item}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="w-[24rem] h-screen bg-white px-4 border-l-2 rounded-lg">
        {/* Right Header */}
        <div className="my-4">
          <h1 className="text-2xl">Get ready to transform</h1>
          <p className="text-[#494C55] my-4">
            Here’s a video to get started. As your transformation progresses,
            you’ll get fresh tips and insights here.
          </p>
          <div>
            <img src={VideoThumbnail} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
