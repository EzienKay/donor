// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { loadProject } from '../services/blockchain';
// import { useGlobalState } from '../store/Index';
import Liter from './Liter';

const Project = () => {
  //   const { id } = useParams();
  //   const [loaded, setLoaded] = useState(false);
  //   const [project] = useGlobalState('project');

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       console.log("Project ID in useEffect:", id); // Log the ID
  //       await loadProject(id);
  //       setLoaded(true);
  //     };
  //
  //     fetchData();
  //   }, [id]);
  const demo = "is a big boy";
  //console.log(project)

  return (
    <>
      <Liter demo={demo} />
    </>
  );
};

export default Project;
