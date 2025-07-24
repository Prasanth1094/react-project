import articles from "../data/articles";
import { Link } from "react-router-dom";

const ArticleList = () => (
  <div>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ArticleList;
