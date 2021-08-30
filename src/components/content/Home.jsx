import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api"

const Home = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles().then(apiArticles => {
      setArticles(apiArticles)
    })
  }, [])
    return (
        <div>
          <ul>
            {articles.map(article => (
              <li>test</li>
            ))}
          </ul>
        </div>
    );
};

export default Home;