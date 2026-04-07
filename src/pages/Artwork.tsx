import styled from "styled-components";
import Furina from "../assets/furina.png";
import Alhaitham from "../assets/alhaitham.png";
import Woman from "../assets/woman.png";
import Clouds from "../assets/clouds.png";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  background-color: #afd8de;
  border-radius: 8px;
  display: flex;
  max-width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Header = styled.h2`
  margin: 1em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding-inline: 1.5em;
  padding-bottom: 1em;
`;

const Image = styled.img`
  max-height: 400px;
  border-radius: 8px;
  object-fit: contain;
  min-width: 0;
`;

const Artwork = () => {
  return (
    <Page>
      <h1>sometimes i like to draw.</h1>
      <Background>
        <Content>
          <Header>digital art, studies</Header>
          <Row>
            <Image src={Clouds} />
            <Image src={Woman} />
          </Row>
          <Header>digital art, fanart</Header>
          <Row>
            <Image src={Alhaitham} />
            <Image src={Furina} />
          </Row>
          <Header>traditional art, sketchbook</Header>
        </Content>
      </Background>
    </Page>
  );
};

export default Artwork;
