import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <Link href="blog/test" className={styles.container} key="2">
        <div>
          <Image
            src={}
            alt="blog image"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      
      <Link href="blog/test2" className={styles.container} key="2">
        <div>
          <Image
            src={}
            alt="blog image"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
