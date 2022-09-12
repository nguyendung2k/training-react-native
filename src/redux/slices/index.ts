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
