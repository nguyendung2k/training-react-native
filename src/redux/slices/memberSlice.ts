import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { dataMember } from '@services'
import { apiMember } from './../../services/members'

interface iState {
    members: {
        id: string
        first_name: string
        last_name: string
        full_name: string
        total_follow: number
        image: string
        gender: boolean
        age: number
        description: string
        introduce_code: number
        introduction: string
    }[]
    otherMember: {
        id: string | null
        first_name: string | null
        last_name: string | null
        full_name: string | null
        total_follow: number | null
        image: string
        gender: boolean | null
        age: number | null
        description: string | null
        introduce_code: number | null
        introduction: string | null
        request: boolean | null
        isFriend: boolean | null
    }
}

const initialState: iState = {
    members: dataMember,
    otherMember: {
        id: null,
        first_name: null,
        last_name: null,
        full_name: null,
        total_follow: null,
        image: '',
        gender: null,
        age: null,
        description: null,
        introduce_code: null,
        introduction: null,
        request: null,
        isFriend: null,
    },
}

export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        getDataMember(state) {
            state.members = dataMember
        },
        searchMemberByTitle(state, action) {
            const valueInput = action.payload
            if (valueInput) {
                state.members = dataMember.filter((item) => {
                    return item.full_name.includes(valueInput)
                })
            } else if (valueInput.trim() === '') {
                state.members = dataMember
            }
        },
        filterMemberByCondition(state, action) {
            const minAge = action.payload.ageMin
            const maxAge = action.payload.ageMax
            const gender = action.payload.statusGender

            const filterMember = dataMember.filter((item) => {
                return (
                    item.age >= minAge &&
                    item.age <= maxAge &&
                    item.gender === gender
                )
            })
            state.members = filterMember
        },
        getOtherMember(state, action) {
            const idOtherMember = action.payload
            const findOtherMember = dataMember.filter((item) => {
                return item.id === idOtherMember
            })
            state.otherMember = findOtherMember[0]
        },
    },
    // extraReducers(builder) {
    //     builder.addCase(searchMemberByTitle.fulfilled, (state, action) => {
    //         state.members = action.payload
    //     })

    //     builder.addCase(getDataMember.fulfilled, (state, action) => {
    //         state.members = action.payload
    //     })
    //     builder.addCase(filterMemberByCondition.fulfilled, (state, action) => {
    //         state.members = action.payload
    //     })
    // },
})

// export const getDataMember: any = createAsyncThunk(
//     'member/getDataMember',
//     async () => {
//         const member = await apiMember.getMemberData()
//         return member
//     }
// )

// export const filterMemberByCondition: any = createAsyncThunk(
//     'member/filterMemberByCondition',
//     async (value: any) => {
//         const member = await apiMember.getMemberData()
//         const memberFilter = member.filter((item: any) => {
//             return (
//                 item.age >= value.ageMin &&
//                 item.age <= value.ageMax &&
//                 item.gender === value.statusGender
//             )
//         })
//         return memberFilter
//     }
// )

// export const searchMemberByTitle: any = createAsyncThunk(
//     'member/filterByTitle',
//     async (value: string) => {
//         const dataMembers = await apiMember.getMemberData()
//         const dataMembersByTitle = await apiMember.getMemberFilterByTitle(value)
//         if (value) {
//             return dataMembersByTitle.filter((item: any) => {
//                 return item.title.includes(value)
//             })
//         }
//         return dataMembers
//     }
// )

export const {
    getDataMember,
    searchMemberByTitle,
    filterMemberByCondition,
    getOtherMember,
} = memberSlice.actions

export default memberSlice.reducer
