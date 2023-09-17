import Image from "next/image";
import styles from "./page.module.css";
import { FC } from "react";
import { PostType } from "../../../../types";
import { Metadata } from "next";

interface IBlogIdProps {
  params: {
    id: string;
  };
}
async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // to cancel caching
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }: IBlogIdProps) {
  const post: PostType = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogId: FC<IBlogIdProps> = async ({ params }) => {
  const data: PostType = await getData(params.id);

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt="BlogId image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt={data.desc}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
