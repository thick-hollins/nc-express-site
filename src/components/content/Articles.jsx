import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api"
import ArticlePreview from './ArticlePreview'
import { useQueryString } from "../../utils/hooks";

const Articles = ({ voteHistory, setVoteHistory, appUser }) => {
    const queries = useQueryString()
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles(queries).then(({articles, total_count, total_pages, page}) => {
        setArticles(articles)
      })
    }, [])

      return (
          <div>
            <ul>
              {articles.map(article => (
                <li key={article.article_id}>
                  <ArticlePreview article={article} voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser}/>
                </li>
              ))}
            </ul>
          </div>
      )
}

export default Articles;