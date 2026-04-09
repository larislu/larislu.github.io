import styled from "styled-components";
import DarkModeTokens from "../assets/projects/dark-mode-tokens.png";
import DarkModeSettings from "../assets/projects/dark-mode-settings.png";
import ProjectImages from "../components/ProjectImages";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
`;

const Card = styled.div`
  background-color: rgba(175, 216, 222, 0.7);
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

const Header = styled.h3`
  margin-top: 0;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const DarkMode = () => {
  return (
    <>
      <ProjectImages image1={DarkModeTokens} image2={DarkModeSettings} />
      <Content>
        <Header>Polycam Dark Mode</Header>
        <Text>
          <span>
            I led the engineering effort for dark mode and a new re-branded
            color scheme to cement the app as a professional enterprise tool.
            Dark mode is ubiquitous in apps, and yet we didn't have an option
            for it. The app now defaults to the system setting, with the ability
            to override.
          </span>
          <span>
            I advocated for visual accessibility guidelines with color contrast,
            making sure everything is accessible in both light mode and dark
            mode.
          </span>
        </Text>
      </Content>
    </>
  );
};

export default DarkMode;
