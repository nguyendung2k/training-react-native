import { apiGroup } from './../../services/groups'
import { apiMember } from './../../services/members'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiPosts } from './../../services/posts'
import { apiComment } from './../../services/comment'

interface iState {
    modal: {
        showModal: boolean
    }
    groups: any[]
    members: any[]
    comments: any[]
    user: {
        id: string
        email: string
        password: string
        first_name: string
    }
    posts: {
        id: string
        title: string
        image: string
        quantity_like: string
        quantity_comment: string
    }[]
    like: any[]
    quantity_like?: number
}

const initialState: iState = {
    modal: {
        showModal: false,
    },
    groups: [],
    members: [],
    comments: [],
    user: {
        id: '',
        email: '',
        password: '',
        first_name: '',
    },
    posts: [],
    like: [],
    quantity_like: 0,
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
        likePostById(state, action) {
            let temp = state.like

            const index = state.like.indexOf(action.payload)

            if (index > -1) {
                state.like = [...temp.slice(0, index), ...temp.slice(index + 1)]
                state.quantity_like = initialState.quantity_like
            } else {
                state.like = [...temp, action.payload]
                state.quantity_like = +1
            }
        },
        addComment(state, action) {
            state.comments.unshift(action.payload)
        },
    },
    extraReducers(builder) {
        builder.addCase(getGroup.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(getAllGroup.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(searchGroupByTitle.fulfilled, (state, action) => {
            state.groups = action.payload
        })
        builder.addCase(searchMemberByTitle.fulfilled, (state, action) => {
            state.members = action.payload
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
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        builder.addCase(getComment.fulfilled, (state, action) => {
            state.comments = action.payload
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

export const getPosts: any = createAsyncThunk('home/posts', async () => {
    const dataPosts = await apiPosts.getPostsData()
    return dataPosts
})

export const getComment: any = createAsyncThunk('home/comments', async () => {
    const dataComment = await apiComment.getDataComment()
    return dataComment
})

export const { showModal, hideModal, likePostById, addComment } =
    homeSlice.actions

export default homeSlice.reducer
