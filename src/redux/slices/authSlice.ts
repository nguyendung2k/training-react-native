import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface iState {
    token: null | string
    showModal: boolean
}

const initialState: iState = {
    token: null,
    showModal: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutSuccess(state) {
            state.token = initialState.token
        },
        loginAuth(state, action) {
            state.token = action.payload
        },
        modalHandle(state, action) {
            state.showModal = action.payload
        },
    },
})

export const { modalHandle, logoutSuccess, loginAuth } = authSlice.actions

export default authSlice.reducer
