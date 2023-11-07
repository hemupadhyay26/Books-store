import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footers from "./components/Footers";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* <Footers /> */}
    </>
  );
}

export default App;
