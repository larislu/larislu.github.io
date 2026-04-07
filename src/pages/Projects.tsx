import AIGenerator from "../projects/AIGenerator";
import styled from "styled-components";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
`;

const Card = styled.div`
  background-color: #afd8de;
  border-radius: 8px;
  display: flex;
  max-width: 100%;
  margin-bottom: 2em;
  max-width: 800px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
`;

const Header = styled.h2`
  margin: 0;
`;

const Team = styled.h3`
  margin-top: 1em;
  margin-bottom: 0;
`;

// TODO
// - figure out how to get gifs?
const Projects = () => {
  return (
    <Page>
      <h1>my projects.</h1>
      <h2>polycam design projects</h2>
      <Card>
        <AIGenerator />
      </Card>
      <h2>other fun projects</h2>
    </Page>
  );
};

export default Projects;
