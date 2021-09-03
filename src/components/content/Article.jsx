import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments, postComment, getArticle, patchArticleText } from "../../utils/api"
import Vote from '../buttons/Vote'
import DeleteEdit from '../buttons/DeleteEdit'
import Comment from './Comment'
import EditComment from "./EditComment";
import PageButtons from "../buttons/PageButtons";
import Loader from "react-loader-spinner"
import { useQueryString } from "../../utils/hooks"

const Article = ({ voteHistory, setVoteHistory, appUser }) => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [newBody, setNewBody] = useState('')
    const [commentChange, setCommentChange] = useState('')
    const [editingArticle, setEditingArticle] = useState(false)
    const [editingComment, setEditingComment] = useState(-1)
    const [newText, setNewText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [total_count, setTotal_count] = useState(0)
    const [total_pages, setTotal_pages] = useState(0)
    const [page, setPage] = useState(1)

    const queries = useQueryString()

    useEffect(() => {
      setIsLoading(true)
      getArticle(article_id).then(article => {
        setArticle(article)
        setNewText(article.body)
        setIsLoading(false)
      })
    }, [article_id, editingArticle])
    
    useEffect(() => {      
      setIsLoading(true)
      queries.append('page', page)
      getComments(article_id, queries).then(({ comments, total_count, total_pages }) => {
        setComments(comments)
        setTotal_count(+total_count)
        setTotal_pages(+total_pages)
        setIsLoading(false)
      })
    }, [article_id, commentChange, page])

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
                    <button onClick={()=> setEditingArticle(false)}>Cancel</button>
                </li>
            </ul>
        </form>
      )
    }
    const articleResource = {article_id: article.article_id, votes: article.votes}
    if(isLoading) return (
      <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
    )
    return (
        <article>
            <h2>{article.title}</h2>
            {appUser !== article.author && <Vote resource={articleResource} voteHistory={ voteHistory } setVoteHistory={ setVoteHistory } /> }
            {article.body}
            {appUser === article.author && <DeleteEdit resource={articleResource} setEditingArticle={setEditingArticle} />}
            <h4>Comments ({total_count}):</h4>
            {editingComment === -1 && <form onSubmit={handleSubmitNewComment}>
              <label>
                  Text
                  <textarea id='comment-body' value={newBody} onChange={event => {
                      setNewBody(event.target.value)
                      }} required />
              </label>
              <button type='submit'>Submit</button>
          </form> }
            <ul>
              {comments.map(comment => (
                <li key={comment.comment_id}>
                  {comment.comment_id === editingComment ? <EditComment comment={comment} setEditingComment={setEditingComment} setCommentChange={setCommentChange}/> : <Comment resource={comment} voteHistory={ voteHistory } setVoteHistory={ setVoteHistory } setCommentChange={setCommentChange} setEditingComment={setEditingComment} appUser={appUser}/>}
                </li>
              ))}
            </ul>
            {total_count > 0 && <PageButtons page={page} setPage={setPage} total_pages={total_pages}/> }
        </article>
    );
};

export default Article;