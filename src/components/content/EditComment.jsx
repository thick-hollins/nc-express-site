import { useState } from "react";
import { patchCommentText } from "../../utils/api";

const EditComment = ({ comment, setEditingComment, setCommentChange }) => {
    const [newCommentText, setNewCommentText] = useState(comment.body)
    const handleSubmitEditArticle = (event) => {
        event.preventDefault();
        patchCommentText({ body: newCommentText }, comment.comment_id)
        .then(() => {
            setEditingComment(-1)
            setCommentChange(newCommentText)}
        )
            .catch((err) => {
            });
      }
    return (
        <form onSubmit={handleSubmitEditArticle}>
        <ul>
            <li>
                <p>Edit your comment:</p>
            <textarea id='comment-text' value={newCommentText} onChange={event => {
                        setNewCommentText(event.target.value)
                        }} required />
            </li>
            <li>
                <button className='white-button' type='submit'>Submit</button>                 <button className='white-button' onClick={() => setEditingComment}>Cancel</button>

            </li>
        </ul>
    </form>
    );
};

export default EditComment;