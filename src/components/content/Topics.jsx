import { getTopics } from "../../utils/api"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
      getTopics().then(apiTopics => {
        setTopics(apiTopics)
      })
    }, [])
    return (
        <div>
          <p>Add a new topic</p>
            <ul>
            {topics.map(topic => (
              <li key={topic.slug}>
                <Link to={`/articles?topic=${topic.slug}`}>
                  <h4>{topic.slug}</h4>
                </Link>
                  <p>{topic.description}</p>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default Topics;