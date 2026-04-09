import styled from "styled-components";
import DemoLibrary from "../assets/projects/demo-library.png";
import DemoTooltip from "../assets/projects/demo-tooltip.png";
import ProjectImages from "../components/ProjectImages";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
`;

const Header = styled.h3`
  margin-top: 0;
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 400px;
  object-fit: contain;
  min-width: 0;
`;

const DemoCaptures = () => {
  return (
    <>
      {/* <ImageRow>
        <Image src={DemoTooltip} />
        <Image src={DemoLibrary} />
      </ImageRow> */}
      <ProjectImages image1={DemoTooltip} image2={DemoLibrary} />
      <Content>
        <Header>Demo Captures</Header>
        <span>
          Polycam has a slew of features, many of them being behind a paywall.
          We wanted to create demo captures that let them sample features and
          see the value behind the higher tiers. New accounts were to include a
          few captures, one of each type. The changes are not saved and the user
          is given indication if they're using a paywalled feature.
        </span>
      </Content>
    </>
  );
};

export default DemoCaptures;
