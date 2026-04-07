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

const DemoCaptures = () => {
  return (
    <Content>
      <Header>Demo Captures</Header>
      <span>
        Polycam has a slew of features, many of them being behind a paywall. We
        wanted to create demo captures that let them sample features and see the
        value behind the higher tiers. New accounts were to include a few
        captures, one of each type. The changes are not saved and the user is
        given indication if they're using a paywalled feature.
      </span>
    </Content>
  );
};

export default DemoCaptures;
