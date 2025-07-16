import React, { useState, useEffect } from "react";

const Articles = ({ articles: initialArticles }) => {
  const [articles, setArticles] = useState(
    initialArticles || (typeof window !== 'undefined' && window.preloadedArticles ? window.preloadedArticles : [])
  );
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.preloadedArticles) {
      console.log(
        " If preloaded articles are not available, fetch from the server"
      );
      // If preloaded articles are not available, fetch from the server
      // Fetch articles from the server if not preloaded
      fetch("/api/articles")
        .then((response) => response.json())
        .then((data) => setArticles(data))
        .catch((error) => console.error("Error fetching articles:", error));
    }
  }, []);

  return (
    <>
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
    </>
  );
};

export default Articles;
