import { useState, useEffect } from "react";
import { postArticle, getTopics } from "../../utils/api"
import { Link } from "react-router-dom";

const NewArticle = ({ topics, setTopics }) => {
    const [articleAdded, setArticleAdded] = useState(null)
    const [newTitle, setNewTitle] = useState('')
    const [newTopicInput, setNewTopicInput] = useState('')
    const [newText, setNewText] = useState('')

    useEffect(() => {
        getTopics().then(apiTopics => {
          setTopics(apiTopics)
        })
      }, [setTopics])

    const handleSubmit = (event) => {
        event.preventDefault();
        postArticle({
            title: newTitle,
            topic: newTopicInput,
            body: newText
        })
            .then((article) => {
            setArticleAdded(article.article_id);
            setNewTitle('')
            setNewTopicInput('')
            setNewText('')
            })
            .catch((err) => {
            setArticleAdded(false);
            });
    };
    if (articleAdded) {
        return (
        <div>
            <p>Article Added!</p>
            <Link to={`/articles/${articleAdded}`}>View your article</Link>
        </div>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>
                        Title
                        <input type='text' id='article-title' value={newTitle} onChange={event => {
                            setNewTitle(event.target.value)
                            }} required />
                    </label>
                </li>
                <li>
                    <label>
                        Topic
                        <select value ={newTopicInput} id="topic-select" onChange={event => {
                            setNewTopicInput(event.target.value)
                            }} required>
                            <option value="" defaultValue disabled hidden>Choose here</option>
                            {topics.map(topic => (
                                <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                            ))}
                        </select>
                    </label>
                </li>
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
            </ul>
        </form>
    );
};

export default NewArticle;