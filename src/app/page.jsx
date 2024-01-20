import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Ready to transform your vision into reality? Click 'Learn More' to discover
          the limitless possibilities with Creative Thoughts Agency – where
          innovation meets imagination.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <Link className={styles.contactButton} href="/contact">Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt=""
          fill
          className={styles.heroImg}
          priority
        />
      </div>
    </div>
  );
};

export default Home;
