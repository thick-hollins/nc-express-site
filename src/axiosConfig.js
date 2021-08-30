import axios from "axios";

const instance = axios.create({
    baseURL: 'https://nc-express.herokuapp.com/api',
    headers: {'authorization': 'BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbmljX2hlZGdlaG9nIiwiYWRtaW4iOnRydWUsImlhdCI6MTYzMDA2OTY1MzQ3M30.20K_Bolmw-jSUJ0SXGjvg5hyR5SgjjqtJ79saSqiucs'}
})

export default instance