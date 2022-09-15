import axios from 'axios'

const getMemberData = async () => {
    const urlApi =
        'https://631ef80f58a1c0fe9f5c4864.mockapi.io/members?page=1&limit=10'
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

const getMemberFilterByTitle = async (title: string) => {
    const urlApi = `https://631ef80f58a1c0fe9f5c4864.mockapi.io/members?title=${title}`
    const response = await axios.get(urlApi)
    const result = response.status === 200 ? response.data : []
    return result
}

export const apiMember = {
    getMemberData,
    getMemberFilterByTitle,
}
