import { FC } from "react";
import styles from "./page.module.css";
import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
}
const Button: FC<ButtonProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
