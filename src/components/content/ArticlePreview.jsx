import { Link } from "react-router-dom";
import Vote from "../buttons/Vote";

const ArticlePreview = ({ article, voteHistory, setVoteHistory, appUser }) => {
  const articleResource = {
    article_id: article.article_id,
    votes: article.votes,
  };
  const date = new Date(article.created_at);
  const dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeString = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sentences = article.body.split(".");
  const preview = sentences.length > 1 ? sentences[0] + "..." : sentences[0];
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
            voteHistory={voteHistory}
            setVoteHistory={setVoteHistory}
          />
        )}
        {appUser === article.author && <div className='vote-display'>{article.votes} {article.votes === 1 ? 'vote' : 'votes'}</div>}

      </div>
    </section>
  );
};

export default ArticlePreview;
