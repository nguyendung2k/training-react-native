import { apiGroup } from './../../services/groups'
import { apiMember } from './../../services/members'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface iState {
    modal: {
        showModal: boolean
    }
    groups: any[]
    members: any[]
    user: {
        id: string
        email: string
        password: string
        first_name: string
    }
    memberFilter: any[]
}

const initialState: iState = {
    modal: {
        showModal: false,
    },
    groups: [],
    members: [],
    memberFilter: [],
    user: {
        id: '',
        email: '',
        password: '',
        first_name: '',
    },
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        showModal(state, action) {
            console.log('actionPayload', action.payload)
            state.modal = action.payload
        },
        hideModal(state) {
            state.modal = initialState.modal
        },
    },
    extraReducers(builder) {
        builder.addCase(getGroup.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(getAllGroup.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(searchMemberByTitle.fulfilled, (state, action) => {
            state.members = action.payload
        })
        builder.addCase(searchGroupByTitle.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(getGroupById.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(getDataMember.fulfilled, (state, action) => {
            state.members = action.payload
        })
        builder.addCase(filterMemberByCondition.fulfilled, (state, action) => {
            state.members = action.payload
        })
    },
})

export const getGroup: any = createAsyncThunk('home/group', async () => {
    const dataGroup = await apiGroup.getGroupData()
    return dataGroup
})

export const getAllGroup: any = createAsyncThunk('home/allgroup', async () => {
    const dataGroup = await apiGroup.getAllGroupData()
    return dataGroup
})

export const getGroupById: any = createAsyncThunk(
    'home/groupById',
    async (id) => {
        const dataGroupById = await apiGroup.getGroupDataById(id)
        return dataGroupById
    }
)

export const searchGroupByTitle: any = createAsyncThunk(
    'home/filterGroupByTitle',
    async (value: string) => {
        const dataGroupByTitle = await apiGroup.getGroupDataByFilter(value)
        if (value) {
            return dataGroupByTitle.filter((item: any) => {
                return item.title.includes(value)
            })
        }
    }
)

export const getDataMember: any = createAsyncThunk(
    'home/getDataMember',
    async () => {
        const member = await apiMember.getMemberData()
        return member
    }
)

export const filterMemberByCondition: any = createAsyncThunk(
    'home/filterMemberByCondition',
    async (value: any) => {
        const member = await apiMember.getMemberData()
        console.log('value', value)

        const memberFilter = member.filter((item: any) => {
            return (
                item.age >= value.ageMin &&
                item.age <= value.ageMax &&
                item.gender === value.statusGender
            )
        })

        console.log('memberFilter---', memberFilter)

        return memberFilter
    }
)

export const searchMemberByTitle: any = createAsyncThunk(
    'home/filterByTitle',
    async (value: string) => {
        const dataMembers = await apiMember.getMemberData()
        const dataMembersByTitle = await apiMember.getMemberFilterByTitle(value)
        if (value) {
            return dataMembersByTitle.filter((item: any) => {
                return item.title.includes(value)
            })
        }
        return dataMembers
    }
)

export const { showModal, hideModal } = homeSlice.actions

export default homeSlice.reducer
