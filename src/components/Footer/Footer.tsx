import { FC } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div>2023 My App. All right reserved</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src="/gmail.png"
          width={15}
          height={15}
          alt="gmail logo"
        />
        <Image
          className={styles.icon}
          src="/github.png"
          width={15}
          height={15}
          alt="github logo"
        />
        <Image
          className={styles.icon}
          src="/linkedin.png"
          width={15}
          height={15}
          alt="linkedin logo"
        />
        <Image
          className={styles.icon}
          src="/inst.png"
          width={15}
          height={15}
          alt="inst logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
