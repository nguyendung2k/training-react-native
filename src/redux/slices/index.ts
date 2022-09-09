import { combineReducers } from 'redux'

import authSlice from './authSlice'
import homeSlice from './homeSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    home: homeSlice,
})

export default rootReducer
