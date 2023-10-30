import axios from 'axios'

const getDataComment = async () => {
    const urlApi =
        'https://631ff913e3bdd81d8eefe904.mockapi.io/comment?page=1&limit=5'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

export const apiComment = {
    getDataComment,
}
