import Vote from "../buttons/Vote";
import DeleteEdit from "../buttons/DeleteEdit";
import { Link } from "react-router-dom";
import { AppUserContext } from "../../contexts";
import { useContext } from "react";
import { formatDate } from "../../utils/helpers";

const Comment = ({ resource, setComments, setEditingComment }) => {
  const { appUser } = useContext(AppUserContext);

  const { dateString, timeString } = formatDate(resource);

  return (
    <div className="comment__box">
      {resource.body}
      <p className="comment__by-at">
        by{" "}
        <Link to={`/users/${resource.author}`} className="blue-link">
          {resource.author}
        </Link>{" "}
        at {timeString} on {dateString}
      </p>
      {appUser !== resource.author && (
        <Vote
          resource={{ comment_id: resource.comment_id, votes: resource.votes }}
        />
      )}
      <div className="comment__by-author-box">
        <div>
          {appUser === resource.author && (
            <DeleteEdit
              resource={{ comment_id: resource.comment_id }}
              setComments={setComments}
              setEditingArticle={setEditingComment}
              setEditingComment={setEditingComment}
            />
          )}
        </div>
        {appUser === resource.author && (
          <div className="vote-display">
            {resource.votes} {resource.votes === 1 ? "vote" : "votes"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
