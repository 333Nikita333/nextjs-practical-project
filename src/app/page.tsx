import Image from "next/image";
import Button from "@/components/Button/Button";
import Hero from "public/hero.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The Future of AI in the next few years</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="main photo" />
      </div>
    </main>
  );
}
