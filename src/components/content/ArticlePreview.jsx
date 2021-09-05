import { useContext } from "react";
import { Link } from "react-router-dom";
import Vote from "../buttons/Vote";
import { AppUserContext } from "../../contexts";
import { formatDate } from "../../utils/helpers";

const ArticlePreview = ({ article }) => {
  const { appUser } = useContext(AppUserContext)

  const articleResource = {
    article_id: article.article_id,
    votes: article.votes,
  };
  
  const {dateString, timeString} = formatDate(article)

  const sentences = article.body.split(".");
  const preview = sentences.length > 2 ? sentences[0] + "..." : sentences[0];
  return (
    <section className="article-preview">
      <Link to={"/articles/" + article.article_id}>
        <h3 className="article-title">{article.title}</h3>
      </Link>
      <p className="preview-text">"{preview}"</p>
      <div className="by-at">
        <span className="author-category">
          by{" "}
          <Link className="blue-link" to={`/users/${article.author}`}>
            {article.author}
          </Link> in <Link className="blue-link" to={`/articles?topic=${article.topic}`}>
            {article.topic}
          </Link>
        </span>
        <span className="time">
          at {timeString} on {dateString}
        </span>
      </div>
      <div className="vote-commentcount">
        <span>
          {article.comment_count} {article.comment_count === 1 ? "comment" : "comments"}
        </span>
        {appUser !== article.author && (
          <Vote
            resource={articleResource}
          />
        )}
        {appUser === article.author && <div className='vote-display'>{article.votes} {article.votes === 1 ? 'vote' : 'votes'}</div>}

      </div>
    </section>
  );
};

export default ArticlePreview;
