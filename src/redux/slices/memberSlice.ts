import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiMember } from './../../services/members'

interface iState {
    members: {
        title: string
        total_follow: number
        description: string
        image: string
        gender: boolean
        age: number
        id: string
    }[]
}

const initialState: iState = {
    members: [],
}

export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {},
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
    'member/getDataMember',
    async () => {
        const member = await apiMember.getMemberData()
        return member
    }
)

export const filterMemberByCondition: any = createAsyncThunk(
    'member/filterMemberByCondition',
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
    'member/filterByTitle',
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

export default memberSlice.reducer
