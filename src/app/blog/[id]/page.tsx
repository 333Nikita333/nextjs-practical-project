import Image from "next/image";
import styles from "./page.module.css";
import { FC } from "react";
import { PostType } from "../../../../types";

interface IBlogIdProps {
  params: {
    id: string;
  };
}
async function getData(blogId: string) {
  // const res = await fetch("http://localhost:3000/api/posts", {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`,
    {
      // to cancel caching
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogId: FC<IBlogIdProps> = async ({ params }) => {
  const data: PostType = await getData(params.id);

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            {/* <Image
              src={}
              alt="BlogId image"
              width={40}
              height={40}
              className={styles.avatar}
            /> */}
            <span>UserName</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {/* <Image 
          src={} 
          alt="" 
          fill={true} 
          className={styles.image} /> */}
        </div>
      </div>
      <div className={styles.content}>
        <p>Content text</p>
      </div>
    </div>
  );
};

export default BlogId;
