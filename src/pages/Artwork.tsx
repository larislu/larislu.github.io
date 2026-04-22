import NavBarSpacer from "../components/NavBarSpacer";
import styles from "./Artwork.module.css";

import Furina from "../assets/furina.jpg";
import Alhaitham from "../assets/alhaitham.jpg";
import Woman from "../assets/woman.jpg";
import Clouds from "../assets/clouds.jpg";
import Stag from "../assets/stag.jpg";
import Silksong from "../assets/silksong.jpg";

// TODO:
// - swap to jpgs for smaller file size and faster loading
// - have a overlay open with an enlarged image when clicked

const Artwork = () => {
  return (
    <div className={styles.page}>
      <NavBarSpacer />
      <h1>i like to draw.</h1>
      <div className={styles.background}>
        <div className={styles.content}>
          <h2 className={styles.header}>digital art, studies</h2>
          <div className={styles.row}>
            <img className={styles.image} src={Clouds} />
            <img className={styles.image} src={Woman} />
          </div>
          <h2 className={styles.header}>digital art, fanart</h2>
          <div className={styles.row}>
            <img className={styles.image} src={Alhaitham} />
            <img className={styles.image} src={Furina} />
          </div>
          <h2 className={styles.header}>traditional art, sketchbook</h2>
          <div className={styles.row}>
            <img className={styles.image} src={Stag} />
            <img className={styles.image} src={Silksong} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
