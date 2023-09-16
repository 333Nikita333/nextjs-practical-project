import Button from "@/components/Button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";
import { CategoryDataItemType } from "../../../../types";
import { items } from "./data";
import styles from "./page.module.css";

interface ICategoryProps {
  params: {
    category: string;
  };
}
const getData = (cat: string): CategoryDataItemType[] | typeof notFound => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category: FC<ICategoryProps> = ({ params }) => {
  // console.log(params);
  const data = getData(params.category) as CategoryDataItemType[];

  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
