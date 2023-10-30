import { createSlice } from '@reduxjs/toolkit'

interface iState {
    user: {
        email: string | null
        id: string | null
        password: string | null
        data: {
            token: any | null
            email: string | null
            first_name: string | null
            last_name: string | null
            full_name: string | null
            image: string | null
            introduction: string | null
            introduce_code: number | null
            user_id: string | null
        }
    }[]
    userDetail: {
        token: any | null
        email: string
        first_name: string
        last_name: string
        full_name: string
        image: string
        introduction: string
        introduce_code: number
        user_id: string
    }
    modal: boolean
}

const initialState: iState = {
    user: [],
    userDetail: {
        user_id: '',
        token: null,
        email: '',
        first_name: '',
        last_name: '',
        full_name: '',
        image: '',
        introduction: '',
        introduce_code: 123,
    },
    modal: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        detailUser(state, action) {
            state.userDetail = action.payload
        },
        updateDetailUser(state, action) {
            state.userDetail = action.payload
        },
        updateUser(state, action) {
            state.user = [...action.payload]
        },
        updatePassword(state, action) {
            state.user = action.payload
        },
        showNotice(state, action) {
            state.modal = action.payload
        },
        createUser(state, action) {
            state.user = action.payload
        },
    },
})

export const {
    detailUser,
    updateDetailUser,
    updatePassword,
    showNotice,
    createUser,
    updateUser,
} = userSlice.actions

export default userSlice.reducer
