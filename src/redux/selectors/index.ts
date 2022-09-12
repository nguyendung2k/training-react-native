import { createSelector } from '@reduxjs/toolkit'

const memberListSelector = (state: any) => state.home.members

const searchTextSelector = (state: any) => state.filters.searchValue.searchValue

export const membersRemainingSelector = createSelector(
    memberListSelector,
    searchTextSelector,
    (memberList: [], searchText) => {
        // console.log('searchText-------', searchText)
        if (!searchText) {
            return memberList
        } else {
            return memberList.filter((item: any) => {
                return item.name.includes(searchText)
            })
        }
    }
)
