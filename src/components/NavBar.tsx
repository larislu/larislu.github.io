import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  RiHome4Line,
  RiPagesLine,
  RiPaletteLine,
  RiRobot2Line,
} from "@remixicon/react";

const Links = styled.ul`
  width: 100dvw;
  position: fixed;
  top: 0;
  font-size: 18px;
  display: flex;
  gap: 16px;
  list-style-type: none;
  justify-content: center;
  padding: 0;
  margin-block: 0;
  background-color: #ebf8fa;
  z-index: 10;

  @media (min-width: 380px) {
    gap: 28px;
  }

  @media print {
    display: none;
  }
`;

// const Gradient = styled.div`
//   position: fixed;
//   top: 56px;
//   background: linear-gradient(180deg, #ebf8fa 0%, transparent 100%);
//   height: 4px;
//   width: 100dvw;
// `;

const NavButton = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-block: 18px;
  align-items: center;

  @media (min-width: 510px) {
    flex-direction: row;
  }
`;

const enum // TODO
// - refreshing on a non-root page 404s

Page {
  home = "home",
  resume = "resume",
  projects = "projects",
  artwork = "artwork",
}

type PageInfo = {
  name: string;
  route: string;
  icon: React.ReactElement;
};

const Info: Record<Page, PageInfo> = {
  home: {
    name: "Home",
    route: "/",
    icon: <RiHome4Line />,
  },
  resume: {
    name: "Resume",
    route: "/resume",
    icon: <RiPagesLine />,
  },
  projects: {
    name: "Projects",
    route: "/projects",
    icon: <RiRobot2Line />,
  },
  artwork: {
    name: "Artwork",
    route: "/artwork",
    icon: <RiPaletteLine />,
  },
};

const pages = [Page.home, Page.resume, Page.projects, Page.artwork];

const NavBar = () => {
  return (
    <>
      <nav>
        <Links>
          {pages.map((page) => (
            <li key={Info[page].name}>
              <NavButton to={Info[page].route}>
                {Info[page].icon}
                {Info[page].name}
              </NavButton>
            </li>
          ))}
        </Links>
      </nav>
      {/* <Gradient /> */}
    </>
  );
};

export default NavBar;
