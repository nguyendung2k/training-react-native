import { apiGroup } from './../../services/groups'
import { apiMember } from './../../services/members'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiPosts } from './../../services/posts'
import { apiComment } from './../../services/comment'
import dataComment from '../../services/commentData.json'
import Comment from './../../components/Comment/Comment'

interface iState {
    modal: {
        showModal: boolean
    }
    groups: any[]
    members: any[]
    comments: any[]
    imagePost: any[]
    user: {
        id: string
        email: string
        name: string
        image: string
        introduction: string
    }
    posts: {
        id: string
        title: string
        description: string
        imagePost?: []
        body?: string
        quantity_like?: string
        quantity_comment?: string
    }
    like: any[]
    quantity_like?: number
    joinGroupStatus?: boolean
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
        name: '',
        image: '',
        introduction: '',
    },
    posts: {
        id: '',
        title: '',
        description: '',
    },
    like: [],
    quantity_like: 0,
    imagePost: [],
    joinGroupStatus: false,
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
        getCommentById(state, action) {
            // console.log('Comment---: ', action.payload)
            const idFromParam = action.payload

            const findComment = dataComment.filter((item) => {
                return item.post_id === idFromParam
            })

            state.comments = findComment
        },
        addComment(state, action) {
            const dataPayload = action.payload

            console.log('dataPayload', dataPayload)

            const findComment = dataComment.filter((item) => {
                if (item.post_id === dataPayload.post_id) {
                    return true
                }
            })

            console.log(findComment[0])

            // let comment = []
            // if (dataPayload.idPost === state.comments.post_id) {
            //     comment = [...state.comments.concat(dataPayload)]
            // } else {
            //     comment = state.comments
            // }
        },
        addPost(state, action) {
            // state.posts.unshift(action.payload)
        },
        updateUser(state, action) {
            state.user = action.payload
        },
        changeStatusJoinGroup(state, action) {
            state.joinGroupStatus = action.payload
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
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        // builder.addCase(getCommentPostById.fulfilled, (state, action) => {
        //     console.log('dataPayload', action.payload)
        //     state.comments = action.payload
        // })
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

export const getPostById: any = createAsyncThunk(
    'home/getCommentById',
    async (id: string) => {
        const dataPostById = await apiPosts.getPostsById(id)

        return dataPostById
    }
)

export const {
    showModal,
    hideModal,
    likePostById,
    addComment,
    addPost,
    updateUser,
    changeStatusJoinGroup,
    getCommentById,
    // getComment,
} = homeSlice.actions

export default homeSlice.reducer
