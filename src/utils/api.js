import axios from "../axiosConfig"

const getArticles = () => {
    return axios.get('/articles').then(({ articles }) => articles)
}

export { getArticles }