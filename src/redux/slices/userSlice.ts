import { createSlice } from '@reduxjs/toolkit'
import { userData } from '@services'

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
            user_id?: string
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
        introduce_code: number | null
        user_id: string
    }
    // userUpdate: {
    //     id: string
    //     email: string
    //     name: string
    //     image: string
    //     introduction: string
    //     password?: string
    // }
    modal: boolean
}

const initialState: iState = {
    user: userData,
    userDetail: {
        user_id: '',
        token: null,
        email: '',
        first_name: '',
        last_name: '',
        full_name: '',
        image: '',
        introduction: '',
        introduce_code: null,
    },
    // userUpdate: {
    //     id: '',
    //     email: '',
    //     name: '',
    //     image: '',
    //     introduction: '',
    // },
    modal: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        detailUser(state, action) {
            console.log('ac: ', action.payload)

            state.userDetail = action.payload
        },
        // updateUser(state, action) {
        //     state.userUpdate = action.payload
        // },
        updatePassword(state, action) {
            state.user = action.payload
        },
        showNotice(state, action) {
            state.modal = action.payload
        },
        createUser(state, action) {
            // console.log('userCreate: ', action.payload)
            state.user = action.payload
        },
    },
})

export const {
    detailUser,
    // updateUser,
    updatePassword,
    showNotice,
    createUser,
} = userSlice.actions

export default userSlice.reducer
