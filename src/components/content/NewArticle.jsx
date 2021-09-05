import { useState, useEffect } from "react";
import { postArticle, getTopics } from "../../utils/api"
import { Link } from "react-router-dom";
import LoaderWrapper from "../buttons/LoaderWrapper";

const NewArticle = ({ topics, setTopics }) => {
    const [articleAdded, setArticleAdded] = useState(null)
    const [newTitle, setNewTitle] = useState('')
    const [newTopicInput, setNewTopicInput] = useState('')
    const [newText, setNewText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getTopics().then(apiTopics => {
          setTopics(apiTopics)
        })
      }, [setTopics])

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)

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
            setIsLoading(false)
            })
            .catch((err) => {
            setArticleAdded(false);
            });
    };
    if (isLoading) {
        <LoaderWrapper />
    }
    if (articleAdded) {
        return (
        <div>
            <p>Article Added!</p>
            <Link to={`/articles/${articleAdded}`}><button className='white-button'>View your article</button></Link>
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
                    <Link to='/topics/new'><button className='white-button'>Add a new topic</button></Link>
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
                    <button type='submit' className='white-button'>Submit</button>
                </li>
            </ul>
        </form>
    );
};

export default NewArticle;