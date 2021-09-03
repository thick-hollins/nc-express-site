import Vote from '../buttons/Vote'
import DeleteEdit from '../buttons/DeleteEdit'
import { Link } from 'react-router-dom';

const Comment = ({ resource, voteHistory, setVoteHistory, setCommentChange, setEditingComment, appUser }) => {
    return (
        <>
            {resource.body}
            <p>by <Link to={`/users/${resource.author}`}>{resource.author}</Link> at</p>
            {appUser !== resource.author && <Vote resource={{comment_id: resource.comment_id, votes: resource.votes}} voteHistory={ voteHistory } setVoteHistory={ setVoteHistory } />}
            {appUser === resource.author && <DeleteEdit resource={{comment_id: resource.comment_id}} setCommentChange={setCommentChange} setEditingArticle={setEditingComment} setEditingComment={setEditingComment}/>}
        </>
    );
};

export default Comment;