import NavBarSpacer from "../components/NavBarSpacer";
import AIGenerator from "../projects/AIGenerator";
import DarkMode from "../projects/DarkMode";
import DemoCaptures from "../projects/DemoCaptures";
import MBot from "../projects/MBot";
import styled from "styled-components";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
`;

const Card = styled.div`
  background-color: rgba(175, 216, 222, 0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const PolycamProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  //width: 100%;
`;

const OtherProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Footer = styled.div`
  font-size: 14px;
`;

const Projects = () => {
  return (
    <Page>
      <NavBarSpacer />
      <h1>my project portfolio.</h1>
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
          {`also one of my projects is creating this website from scratch :)`}{" "}
        </Footer>
      </OtherProjects>
    </Page>
  );
};

export default Projects;
