import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ashutosh</div>
      <div className={styles.text}>
Made by Ashutosh :  For learning purposes only      </div>
    </div>
  );
};

export default Footer;