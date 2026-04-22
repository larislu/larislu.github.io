import ProfilePicture from "../assets/profile-image.jpg";
import Hanfu from "../assets/hanfu.png";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "@remixicon/react";
import NavBarSpacer from "../components/NavBarSpacer";
import styles from "./Home.module.css";

const SocialButtons = (
  <div className={styles.social}>
    <a className={styles.button} href="mailto:larissalu0226@gmail.com">
      <RiMailFill />
      Email
    </a>
    <a
      className={styles.button}
      href="https://www.linkedin.com/in/larissa-lu-90b52aab/"
    >
      <RiLinkedinBoxFill />
      LinkedIn
    </a>
    <a className={styles.button} href="https://github.com/larislu">
      <RiGithubFill />
      GitHub
    </a>
  </div>
);

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBarSpacer />
      <div className={styles.about}>
        <div className={styles.body}>
          <div className={styles.description}>
            <div>
              <div>
                <h1>hi! i'm larissa.</h1>
              </div>
              <h2 className={styles.subHeader}>engineer && designer</h2>
              <span>
                I sit in the Venn diagram between engineering and design. My
                passion is for making accessible products with an effortless
                user experience, regardless of complexity under the surface.
              </span>
            </div>
            <span>
              Outside of work, I like to draw, play video games, figure skate,
              and do aerial circus arts.
            </span>
            <div className={styles.webOnly}>{SocialButtons}</div>
          </div>
          <img
            className={styles.image}
            src={Hanfu}
            alt="Picture of myself on top of a small mountain, facing away from the camera and towards the water."
          />
          <div className={styles.mobileOnly}>{SocialButtons}</div>
        </div>
      </div>
    </div>
  );
};

// Include companies I worked for?

export default Home;
