"use client";
import { FC, FormEventHandler } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { PostType } from "../../../types";
import styles from "./page.module.css";

const Dashboard: FC = () => {
  // const [data, setData] = useState<PostType[]>([]);
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       // to cancel caching
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setIsError(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };

  //   getData();
  // }, []);

  const session = useSession();
  const router = useRouter();
  const username: string | null | undefined = session?.data?.user?.name;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    // "https://jsonplaceholder.typicode.com/posts",
    `/api/posts?username=${username}`,
    fetcher
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log("formData", formData);
    const title = formData.get("title");
    const desc = formData.get("desc");
    const img = formData.get("img");
    const content = formData.get("content");

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username,
        }),
      });
      mutate();

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (postId: number): Promise<void> => {
    try {
      await fetch(`api/posts/${postId}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {error && <p>Something went wrong</p>}

          {isLoading
            ? "Loading..."
            : data?.map((post: PostType) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            className={styles.input}
            type="text"
            name="desc"
            placeholder="Desc"
          />
          <input
            className={styles.input}
            type="text"
            name="img"
            placeholder="Image"
          />
          <textarea
            className={styles.textArea}
            name="content"
            cols={30}
            rows={10}
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
