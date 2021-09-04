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
        <>
          <Link to='/topics/new'><button className='add-topic'>Add a new topic</button></Link>
            <ul>
            {topics.map(topic => (
              <li key={topic.slug}>
                <Link to={`/articles?topic=${topic.slug}`}>
                  <h4 className='slug'>{topic.slug}</h4>
                </Link>
                  <p className='topic-description'>{topic.description}</p>
              </li>
            ))}
          </ul>
        </>
    );
};

export default Topics;