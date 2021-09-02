import { useState } from "react";
import { Link } from "react-router-dom";
import { postTopic } from "../../utils/api"

const NewTopic = () => {

    const [newSlug, setNewSlug] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [topicAdded, setTopicAdded] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        postTopic({
            slug: newSlug,
            description: newDescription
        })
            .then(() => {
            setTopicAdded(true);
            })
            .catch((err) => {
            setTopicAdded(false)
            });
    };
    if (topicAdded) {
        return (
        <>
            <p>Topic Added!</p>
            <Link to={`/articles/write`}>Write an article</Link>
        </>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label>
                    Topic Name
                    <input type='text' id='topic-slug' value={newSlug} onChange={event => {
                        setNewSlug(event.target.value)
                        }} required />
                </label>
            </li>
            <li>
                <label>
                    Description
                    <input type='text' id='topic-description' value={newDescription} onChange={event => {
                        setNewDescription(event.target.value)
                        }} required />
                </label>
            </li>
            <li>
                <button type='submit'>Submit</button>
            </li>
        </ul>
    </form>
    );
};

export default NewTopic;