import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { PostType } from "../../../types";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // to cancel caching
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data: PostType[] = await getData();

  return (
    <div>
      {!data ? (
        <p>No posts</p>
      ) : (
        data.map((item) => (
          <Link
            href={`blog/${item._id}`}
            className={styles.container}
            key={item._id}
          >
            <div>
              <Image
                src={item.img}
                alt="blog image"
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Blog;
