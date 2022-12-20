import React, { useState, useEffect } from "react";
import { getArticles } from "../api/Articles";
import { Article } from "../types";

type ArticlesArray = Array<Article>;

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticlesArray>([]);

  const loadArticles = async () => {
    const data = await getArticles();

    setArticles(data.articles);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  console.log(articles);

  return <div>{articles.length < 0 && <p>loading...</p>}</div>;
};

export default Articles;
