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

const AIGenerator = () => {
  return (
    <Content>
      <Header>AI 3D Model Generator in Scenes</Header>
      <span>
        I designed the integration of Polycam's AI Model Generator within the
        Scenes feature. Scenes allow users to combine multiple 3D captures into
        one. Creating a seemless experience between this and our existing AI
        Model Generator allows someone to quickly create any new model they
        might want and have it automatically be added to the scene.
      </span>
    </Content>
  );
};

export default AIGenerator;
