import { Link } from "react-router-dom";
import Vote from "../buttons/Vote";

const ArticlePreview = ({ article, voteHistory, setVoteHistory, appUser }) => {
    const articleResource = {article_id: article.article_id, votes: article.votes}
    return (
        <section>
            <Link to={'/articles/' + article.article_id}>
                <h3>{article.title}</h3>
            </Link>
            <p> by <Link to={`/users/${article.author}`}>{article.author}</Link></p>
            <p>{article.comment_count} comments</p>
            { appUser !== article.author && <Vote resource={ articleResource } voteHistory={ voteHistory } setVoteHistory={ setVoteHistory }/> }
        </section>
    );
};

export default ArticlePreview;