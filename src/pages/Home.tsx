import { Link } from "react-router-dom";
import styled from "styled-components";

import ProfilePicture from "../assets/profile-image.jpg";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "@remixicon/react";
import NavBarSpacer from "../components/NavBarSpacer";
//import "./Home.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0em 1em 1em 1em;
  gap: 8px;

  @media (min-width: 700px) {
    height: calc(100dvh - 120px);
    padding: 0 1em;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(175, 216, 222, 0.7);
  // background-color: #afd8de;
  padding: 1em;
  border-radius: 8px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  gap: 1em;

  @media (min-width: 700px) {
    flex-direction: row;
    gap: 2em;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Image = styled.img`
  height: 350px;
  border-radius: 8px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  padding-top: 1em;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 0;
  gap: 6px;
  text-decoration: none;
`;

const Footer = styled.span`
  font-size: 12px;
  align-self: flex-end;
`;

const WebOnly = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`;

const MobileOnly = styled.div`
  display: block;
  @media (min-width: 700px) {
    display: none;
  }
`;

const SocialButtons = (
  <Social>
    <Button href="mailto:larissalu0226@gmail.com">
      <RiMailFill />
      Email
    </Button>
    <Button href="https://www.linkedin.com/in/larissa-lu-90b52aab/">
      <RiLinkedinBoxFill />
      LinkedIn
    </Button>
    <Button href="https://github.com/larislu">
      <RiGithubFill />
      GitHub
    </Button>
  </Social>
);

const Home = () => {
  return (
    <Container>
      <NavBarSpacer />
      <About>
        <Body>
          <Description>
            <div>
              <div>
                <h1>hi! i'm larissa.</h1>
              </div>
              <h2>About Me</h2>
              <span>
                I'm a Seattle-based software engineer that likes to sit in the
                center of the Venn diagram between engineering and design. My
                passion is for making accessible products with an effortless
                user experience, regardless of complexity under the surface.
              </span>
            </div>
            <span>
              Outside of work, I like to draw, play video games, figure skate,
              or do aerial circus arts.
            </span>
            <WebOnly>{SocialButtons}</WebOnly>
          </Description>
          <Image
            src={ProfilePicture}
            alt="Picture of myself on top of a small mountain, facing away from the camera and towards the water."
          />
          <MobileOnly>{SocialButtons}</MobileOnly>
        </Body>
      </About>
    </Container>
  );
};

export default Home;
