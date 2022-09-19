import axios from 'axios'

const getPostsData = async () => {
    const urlApi =
        'https://631ff913e3bdd81d8eefe904.mockapi.io/posts/?page=1&limit=5'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

const getPostsById = async (id: any) => {
    const urlApi = `https://631ff913e3bdd81d8eefe904.mockapi.io/posts/${id}`
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

export const apiPosts = {
    getPostsData,
    getPostsById,
}
