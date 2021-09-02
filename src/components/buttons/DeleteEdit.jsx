import { deleteComment } from '../../utils/api'
import { deleteArticle } from '../../utils/api'
import { useHistory } from "react-router-dom";

const DeleteEdit = ({ resource, setCommentChange, setEditingArticle }) => {
    let history = useHistory();
    const handleDelete = (e) => {
        e.preventDefault()
        if (resource.comment_id) {
            deleteComment(resource.comment_id).then(() => {
                setCommentChange(resource.comment_id)
            })
        } else {
            deleteArticle(resource.article_id)
            history.goBack()
        }
    }
    const handleEdit = (e) => {
        e.preventDefault()
        setEditingArticle(true)
    }
    return (
        <>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
        </>
    );
};

export default DeleteEdit