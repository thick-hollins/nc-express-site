import { getTopics } from "../../utils/api"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Topics = ({ topics, setTopics }) => {
    useEffect(() => {
      getTopics().then(apiTopics => {
        setTopics(apiTopics)
      })
    }, [setTopics])
    return (
        <div>
          <Link to='/topics/new'>Add a new topic</Link>
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