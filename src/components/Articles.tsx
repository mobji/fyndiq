import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./articles.module.css";
import { getArticles } from "../api/Articles";
import ArticleModal from "../modals/Article";
import { RawArticle } from "../types";
import Section from "./Section";

type ArticlesArray = Array<RawArticle>;

const Articles = () => {
  const [articles, setArticles] = useState<ArticlesArray>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const loadArticles = async () => {
    const data = await getArticles();

    setArticles(data.articles);
  };

  const setFilter = () => {
    if (!checked) {
      const filteredArticles = articles.filter(
        (article: RawArticle) => article.price.amount < 50
      );

      setArticles(filteredArticles);
    } else {
      loadArticles();
    }
    setChecked(!checked);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div className={styles.container}>
      <Section>
        <input id="filter" type="checkbox" onChange={() => setFilter()} />
        <label htmlFor="filter" className={styles.label}>
          Cheaper than 50sek
        </label>
      </Section>
      <div className={styles.articles}>
        {articles.length < 0 && <p>loading...</p>}
        {articles.length > 0 &&
          articles.map((article) => Card(new ArticleModal(article)))}
      </div>
    </div>
  );
};

export default Articles;
