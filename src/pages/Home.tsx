import { Link } from "react-router-dom";
import styled from "styled-components";

import ProfilePicture from "../assets/profile-image.jpg";
import { RiLinkedinBoxFill, RiMailFill } from "@remixicon/react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 60px);
  align-items: center;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #afd8de;
  padding: 1em;
  border-radius: 8px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 700px;
  gap: 2em;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 350px;
  border-radius: 8px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 0;
  gap: 6px;
  text-decoration: none;
`;

const Home = () => {
  return (
    <Container>
      <About>
        <Body>
          <Description>
            <div>
              <h1>hi! i'm larissa.</h1>
            </div>
            <h2>About Me</h2>
            <span>
              I'm a Seattle-based software engineer that likes to sit in the
              center of the Venn diagram between engineering and design. My
              passion is for making accessible products with an effortless user
              experience, regardless of complexity under the surface.
            </span>
            <br />
            <span>
              Outsie of work, I like to <Link to="/artwork">draw,</Link> play
              video games, figure skate, or do aerial circus arts.
            </span>
            <br />
            <Social>
              <Button href="mailto:larissalu0226@gmail.com">
                <RiMailFill />
                Email
              </Button>
              <Button href="https://www.linkedin.com/in/larissa-lu-90b52aab/">
                <RiLinkedinBoxFill />
                LinkedIn
              </Button>
            </Social>
          </Description>
          <Image src={ProfilePicture} alt="My company logo" />
        </Body>
      </About>
    </Container>
  );
};

export default Home;
