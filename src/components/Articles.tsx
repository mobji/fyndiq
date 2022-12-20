import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./articles.module.css";
import { getArticles } from "../api/Articles";
import ArticleModal from "../modals/Article";
import { RawArticle } from "../types";

type ArticlesArray = Array<RawArticle>;

const Articles = () => {
  const [articles, setArticles] = useState<ArticlesArray>([]);

  const loadArticles = async () => {
    const data = await getArticles();

    setArticles(data.articles);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.articles}>
        {articles.length < 0 && <p>loading...</p>}
        {articles.length > 0 &&
          articles.map((article) => Card(new ArticleModal(article)))}
      </div>
    </div>
  );
};

export default Articles;
