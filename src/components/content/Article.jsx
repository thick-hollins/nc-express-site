import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { postComment, patchArticleText } from "../../utils/api";
import Vote from "../buttons/Vote";
import DeleteEdit from "../buttons/DeleteEdit";
import Comment from "./Comment";
import EditComment from "./EditComment";
import PageButtons from "../buttons/PageButtons";
import LoaderWrapper from "../buttons/LoaderWrapper";
import { useQueryString, useArticle, useComments } from "../../utils/hooks";
import { AppUserContext } from "../../contexts";
import { formatDate } from "../../utils/helpers";
import NotFound from './NotFound'

const Article = () => {
  const { appUser } = useContext(AppUserContext);
  const { article_id } = useParams();
  const [newBody, setNewBody] = useState("");
  const [editingArticle, setEditingArticle] = useState(false);
  const [editingComment, setEditingComment] = useState(-1);
  const [newText, setNewText] = useState("");
  const [total_count, setTotal_count] = useState(0);
  const [total_pages, setTotal_pages] = useState(0);
  const [page, setPage] = useState(1);
  const [postCommentLoading, setPostCommentLoading] = useState(false);

  const queries = useQueryString();

  const { article, articleIsLoading, articleNotFound } = useArticle(article_id, editingArticle);
  const { comments, commentsAreLoading, setComments } = useComments(
    article_id,
    editingComment,
    queries,
    page,
    setTotal_count,
    setTotal_pages
  );

  useEffect(() => {
    setNewText(article.body);
  }, [editingArticle, article.body]);
  const { dateString, timeString } = formatDate(article);

  const handleSubmitNewComment = (event) => {
    event.preventDefault();
    setPostCommentLoading(true);
    postComment({ body: newBody }, article_id)
      .then((newComment) => {
        setPostCommentLoading(false);
        setNewBody("");
        setComments((current) => current.concat(newComment));
      })
      .catch((err) => {});
  };

  const handleSubmitEditArticle = (event) => {
    event.preventDefault();
    setPostCommentLoading(true);
    patchArticleText({ body: newText }, article_id)
      .then(() => {
        setEditingArticle(false);
        setPostCommentLoading(false);
      })
      .catch((err) => {});
  };

  if (editingArticle) {
    return (
      <form onSubmit={handleSubmitEditArticle}>
        <ul>
          <li>
            <label>
              Text
              <textarea
                id="article-text"
                value={newText}
                onChange={(event) => {
                  setNewText(event.target.value);
                }}
                required
              />
            </label>
          </li>
          <li>
            <button type="submit" className="white-button">
              Submit
            </button>
          </li>
          <li>
            <button
              className="white-button"
              onClick={() => setEditingArticle(false)}
            >
              Cancel
            </button>
          </li>
        </ul>
      </form>
    );
  }
  const articleResource = {
    article_id: article.article_id,
    votes: article.votes,
  };
  if (articleNotFound) {
    return <NotFound />
  }
  
  if (articleIsLoading || commentsAreLoading || postCommentLoading) {
    return <LoaderWrapper />;
  }
  

  return (
    <article>
      <h2 className="article__title">{article.title}</h2>
      {appUser !== article.author && <Vote resource={articleResource} />}
      {appUser === article.author && (
        <div className="vote-display">
          {article.votes} {article.votes === 1 ? "vote" : "votes"}
        </div>
      )}
      <section className="article__body-box">{article.body}</section>
      <p>
        by{" "}
        <Link className="blue-link" to={`/users/${article.author}`}>
          {article.author}
        </Link>{" "}
        in{" "}
        <Link className="blue-link" to={`/articles?topic=${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p>
        at {timeString} on {dateString}
      </p>
      {appUser === article.author && (
        <DeleteEdit
          resource={articleResource}
          setEditingArticle={setEditingArticle}
        />
      )}
      <h4>Comments ({total_count}):</h4>
      {editingComment === -1 && (
        <form onSubmit={handleSubmitNewComment}>
          <ul>
            <li>
              <textarea
                className="article__comment-field"
                value={newBody}
                onChange={(event) => {
                  setNewBody(event.target.value);
                }}
                required
              />
            </li>
            <li>
              <button type="submit" className="white-button">
                Add a comment
              </button>
            </li>
          </ul>
        </form>
      )}
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            {comment.comment_id === editingComment ? (
              <EditComment
                comment={comment}
                setEditingComment={setEditingComment}
              />
            ) : (
              <Comment
                resource={comment}
                setComments={setComments}
                setEditingComment={setEditingComment}
              />
            )}
          </li>
        ))}
      </ul>
      {total_count > 0 && (
        <PageButtons page={page} setPage={setPage} total_pages={total_pages} />
      )}
    </article>
  );
};

export default Article;
