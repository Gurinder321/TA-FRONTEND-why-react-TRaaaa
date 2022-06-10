import data from '../data.json';
import PropTypes from 'prop-types';

function handleClick(author) {
  alert(`Hello ${author}, how are you?`);
}

function Articles() {
  return (
    <div className="container">
      <div className="grid">
        {data.map((info) => (
          <Article key={info.author} {...info} />
        ))}
      </div>
    </div>
  );
}
function Article(props) {
  return (
    <div className="wrapper ">
      <img src={props.urlToImage} alt="" width="380" />
      <div>
        <h2>{props.author}</h2>
        <h3>Title: {props.title}</h3>
        <p>{props.description}</p>
      </div>
      <button onClick={() => handleClick(props.author)}>
        <a href={props.url}>Read More!</a>
      </button>
    </div>
  );
}

Article.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  discription: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
};

export default Articles;
