import axios from 'axios'

const getDataUser = async () => {
    const urlApi = 'https://631ef80f58a1c0fe9f5c4864.mockapi.io/user'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

const getDetailUser = async () => {
    const urlApi = `https://631ef80f58a1c0fe9f5c4864.mockapi.io/users_info/1`
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

export const api = {
    getDataUser,
    getDetailUser,
}
