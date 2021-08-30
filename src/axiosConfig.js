import axios from "axios";

const instance = axios.create({
    baseURL: 'https://nc-express.herokuapp.com/api',
    headers: {'authorization': 'BEARER '}
})

export default instance