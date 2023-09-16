import Image from "next/image";
import styles from "./page.module.css";

const BlogId = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>BlogId description</p>
          <div className={styles.author}>
            <Image
              src={}
              alt="BlogId image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>UserName</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p>Content text</p>
      </div>
    </div>
  );
};

export default BlogId;
