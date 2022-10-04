import { combineReducers } from 'redux'
import authSlice from './authSlice'
import filterSlice from './filterSlice'
import homeSlice from './homeSlice'
import forumSlice from './forumSlice'
import groupSlices from './groupSlice'
import memberSlice from './memberSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    home: homeSlice,
    filters: filterSlice,
    forum: forumSlice,
    group: groupSlices,
    member: memberSlice,
    user: userSlice,
})

export default rootReducer
