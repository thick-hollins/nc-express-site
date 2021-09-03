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
                <label>
                    Text
                    <textarea id='comment-text' value={newCommentText} onChange={event => {
                        setNewCommentText(event.target.value)
                        }} required />
                </label>
            </li>
            <li>
                <button type='submit'>Submit</button>
            </li>
            <li>
                <button onClick={() => setEditingComment(false)}>Cancel</button>
            </li>
        </ul>
    </form>
    );
};

export default EditComment;