import { createSlice } from '@reduxjs/toolkit'

interface iState {
    modal: {
        show: boolean
    }
}

const initialState: iState = {
    modal: {
        show: false,
    },
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
    },
})

export const { showModal, hideModal } = homeSlice.actions

export default homeSlice.reducer
