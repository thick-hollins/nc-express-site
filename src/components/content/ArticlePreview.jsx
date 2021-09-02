import { Link } from "react-router-dom";
import Vote from "../buttons/Vote";

const ArticlePreview = ({ article, voteHistory, setVoteHistory, appUser }) => {
    const articleResource = {article_id: article.article_id, votes: article.votes}
    return (
        <section>
            <Link to={'/articles/' + article.article_id}>
                <h3>{article.title}</h3>
            </Link>
            { appUser !== article.author && <Vote resource={ articleResource } voteHistory={ voteHistory } setVoteHistory={ setVoteHistory }/> }
        </section>
    );
};

export default ArticlePreview;