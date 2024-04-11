import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Projects } from "./components/pages/Projects";
import { Resume } from "./components/pages/Resume";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

function App() {
  return (
    <BrowserRouter>
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
