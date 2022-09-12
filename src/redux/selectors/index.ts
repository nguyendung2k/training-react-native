import { createSelector } from '@reduxjs/toolkit'

const memberListSelector = (state: any) => state.home.members

const searchTextSelector = (state: any) =>
    state.filters.searchValue?.searchValue
// export const filterMinAgeSelector = (state: any) => state.filters.age.from
// export const filterMaxAgeSelector = (state: any) => state.filters.age.to
// export const filterGenderSelector = (state: any) => state.filters.gender

export const membersRemainingSelector = createSelector(
    memberListSelector,
    searchTextSelector,
    // filterMinAgeSelector,
    // filterMaxAgeSelector,
    // filterGenderSelector,
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
