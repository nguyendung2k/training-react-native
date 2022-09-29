import { combineReducers } from 'redux'
import authSlice from './authSlice'
import filterSlice from './filterSlice'
import homeSlice from './homeSlice'
import forumSlice from './forumSlice'
import groupSlices from './groupSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    home: homeSlice,
    filters: filterSlice,
    forum: forumSlice,
    group: groupSlices,
})

export default rootReducer

export { default as authSlice } from './authSlice'
export { default as filterSlice } from './filterSlice'
export { default as homeSlice } from './homeSlice'
export { default as forumSlice } from './forumSlice'
export { default as groupSlices } from './groupSlice'
