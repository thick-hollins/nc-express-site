import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments, postComment, getArticle } from "../../utils/api"
import Vote from '../buttons/Vote'

const Article = ({ appUser }) => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [newBody, setNewBody] = useState('')
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
      getArticle(article_id).then(apiArticle => {
        setArticle(apiArticle)
      })
    }, [])
    
    useEffect(() => {      
      getComments(article_id).then(apiComments => {
        setComments(apiComments)
      })
    }, [])

    const handleSubmit = (event) => {
      event.preventDefault();
      postComment({ body: newBody }, article_id)
          .then(comment => setNewComment(comment))
          .catch((err) => {
          });
      setNewBody('')
    }

    return (
        <article>
            <h2>{article.title}</h2>
            <Vote resource={article}/>
            {article.body}
            <h4>Comments:</h4>
            <ul>
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  {comment.body}
                  <Vote resource={comment} />
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <label>
                  Text
                  <textarea id='comment-body' value={newBody} onChange={event => {
                      setNewBody(event.target.value)
                      }} required />
              </label>
              <button type='submit'>Submit</button>
        </form>
        </article>
    );
};

export default Article;