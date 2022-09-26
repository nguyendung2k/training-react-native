import { combineReducers } from 'redux'
import authSlice from './authSlice'
import filterSlice from './filterSlice'
import homeSlice from './homeSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    home: homeSlice,
    filters: filterSlice,
})

export default rootReducer

export { default as authSlice } from './authSlice'
export { default as filterSlice } from './filterSlice'
export { default as homeSlice } from './homeSlice'
