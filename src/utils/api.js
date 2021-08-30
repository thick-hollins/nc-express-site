import axios from "../axiosConfig"

export const getArticles = (queries) => {
    const queryObject = Object.fromEntries(queries.entries())
    return axios.get('/articles', { params: queryObject }).then(({ data: { articles } })  => articles)
}

export const getArticle = (article_id) => {
    return axios.get(`/articles/${article_id}`).then(({ data: { article } })  => article)
}

export const getComments = (article_id) => {
    return axios.get(`/articles/${article_id}/comments`).then(({ data: { comments } })  => comments)
}

export const getTopics = () => {
    return axios.get(`/topics`).then(({ data: { topics } })  => topics)
}

export const getUsers = () => {
    return axios.get(`/users`).then(({ data: { users } })  => users)
}

export const getUser = (username) => {
    return axios.get(`/users/${username}`).then(({ data: { user } })  => user)
}

export const getLikes = (username) => {
    return axios.get(`/users/${username}/likes`).then(({ data: { likes } })  => likes)
}
