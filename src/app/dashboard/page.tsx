"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { PostType } from "../../../types";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
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
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  
  console.log(data)

  return <div className={styles.container}>
  
  </div>;
};

export default Dashboard;
