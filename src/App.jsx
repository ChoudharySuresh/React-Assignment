import { Sidebar } from "./Components";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/analytics");
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-[17.81rem_58.75rem] md:gap-10 ">
        <Sidebar />
        <div className="my-4 flex flex-col gap-4 mr-4">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
