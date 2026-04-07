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

const MBot = () => {
  return (
    <Content>
      <Header>Operator Assistent MBot</Header>
      <span>
        As a senior capstone project, my team and I designed the software for a
        robot that travels through hallways while avoiding obstacles and stops
        at intersections to allow the user to select their next direction and
        maneuver.
      </span>
    </Content>
  );
};

export default MBot;
