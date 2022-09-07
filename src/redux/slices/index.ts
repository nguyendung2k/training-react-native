import { combineReducers } from 'redux'
import { AnyAction, Reducer } from '@reduxjs/toolkit'

import auth from '../slices/auth'

const authReducer = combineReducers({
    auth: auth,
})

export type RootState = ReturnType<typeof authReducer>

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return authReducer(state, action)
}

export default rootReducer
