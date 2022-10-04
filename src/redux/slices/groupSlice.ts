import { createSlice } from '@reduxjs/toolkit'
import dataGroup from '../../services/groupsData.json'

interface groupState {
    groups: {
        title: string
        image: string
        total_members: number
        id: string
        joinGr: boolean
    }[]
    findGroup: {
        title: string
        image: string
        total_members: number
        id: string
        joinGr: boolean
    }[]
}

const initialState: groupState = {
    groups: dataGroup,
    findGroup: [],
}

export const groupSlices = createSlice({
    name: 'group',
    initialState,
    reducers: {
        changeGroupById(state, action) {
            const findGroup = state.groups.filter((item) => {
                return item.id === action.payload
            })

            state.findGroup = findGroup
        },
        changeLeavingGroup(state, action) {
            const dataPayload = action.payload
            const idPayload = dataPayload.id
            const findGroup = dataPayload.copyDataGroup.filter((item: any) => {
                return item.id === idPayload
            })
            state.findGroup = findGroup
            state.groups = dataPayload.copyDataGroup
        },
        changeAttendGroup(state, action) {
            const dataPayload = action.payload
            const idPayload = dataPayload.id
            const findGroup = dataPayload.copyDataGroup.filter((item: any) => {
                return item.id === idPayload
            })
            state.findGroup = findGroup
            state.groups = dataPayload.copyDataGroup
        },
        searchGroupByValue(state, action) {
            const valueFilter = action.payload
            const filterGroup = initialState.groups.filter((item) => {
                if (valueFilter === '') {
                    return item
                } else if (valueFilter.trim() == '') {
                    return
                } else {
                    return item.title
                        .toUpperCase()
                        .includes(valueFilter.toUpperCase())
                }
            })
            state.groups = filterGroup
        },
    },
})

export const {
    changeGroupById,
    changeLeavingGroup,
    changeAttendGroup,
    searchGroupByValue,
} = groupSlices.actions

export default groupSlices.reducer
