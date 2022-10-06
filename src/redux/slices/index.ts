import { combineReducers } from 'redux'
import authSlice from './authSlice'
import filterSlice from './filterSlice'
import homeSlice from './homeSlice'
import forumSlice from './forumSlice'
import groupSlices from './groupSlice'
import memberSlice from './memberSlice'
import userSlice from './userSlice'
import registerSlice from './registerSlice'

export * from './registerSlice'
export * from './userSlice'
export * from './memberSlice'
export * from './groupSlice'
export * from './forumSlice'
export * from './homeSlice'
export * from './filterSlice'
export * from './authSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    home: homeSlice,
    filters: filterSlice,
    forum: forumSlice,
    group: groupSlices,
    member: memberSlice,
    user: userSlice,
    register: registerSlice,
})

export default rootReducer
