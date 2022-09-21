import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import { api } from '../../services/user'
interface iState {
    user: {
        token: any
        email: string
        password: string
    }
    modal: {
        showModal: boolean
    }
    loading: boolean
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
    loading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutSuccess(state) {
            state.user = initialState.user
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginAuth.pending, (state) => {
                state.loading = true
            })
            .addCase(loginAuth.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
    },
})

export const loginAuth: any = createAsyncThunk(
    'auth/logIn',
    async (values: any) => {
        const dataUser = await api.getDataUser()
        // console.log('dataUser---', dataUser)
        const dataDetail = await api.getDetailUser()
        console.log('detailUserDetail---', dataDetail)
        const filterUser = dataUser.filter(
            (item: any) =>
                item.email === values.email && item.password === values.password
        )
        if (filterUser) {
            return {
                token: dataDetail.token,
                first_name: dataDetail.first_name,
                last_name: dataDetail.last_name,
                image: dataDetail.image,
                introduce_code: dataDetail.introduce_code,
                email: dataDetail.email,
            }
        }
    }
)

export const { logoutSuccess } = authSlice.actions

export default authSlice.reducer
