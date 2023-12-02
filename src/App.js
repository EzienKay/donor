import { useEffect, useState } from "react";
import { isWallectConnected } from "./services/blockchain";
//import Project from "./component/Project";
import "./App.css";
import Campaign from "./component/Campaign";
import { Route, Routes } from "react-router-dom";
import Demo from "./component/Demo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Buttons from "./component/Buttons";
import CryptoDonation from "./component/CryptoDonation";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await isWallectConnected();
      console.log("Blockchain loaded from app js");
      setLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      {loaded ? (
        <Routes>
          <Route path="/" element={<Campaign />} />
          <Route path="create" element={<Demo />} />
          {/* <Route path="/projects/:id" element={<Project />} /> */}
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/crypto" element={<CryptoDonation />} />
        </Routes>
        ) : null }
      <ToastContainer
        position="bottom-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

