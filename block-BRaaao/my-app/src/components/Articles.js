import Article from './Article';
import allArticles from '../data/articles';

function Articles() {
  return (
    <section className="articles" id="articles">
      <ul>
        {allArticles.map((article) => (
          <Article key={article.publishedAt} articleInfo={article} />
        ))}
      </ul>
    </section>
  );
}

export default Articles;
