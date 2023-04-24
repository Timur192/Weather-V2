import { useGetNewsQuery } from "@/redux/services/news/news";
import { useState } from "react";
import { FloatButton } from "antd";
import { useTranslation } from "react-i18next";
import Skeleton from "../Skeleton/Skeleton";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./News.module.css";

export default function SecondSection() {
  const [size, setSize] = useState(5);
  const { data, error, isLoading } = useGetNewsQuery({ size: size });
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <h2>{t("News")}</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Skeleton />
      ) : data ? (
        <>
          {data?.articles.map((items) => (
            <div key={items.url}>
              <NewsCard data={items} />
            </div>
          ))}
        </>
      ) : null}
      <div className={styles.moreBTN}>
        <button onClick={() => setSize(10)}>
          {t("More_news")}
        </button>
      </div>
      <FloatButton.BackTop />
    </div>
  );
}
