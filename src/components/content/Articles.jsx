import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api"
import ArticlePreview from './ArticlePreview'
import PageButtons from '../buttons/PageButtons'
import { useQueryString } from "../../utils/hooks"
import Loader from "react-loader-spinner"
import Sort from "./Sort";

const Articles = ({ voteHistory, setVoteHistory, appUser, sortBy, setSortBy, order, setOrder }) => {
    const queries = useQueryString()
    const [articles, setArticles] = useState([])
    const topic = queries.get('topic')
    const [total_count, setTotal_count] = useState(0)
    const [total_pages, setTotal_pages] = useState(0)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        queries.append('sort_by', sortBy)
        queries.append('order', order)
        queries.append('page', page)
        getArticles(queries).then(({articles, total_count, total_pages, page}) => {
        setArticles(articles)
        setTotal_count(+total_count)
        setTotal_pages(+total_pages)
        setPage(+page)
        setIsLoading(false)
      })
    }, [sortBy, order, page])

      if(isLoading) return (
        <div className='loading-container'>
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
      )
      return (
          <>
            {topic && <h2 className='topic-title'>{topic}</h2>}
            {topic && <p className='article-count'>{total_count} articles</p>}
            <Sort sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
            <ul>
              {articles.map(article => (
                <li key={article.article_id}>
                  <ArticlePreview article={article} voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser}/>
                </li>
              ))}
            </ul>
            <PageButtons page={page} setPage={setPage} total_pages={total_pages}/>
          </>
      )
}

export default Articles;

