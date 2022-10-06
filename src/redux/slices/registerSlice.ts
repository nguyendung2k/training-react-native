import { createSlice } from '@reduxjs/toolkit'

interface IState {
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
    }
}

const initialState: IState = {
    id: null,
    email: null,
    password: null,
    data: {
        token: null,
        email: null,
        first_name: null,
        last_name: null,
        full_name: null,
        image: null,
        introduction: null,
        introduce_code: null,
    },
}
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        createNewUser(state: IState, action) {
            const { id, email, password, data } = action.payload
            return {
                id: id,
                email: email,
                password: password,
                data: {
                    ...state.data,
                    ...data,
                },
            }
        },
        formatNewUser() {
            return initialState
        },
    },
})

export const { createNewUser, formatNewUser } = registerSlice.actions
export default registerSlice.reducer
