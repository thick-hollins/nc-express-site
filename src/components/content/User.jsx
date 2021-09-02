import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, getArticles, getArticleLikes } from "../../utils/api";
import ArticlePreview from "./ArticlePreview";

const User = ({ voteHistory, setVoteHistory, appUser }) => {
    const { username } = useParams()
    const [user, setUser] = useState([])
    const [articles, setArticles] = useState([])
    const [likes, setLikes] = useState([])

    useEffect(() => {
      getUser(username).then(apiUser => {
        setUser(apiUser)
      })
      getArticles(new URLSearchParams({'author': username})).then(({ articles }) => {
        setArticles(articles)
      })
      getArticleLikes(username).then(({ articles }) => {
        setLikes(articles)
      })
    }, [username])

    return (
        <div>
            <h3>{user.username}</h3>
            <p>{user.name}</p>
            <img src={user.avatar_url} alt='' />
            { articles.length !== 0 && <h4>Articles by this user:</h4> }
            <ul>
              {articles.map(article => (
                <li key={article.article_id}>
                  <ArticlePreview article={article} voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} />
                </li>
              ))}
            </ul>
            {likes.length !== 0 && <h4>Liked articles:</h4>}
            <ul>
              {likes.map(like => (
                <li key={like.article_id}>
                  <ArticlePreview article={like} voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} />
                </li>
              ))}
            </ul>
        </div>
    );
};

export default User;