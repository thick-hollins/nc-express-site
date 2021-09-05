import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { getArticle, getComments, getUser, getArticles, getArticleLikes, getUsers } from "./api";

export const useQueryString = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
}

export const useArticle = (article_id, editingArticle) => {
    const [article, setArticle] = useState({})
    const [articleIsLoading, setArticleIsLoading] = useState(false)

    useEffect(() => {
        setArticleIsLoading(true)
        getArticle(article_id).then(article => {
          setArticle(article)
          setArticleIsLoading(false)
        })
      }, [article_id, editingArticle])  
    return { article, articleIsLoading }
}

export const useComments = (article_id, editingComment, queries, page, setTotal_count, setTotal_pages) => {
  const [comments, setComments] = useState([])
  const [commentsAreLoading, setCommentsAreLoading] = useState(false)

  useEffect(() => {      
    setCommentsAreLoading(true)
    queries.append('page', page)
    getComments(article_id, queries).then(({ comments, total_count, total_pages }) => {
      setComments(comments)
      setTotal_count(+total_count)
      setTotal_pages(+total_pages)
      setCommentsAreLoading(false)
    })
  }, [article_id, page, editingComment, setTotal_pages, setTotal_count])
  return { comments, commentsAreLoading, setComments }
}

export const useUser = (username) => {
  const [user, setUser] = useState([])
  const [userIsLoading, setUserIsLoading] = useState(false)
  useEffect(() => {
    setUserIsLoading(true)
    getUser(username).then((apiUser) => {
      setUser(apiUser);
      setUserIsLoading(false)
    });
  }, [username]);
  return { user, setUser, userIsLoading }
  
}

export const useArticles = (queries, sortBy, order, setTotal_count, setTotal_pages, page, setPage) => {
  const [articles, setArticles] = useState([])
  const [articlesAreLoading, setArticlesAreLoading] = useState(false)
  useEffect(() => {
    setArticlesAreLoading(true)
    if (sortBy) queries.append('sort_by', sortBy)
    if (order) queries.append('order', order)
    if (page) queries.append('page', page)
    getArticles(queries).then(({articles, total_count, total_pages, page}) => {
    setArticles(articles)
    if (setTotal_count) setTotal_count(+total_count)
    if (setTotal_pages) setTotal_pages(+total_pages)
    if (setPage) setPage(+page)
    setArticlesAreLoading(false)
  })
}, [sortBy, order, page, setTotal_count, setTotal_pages, setPage])
  return { articles, articlesAreLoading }
}

export const useArticleLikes = (username) => {
  const [ likes, setLikes ] = useState([])
  const [ likesAreLoading, setLikesAreLoading ] = useState(false)
  useEffect (() => {
    setLikesAreLoading(true)
    getArticleLikes(username).then(({ articles }) => {
      setLikes(articles);
      setLikesAreLoading(false)
    });
  }, [username])
  return { likes, likesAreLoading }
}

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
      getUsers().then(apiUsers => {
      setUsers(apiUsers)
      setIsLoading(false)
    })
  }, [])
  return { users, isLoading }
}