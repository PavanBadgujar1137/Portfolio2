import {Routes, Route } from "react-router-dom";
import "./App.css";
import Project from "./components/Projects";
import Home from "./components/Home";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const backgroundColor = location.pathname === '/project-route' ? 'bg-black flex justify-center' : 'bg-white';
  return (
   <div className={`w-screen min-h-screen font-poppins item-center ${backgroundColor}`}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project-route" element={<Project/>}/>
      </Routes>
   </div>
  );
}

export default App;
