import NavBarSpacer from "../components/NavBarSpacer";
import styled from "styled-components";

import Furina from "../assets/furina.jpg";
import Alhaitham from "../assets/alhaitham.jpg";
import Woman from "../assets/woman.jpg";
import Clouds from "../assets/clouds.jpg";
import Stag from "../assets/stag.jpg";
import Silksong from "../assets/silksong.jpg";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  background-color: rgba(175, 216, 222, 0.7);
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
  align-self: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  padding-inline: 1em;
  padding-bottom: 1em;
`;

const Image = styled.img`
  max-height: 400px;
  border-radius: 8px;
  object-fit: contain;
  min-width: 0;
`;

// TODO:
// - swap to jpgs for smaller file size and faster loading
// - have a overlay open with an enlarged image when clicked

const Artwork = () => {
  return (
    <Page>
      <NavBarSpacer />
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
          <Row>
            <Image src={Stag} />
            <Image src={Silksong} />
          </Row>
        </Content>
      </Background>
    </Page>
  );
};

export default Artwork;
