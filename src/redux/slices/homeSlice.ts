import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface iState {
    modal: {
        showModal: boolean
    }
    notice: boolean
}

const initialState: iState = {
    modal: {
        showModal: false,
    },
    notice: false,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        showModal(state, action) {
            state.modal = action.payload
        },
        hideModal(state) {
            state.modal = initialState.modal
        },
        showNoticeSuccess(state, action) {
            state.notice = action.payload
        },
    },
})

export const { showModal, hideModal, showNoticeSuccess } = homeSlice.actions

export default homeSlice.reducer
