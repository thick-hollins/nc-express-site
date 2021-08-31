import { Link } from "react-router-dom";
import Vote from "../buttons/Vote";

const ArticlePreview = ({ article }) => {
    return (
        <section>
            <Link to={'/articles/' + article.article_id}>
                <h3>{article.title}</h3>
            </Link>
            <Vote resource={ article }/>
        </section>
    );
};

export default ArticlePreview;