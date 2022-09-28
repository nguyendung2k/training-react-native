import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPosts } from '@services/posts'
import dataComment from '../../services/commentData.json'

interface IState {
    posts: {
        id: string
        title: string
        description: string
        image: string
        body?: string
        quantity_like?: string
        quantity_comment?: string
    }
    comments: any[]
    like: any[]
    quantityLike: number
}

const initialState: IState = {
    comments: dataComment,
    posts: {
        id: '',
        title: '',
        description: '',
        image: '',
    },
    like: [],
    quantityLike: 0,
}

export const forumSlice = createSlice({
    name: 'forum',
    initialState,
    reducers: {
        likePostById(state, action) {
            let temp = state.like
            const index = state.like.indexOf(action.payload)
            if (index > -1) {
                state.like = [...temp.slice(0, index), ...temp.slice(index + 1)]
            } else {
                state.like = [...temp, action.payload]
            }
        },
        onChangeLikePost(state) {
            state.quantityLike = initialState.quantityLike + 1
        },
        onChangeUnlikePost(state) {
            state.quantityLike = initialState.quantityLike
        },
        // getComments(state) {
        //     console.log('data: ', dataComment)

        //     state.comments = dataComment
        // },
        getCommentById(state, action) {
            console.log('state: ', state)

            const idFromParam = action.payload
            const findComment = state.comments.filter((item) => {
                console.log('item: ', item)
                return item.post_id === idFromParam
            })

            console.log('findComment', findComment)
            // state.comments = findComment[0].data
        },
        addComment(state, action) {
            const dataPayload = action.payload
            console.log('dataPayLoad: ', dataPayload)
            // state.comments = [dataPayload.data, ...state.comments]
            // initialState.comments.filter((item) => {
            //     if (item.post_id === dataPayload.post_id) {
            //     }
            // })
            state.comments = [dataPayload.data, ...state.comments]
        },
        addPost(state, action) {
            // state.posts.unshift(action.payload)
        },
    },
    extraReducers(builder) {
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    },
})

export const getPostById: any = createAsyncThunk(
    'forum/getPostById',
    async (id: string) => {
        const dataPostById = await apiPosts.getPostsById(id)

        return dataPostById
    }
)

export const {
    likePostById,
    addComment,
    addPost,
    getCommentById,
    onChangeLikePost,
    onChangeUnlikePost,
} = forumSlice.actions

export default forumSlice.reducer
