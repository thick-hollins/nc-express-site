import { deleteComment, deleteArticle } from '../../utils/api'
import { useHistory } from "react-router-dom";

const DeleteEdit = ({ resource, setComments, setEditingArticle, setEditingComment }) => {
    let history = useHistory();
    const handleDelete = (e) => {
        e.preventDefault()
        if (resource.comment_id) {
            deleteComment(resource.comment_id).then(() => {
                setComments(current => {
                    return current.filter(comment => comment.comment_id !== resource.comment_id)
                })
            })
        } else {
            deleteArticle(resource.article_id)
            history.goBack()
        }
    }
    const handleEdit = (e) => {
        e.preventDefault()
        if (resource.comment_id) setEditingComment(resource.comment_id)
        else setEditingArticle(true)
    }
    return (
        <>
        <button className='white-button' onClick={handleDelete}>Delete</button>
        <button className='white-button' onClick={handleEdit}>Edit</button>
        </>
    );
};

export default DeleteEdit