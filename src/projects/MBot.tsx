import MBot1 from "../assets/projects/mbot-1.png";
import MBot2 from "../assets/projects/mbot-2.png";
import { RiArrowRightDoubleLine } from "@remixicon/react";
import ProjectImages from "../components/ProjectImages";
import styles from "./projects.module.css";

const MBot = () => {
  return (
    <>
      <ProjectImages image1={MBot1} image2={MBot2} />
      <div className={styles.content}>
        <h3 className={styles.header}>Operator Assistant MBot</h3>
        <div className={styles.text}>
          <span>
            As a senior capstone project, my team and I designed the software
            for a robot that travels through hallways while avoiding obstacles
            and stops at intersections to allow the user to select their next
            direction and maneuver.
          </span>
          <a
            className={styles.moreInfo}
            href="https://www.youtube.com/watch?v=YuvRwL5f_TE"
            target="_blank"
          >
            More info <RiArrowRightDoubleLine size={16} />
          </a>
        </div>
      </div>
    </>
  );
};

export default MBot;
