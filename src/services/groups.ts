import axios from 'axios'

const getAllGroupData = async () => {
    const urlApi = 'https://631ef80f58a1c0fe9f5c4864.mockapi.io/groups'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

const getGroupData = async () => {
    const urlApi = 'https://631ef80f58a1c0fe9f5c4864.mockapi.io/groups?p=1&l=5'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

const getGroupDataByFilter = async (title: string) => {
    const urlApi = `https://631ef80f58a1c0fe9f5c4864.mockapi.io/groups?title=${title}`
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

const getGroupDataById = async (id: any) => {
    const urlApi = `https://631ef80f58a1c0fe9f5c4864.mockapi.io/groups/${id}`
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

export const apiGroup = {
    getAllGroupData,
    getGroupData,
    getGroupDataByFilter,
    getGroupDataById,
}
