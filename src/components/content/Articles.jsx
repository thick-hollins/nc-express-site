import { useState } from "react";
import ArticlePreview from "./ArticlePreview";
import PageButtons from "../buttons/PageButtons";
import { useQueryString, useArticles } from "../../utils/hooks";
import LoaderWrapper from "../buttons/LoaderWrapper";
import Sort from "./Sort";

const Articles = ({ sortBy, setSortBy, order, setOrder }) => {
  const queries = useQueryString();
  const topic = queries.get("topic");
  const [total_count, setTotal_count] = useState(0);
  const [total_pages, setTotal_pages] = useState(0);
  const [page, setPage] = useState(1);

  const { articles, articlesAreLoading } = useArticles(
    queries,
    sortBy,
    order,
    setTotal_count,
    setTotal_pages,
    page,
    setPage
  );

  if (articlesAreLoading) return <LoaderWrapper />;
  return (
    <>
      {topic && <h2 className="articles__topic-title">{topic}</h2>}
      {topic && <p className="article-count">{total_count} articles</p>}
      <Sort
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <ArticlePreview article={article} />
          </li>
        ))}
      </ul>
      <PageButtons page={page} setPage={setPage} total_pages={total_pages} />
    </>
  );
};

export default Articles;
