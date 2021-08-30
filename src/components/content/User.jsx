import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import { getUser } from "../../utils/api";
import { getLikes } from '../../utils/api'
import ArticlePreview from "./ArticlePreview";

const User = () => {
    const { username } = useParams()
    const [user, setUser] = useState([])
    const [articles, setArticles] = useState([])
    const [likes, setLikes] = useState([])
    useEffect(() => {
      getUser(username).then(apiUser => {
        setUser(apiUser)
      })
      getArticles(new URLSearchParams({'author': username})).then(apiArticles => {
        setArticles(apiArticles)
      })
      getLikes(username).then(apiLikes => {
        setLikes(apiLikes)
      })
    }, [username])

    return (
        <div>
            <h3>{user.username}</h3>
            <p>{user.name}</p>
            <img src={user.avatar_url} />
            <h4>Articles by this user:</h4>
            <ul>
              {articles.map(article => (
                <li key={article.article_id}>
                  <ArticlePreview article={article} />
                </li>
              ))}
            </ul>
            <h4>Liked articles:</h4>
            <ul>
              {likes.map(like => (
                <li key={like.article_id}>
                  <ArticlePreview article={like} />
                </li>
              ))}
            </ul>
        </div>
    );
};

export default User;