import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments, postComment, getArticle, patchArticleText } from "../../utils/api"
import Vote from '../buttons/Vote'
import DeleteEdit from '../buttons/DeleteEdit'

const Article = ({ voteHistory, setVoteHistory, appUser }) => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [newBody, setNewBody] = useState('')
    const [commentChange, setCommentChange] = useState('')
    const [editingArticle, setEditingArticle] = useState(false)
    const [newText, setNewText] = useState('')


    useEffect(() => {
      getArticle(article_id).then(article => {
        setArticle(article)
        setNewText(article.body)
      })
    }, [article_id, commentChange, editingArticle])
    
    useEffect(() => {      
      getComments(article_id).then(apiComments => {
        setComments(apiComments)
      })
    }, [article_id, commentChange])

    const handleSubmitNewComment = (event) => {
      event.preventDefault();
      postComment({ body: newBody }, article_id)
      .then(() => setCommentChange(newBody))
          .catch((err) => {
          });
      setNewBody('')
    }

    const handleSubmitEditArticle = (event) => {
      event.preventDefault();
      patchArticleText({ body: newText }, article_id)
      .then(() => setEditingArticle(false))
          .catch((err) => {
          });
    }

    if (editingArticle) {
      return (
        <form onSubmit={handleSubmitEditArticle}>
            <ul>
                <li>
                    <label>
                        Text
                        <textarea id='article-text' value={newText} onChange={event => {
                            setNewText(event.target.value)
                            }} required />
                    </label>
                </li>
                <li>
                    <button type='submit'>Submit</button>
                </li>
                <li>
                    <button type='submit'>Cancel</button>
                </li>
            </ul>
        </form>
      )
    }
    const articleResource = {article_id: article.article_id, votes: article.votes}
    return (
        <article>
            <h2>{article.title}</h2>
            {appUser !== article.author && <Vote resource={articleResource} voteHistory={ voteHistory } setVoteHistory={ setVoteHistory } /> }
            {article.body}
            {appUser === article.author && <DeleteEdit resource={articleResource} setEditingArticle={setEditingArticle} />}
            <h4>Comments:</h4>
            <form onSubmit={handleSubmitNewComment}>
              <label>
                  Text
                  <textarea id='comment-body' value={newBody} onChange={event => {
                      setNewBody(event.target.value)
                      }} required />
              </label>
              <button type='submit'>Submit</button>
          </form>
            <ul>
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  {comment.body}
                  {appUser !== comment.author && <Vote resource={{comment_id: comment.comment_id, votes: comment.votes}} voteHistory={ voteHistory } setVoteHistory={ setVoteHistory } />}
                  {appUser === comment.author && <DeleteEdit resource={{comment_id: comment.comment_id}} setCommentChange={setCommentChange}/>}
                </li>
              ))}
            </ul>
        </article>
    );
};

export default Article;