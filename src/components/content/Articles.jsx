import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api"
import ArticlePreview from './ArticlePreview'
import { useQueryString } from "../../utils/hooks";

const Articles = ({ voteHistory, setVoteHistory, appUser, sortBy, setSortBy, order, setOrder }) => {
    const queries = useQueryString()
    const [articles, setArticles] = useState([])
    const topic = queries.get('topic')
    useEffect(() => {
        queries.append('sort_by', sortBy)
        queries.append('order', order)
        getArticles(queries).then(({articles, total_count, total_pages, page}) => {
        setArticles(articles)
      })
    }, [sortBy, order])

      return (
          <div>
            {topic && <h2>{topic}</h2>}
            <label>
              Sort By:
              <select value={sortBy} onChange={event => {
                            setSortBy(event.target.value)
                            }}>
                <option value='created_at'>Created at</option>
                <option value='comment_count'>Comment Count</option>
                <option value='votes'>Votes</option>
              </select>
            </label>
            <label>
              Order:
              <select value={order} onChange={event => {
                            setOrder(event.target.value)
                            }}>
                <option value='desc'>Descending</option>
                <option value='asc'>Ascending</option>
              </select>
            </label>
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