import styled from "styled-components";
import MBot1 from "../assets/projects/mbot-1.png";
import MBot2 from "../assets/projects/mbot-2.png";
import { RiArrowRightDoubleLine } from "@remixicon/react";
import ProjectImages from "../components/ProjectImages";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  gap: 1em;
`;

const Header = styled.h3`
  margin: 0;
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

const MoreInfo = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const MBot = () => {
  return (
    <>
      {/* <ImageRow>
        <Image src={MBot1} />
        <Image src={MBot2} />
      </ImageRow> */}
      <ProjectImages image1={MBot1} image2={MBot2} />
      <Content>
        <Header>Operator Assistent MBot</Header>
        <span>
          As a senior capstone project, my team and I designed the software for
          a robot that travels through hallways while avoiding obstacles and
          stops at intersections to allow the user to select their next
          direction and maneuver.
        </span>
        <MoreInfo
          href="https://www.youtube.com/watch?v=YuvRwL5f_TE"
          target="_blank"
        >
          More info <RiArrowRightDoubleLine size={16} />
        </MoreInfo>
      </Content>
    </>
  );
};

export default MBot;
