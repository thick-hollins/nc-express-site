import { Link } from "react-router-dom";
import Vote from "../buttons/Vote";

const ArticlePreview = ({ article, voteHistory, setVoteHistory, appUser }) => {
    const articleResource = {article_id: article.article_id, votes: article.votes}
    const date = new Date(article.created_at)
    const dateString = date.toLocaleDateString('en-GB', {day: '2-digit', month: 'long', year: 'numeric'}) 
    const timeString = date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'})
 
    return (
        <section>
            <Link to={'/articles/' + article.article_id}>
                <h3>{article.title}</h3>
            </Link>
            <p> by <Link to={`/users/${article.author}`}>{article.author}</Link> at {timeString} - {dateString}</p>
            {article.comment_count === 1 && <p>{article.comment_count} comment</p>}
            {article.comment_count !== 1 && <p>{article.comment_count} comments</p>}
            { appUser !== article.author && <Vote resource={ articleResource } voteHistory={ voteHistory } setVoteHistory={ setVoteHistory }/> }
        </section>
    );
};

export default ArticlePreview;