import { createSlice } from '@reduxjs/toolkit'

interface iState {
    user: {
        token: any
        email: string
        password: string
    }
    modal: {
        showModal: boolean
    }
}

const initialState: iState = {
    user: {
        token: null,
        email: '',
        password: '',
    },
    modal: {
        showModal: false,
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.user = action.payload
        },
        logoutSuccess(state) {
            state.user = initialState.user
        },
    },
})

export const { loginSuccess, logoutSuccess } = authSlice.actions

export default authSlice.reducer
