import styled from "styled-components";
import DarkModeTokens from "../assets/projects/dark-mode-tokens.png";
import DarkModeSettings from "../assets/projects/dark-mode-settings.png";
import ProjectImages from "../components/ProjectImages";
import styles from "./projects.module.css";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
`;

const DarkMode = () => {
  return (
    <>
      <ProjectImages image1={DarkModeTokens} image2={DarkModeSettings} />
      <div className={styles.content}>
        <h3 className={styles.header}>Polycam Dark Mode</h3>
        <div className={styles.text}>
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
        </div>
      </div>
    </>
  );
};

export default DarkMode;
