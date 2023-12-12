import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "3b8a93ca1bd449c4889d1eb2576e319e"
    }
})