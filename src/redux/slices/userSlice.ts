import { createSlice } from '@reduxjs/toolkit'
import { userData } from '../../services/index'

interface iState {
    user: {
        email: string
        id: string
        password: string
        data: {
            token: any
            email: string
            first_name: string
            last_name: string
            full_name: string
            image: string
            introduction: string
            introduce_code: number
        }
    }[]
    userDetail: {
        id: string
        token: any
        email: string
        first_name: string
        last_name: string
        full_name: string
        image: string
        introduction: string
        introduce_code: number
    }
    userUpdate: {
        id: string
        email: string
        name: string
        image: string
        introduction: string
        password?: string
    }
    modal: boolean
}

const initialState: iState = {
    user: userData,
    userDetail: {
        id: '',
        token: null,
        email: '',
        first_name: '',
        last_name: '',
        full_name: '',
        image: '',
        introduction: '',
        introduce_code: 0,
    },
    userUpdate: {
        id: '',
        email: '',
        name: '',
        image: '',
        introduction: '',
    },
    modal: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        detailUser(state, action) {
            console.log('ac', action.payload)
            state.userDetail = action.payload
        },
        updateUser(state, action) {
            state.userUpdate = action.payload
        },
        updatePassword(state, action) {
            state.user = action.payload
        },
        showNotice(state, action) {
            state.modal = action.payload
        },
    },
})

export const { detailUser, updateUser, updatePassword, showNotice } =
    userSlice.actions

export default userSlice.reducer
