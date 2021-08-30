import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../../utils/api";
import { getComments } from "../../utils/api"

const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
      getArticle(article_id).then(apiArticle => {
        setArticle(apiArticle)
      })
      getComments(article_id).then(apiComments => {
        setComments(apiComments)
      })
    }, [article_id])

    return (
        <article>
            <h2>{article.title}</h2>
            {article.body}
            <h4>Comments:</h4>
            <ul>
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  {comment.body}
                </li>
              ))}
            </ul>
        </article>
    );
};

export default Article;