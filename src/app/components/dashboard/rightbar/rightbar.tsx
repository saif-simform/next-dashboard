import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="bgImage"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notifications}> Available Now </span>
          <h3 className={styles.title}>
            How to use new version of admin dashboard
          </h3>
          <span className={styles.subTitle}>Task 4 minutes to learn</span>
          <p className={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="bgImage"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notifications}> Coming Soon </span>
          <h3 className={styles.title}>
            New server action are Available, partial pre-rendering is coming up!
          </h3>
          <span className={styles.subTitle}>Boost your productivity</span>
          <p className={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
