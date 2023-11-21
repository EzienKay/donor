import { useEffect, useState } from "react";
import "./App.css";
import Campaign from "./component/Campaign";
import { isWallectConnected } from "./services/blockchain";
import { Route, Routes } from "react-router-dom";
import Demo from "./component/Demo";


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
      {loaded ? (<Routes>
        <Route path="/" element={<Campaign />} />
        <Route path="create" element={<Demo />} />
      </Routes>) : null}
    </div>

    // <div className="app">
    //   {loaded ? (
        
    //       <Campaign />
        
    //   ) : null}
    // </div>
  );
}

export default App;