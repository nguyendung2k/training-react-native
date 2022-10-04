import { apiGroup } from './../../services/groups'
import { apiMember } from './../../services/members'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface iState {
    modal: {
        showModal: boolean
    }
}

const initialState: iState = {
    modal: {
        showModal: false,
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
