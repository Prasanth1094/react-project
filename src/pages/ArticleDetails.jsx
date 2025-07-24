import articles from '../data/articles';
import { useParams } from 'react-router-dom';
const ArticleDetails = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) return <div>Article not found.</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetails;
