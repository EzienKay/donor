import { useEffect, useState } from "react";
import "./App.css";
import Campaign from "./component/Campaign";
import { isWallectConnected } from "./services/blockchain";
import { Route, Routes } from "react-router-dom";
import Demo from "./component/Demo";
import Project from "./component/Project";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      ) : (<Demo />)}
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
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

