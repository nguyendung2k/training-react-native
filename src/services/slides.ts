import axios from 'axios'

const getSliceData = async () => {
    const urlApi =
        'https://631ff913e3bdd81d8eefe904.mockapi.io/slides?page=1&limit=10'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

export const apiSlice = {
    getSliceData,
}
