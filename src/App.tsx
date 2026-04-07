import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Artwork from "./pages/Artwork";
import styled from "styled-components";

const Links = styled.ul`
  font-size: 18px;
  display: flex;
  gap: 2em;
`;

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Links>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/artwork">Artwork</Link>
            </li>
          </Links>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/artwork" element={<Artwork />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
