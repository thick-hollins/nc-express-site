import axios from "../axiosConfig"

export const getArticles = (queries) => {
    const queryObject = Object.fromEntries(queries.entries())
    return axios.get('/articles', { params: queryObject }).then(({ data: { articles }, headers: { page, total_count, total_pages } })  => {
        return { articles, page, total_count, total_pages }
    })
}

export const getArticle = (article_id) => {
    return axios.get(`/articles/${article_id}`).then(({ data: { article } })  => article)
}

export const getComments = (article_id, queries) => {
    const queryObject = Object.fromEntries(queries.entries())
    return axios.get(`/articles/${article_id}/comments`, { params: queryObject }).then(({ data: { comments }, headers: { page, total_count, total_pages } })  => { 
        return { comments, total_count, page, total_pages } 
    })
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

export const patchUser = (username, req) => {
    return axios.patch(`/users/${username}`, req).then(({ data: { user } })  => user)
}

export const getArticleLikes = (username) => {
    return axios.get(`/users/${username}/likes?liketype=articles&up=true`).then(({ data: { likes } })  => likes)
}

export const getVotes = (username) => {
    return axios.get(`/users/${username}/likes`).then(({ data: { likes } })  => likes)
}

export const postArticle = (newArticle) => {
    return axios.post(`/articles`, newArticle).then(({ data: { article } })  => article)
}

export const postTopic = (newTopic) => {
    return axios.post(`/topics`, newTopic).then(({ data: { topic } })  => topic)
}

export const postComment = (newComment, article_id) => {
    return axios.post(`/articles/${article_id}/comments`, newComment).then(({ data: { comment } })  => comment)
}

export const patchArticleVotes = (newVote, article_id) => {
    return axios.patch(`/articles/${article_id}`, newVote).then(({ data: { article } })  => article)
}

export const patchArticleText = (newText, article_id) => {
    return axios.patch(`/articles/${article_id}`, newText).then(({ data: { article } })  => article)
}

export const patchCommentText = (newText, comment_id) => {
    return axios.patch(`/comments/${comment_id}`, newText).then(({ data: { comment } })  => comment)
}

export const patchCommentVotes = (newVote, comment_id) => {
    return axios.patch(`/comments/${comment_id}`, newVote).then(({ data: { comment } })  => comment)
}

export const deleteComment = (comment_id) => {
    return axios.delete(`/comments/${comment_id}`)
}

export const deleteArticle = (article_id) => {
    return axios.delete(`/articles/${article_id}`)
}
