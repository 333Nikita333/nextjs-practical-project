import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./page.module.css";

const DarkModeToggle = () => {
  //   const mode = "dark";
  const { handleToggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={handleToggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
