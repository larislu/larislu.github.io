import NavBarSpacer from "../components/NavBarSpacer";
import AIGenerator from "../projects/AIGenerator";
import DarkMode from "../projects/DarkMode";
import DemoCaptures from "../projects/DemoCaptures";
import MBot from "../projects/MBot";
import styled from "styled-components";
import { RiGithubLine, RiLinkedinBoxFill, RiMailFill } from "@remixicon/react";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.45em;
  text-align: center;
`;

const Card = styled.div`
  background-color: rgba(175, 216, 222, 0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  text-align: start;

  @media print {
    width: 730px;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
`;

const PolycamProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const OtherProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Footer = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  max-width: 800px;

  @media print {
    width: 725px;
    display: block;
    margin: 0 auto;
  }
`;

const Github = styled.a`
  padding: 6px 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PrintOnly = styled.div`
  display: none;
  @media print {
    display: block;
    width: 725px;
    text-align: start;
  }
`;

const Projects = () => {
  return (
    <Page>
      <NavBarSpacer />
      <h1>my project portfolio.</h1>
      <PrintOnly>
        This is a printed PDF copy of this page. My portfolio is best viewed
        as an website at larislu.github.io
      </PrintOnly>
      <h2>polycam design projects</h2>
      <PolycamProjects>
        <Card>
          <AIGenerator />
        </Card>
        <Card>
          <DarkMode />
        </Card>
        <Card>
          <DemoCaptures />
        </Card>
      </PolycamProjects>
      <h2>other fun projects</h2>
      <OtherProjects>
        <Card>
          <MBot />
        </Card>
        <Footer>
          {`(Also, one of my projects is creating this website from scratch! This page has a different experience on desktop vs mobile. It's also printable as a PDF. Check it out if you're curious!)`}{" "}
          <Github href="https://github.com/larislu/larislu.github.io">
            <RiGithubLine size={18} />
            GitHub
          </Github>
        </Footer>
      </OtherProjects>
    </Page>
  );
};

export default Projects;
