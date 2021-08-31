import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api"
import ArticlePreview from './ArticlePreview'
import { useQueryString } from "../../utils/hooks";

const Articles = () => {
    const queries = useQueryString()
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles(queries).then(apiArticles => {
        setArticles(apiArticles)
      })
    }, [])

      return (
          <div>
            <ul>
              {articles.map(article => (
                <li key={article.article_id}>
                  <ArticlePreview article={article} />
                </li>
              ))}
            </ul>
          </div>
      )
}

export default Articles;