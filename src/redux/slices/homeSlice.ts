import { apiGroup } from './../../services/groups'
import { apiMember } from './../../services/members'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface iState {
    modal: {
        showModal: boolean
    }
    user: {
        id: string
        email: string
        name: string
        image: string
        introduction: string
    }
    members: any[]
}

const initialState: iState = {
    modal: {
        showModal: false,
    },
    members: [],
    user: {
        id: '',
        email: '',
        name: '',
        image: '',
        introduction: '',
    },
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        showModal(state, action) {
            state.modal = action.payload
        },
        hideModal(state) {
            state.modal = initialState.modal
        },

        updateUser(state, action) {
            state.user = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(searchMemberByTitle.fulfilled, (state, action) => {
            state.members = action.payload
        })

        builder.addCase(getDataMember.fulfilled, (state, action) => {
            state.members = action.payload
        })
        builder.addCase(filterMemberByCondition.fulfilled, (state, action) => {
            state.members = action.payload
        })
    },
})

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
        const memberFilter = member.filter((item: any) => {
            return (
                item.age >= value.ageMin &&
                item.age <= value.ageMax &&
                item.gender === value.statusGender
            )
        })
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

export const { showModal, hideModal, updateUser } = homeSlice.actions

export default homeSlice.reducer
