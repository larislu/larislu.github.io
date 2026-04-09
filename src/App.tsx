import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Artwork from "./pages/Artwork";
import NavBar from "./components/NavBar";

// TODO
// - refreshing on a non-root page 404s

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/artwork" element={<Artwork />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
