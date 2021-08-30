import { Link } from "react-router-dom";

const ArticlePreview = ({ article }) => {
    return (
        <section>
            <Link to={'articles/' + article.article_id}>
                <h3>{article.title}</h3>
            </Link>
        </section>
    );
};

export default ArticlePreview;