import Vote from "../buttons/Vote";
import DeleteEdit from "../buttons/DeleteEdit";
import { Link } from "react-router-dom";

const Comment = ({
  resource,
  voteHistory,
  setVoteHistory,
  setCommentChange,
  setEditingComment,
  appUser,
}) => {
  const date = new Date(resource.created_at);
  const dateString = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeString = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="comment-block">
      {resource.body}
      <p className='comment-info'>
        by <Link to={`/users/${resource.author}`} className='blue-link'>{resource.author}</Link> at {timeString} on {dateString}
      </p>
      {appUser !== resource.author && (
        <Vote
          resource={{ comment_id: resource.comment_id, votes: resource.votes }}
          voteHistory={voteHistory}
          setVoteHistory={setVoteHistory}
        />
      )}
      <div className='own-comment'>
      {appUser === resource.author && (
        <DeleteEdit
        resource={{ comment_id: resource.comment_id }}
        setCommentChange={setCommentChange}
        setEditingArticle={setEditingComment}
        setEditingComment={setEditingComment}
        />
        )}
        {appUser === resource.author && <div className='vote-display'>{resource.votes} {resource.votes === 1 ? 'vote' : 'votes'}</div>}
      </div>
    </div>
  );
};

export default Comment;
