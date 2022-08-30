import axios from 'axios'

const getDataUser = async (params: any) => {
    try {
        const url = 'https://api.followers.fun/api/auth/login'
        const response = await axios.get(url)
        const result = response.status === 200 ? response.data : {}
        return result
    } catch (error) {
        console.error(error)
    }
}

export const api = {
    getDataUser,
}
