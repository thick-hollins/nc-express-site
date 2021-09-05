import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import ArticlePreview from "./ArticlePreview";
import UserPreview from "./UserPreview";
import { AppUserContext } from "../../contexts";
import { useUser, useArticleLikes, useArticles } from "../../utils/hooks";
import LoaderWrapper from "../buttons/LoaderWrapper";

const User = () => {
  const { appUser } = useContext(AppUserContext)

  const { username } = useParams();
  const { articles, articlesAreLoading } = useArticles(new URLSearchParams({author: username}))
  const { user, userIsLoading } = useUser(username)
  const { likes, articleLikesAreLoading } = useArticleLikes(username)

  if(articlesAreLoading || userIsLoading || articleLikesAreLoading) return (
    <LoaderWrapper />
  )
  return (
    <div>
      <UserPreview user={user} />
      {user.username === appUser && <Link to='/account'><button className='white-button'>Edit my profile</button></Link>}
      {articles.length !== 0 && <h4>{articles.length} articles by this user:</h4>}
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <ArticlePreview
              article={article}
            />
          </li>
        ))}
      </ul>
      {likes.length !== 0 && <h4>{likes.length} liked articles:</h4>}
      <ul>
        {likes.map((like) => (
          <li key={like.article_id}>
            <ArticlePreview
              article={like}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
