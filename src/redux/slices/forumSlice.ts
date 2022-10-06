import { createSlice } from '@reduxjs/toolkit'
import { dataComment, dataLike, dataPosts } from '@services'

interface IState {
    posts: {
        id: string | any
        title: string
        image: string
        body: string
        createdAt: string
    }[]
    comments: {
        post_id: string
        data: {
            createdAt: string
            name: string
            avatar: string
            body: string
            id: string
        }[]
    }[]
    like: any[]
    likes: any[]
}

const initialState: IState = {
    comments: dataComment,
    posts: dataPosts,
    like: [],
    likes: dataLike,
}

//  "createdAt": "2069-03-09T04:23:28.128Z",

export const forumSlice = createSlice({
    name: 'forum',
    initialState,
    reducers: {
        likePostById(state, action) {
            let temp = state.like
            const index = state.like.indexOf(action.payload)
            // console.log('index: ', index)
            if (index > -1) {
                state.like = [...temp.slice(0, index), ...temp.slice(index + 1)]
            } else {
                state.like = [...temp, action.payload]
            }
        },
        onChangeLikePost(state) {
            // state.quantityLike = initialState.quantityLike + 1
        },
        onChangeUnlikePost(state) {
            // state.quantityLike = initialState.quantityLike
        },
        addComment(state, action) {
            const dataPayload = action.payload
            // console.log('dataComment----: ', action.payload)
            state.comments = dataPayload
        },
        // getPost(state, action) {
        //     // console.log('action payload: ', action.payload)
        //     state.posts = action.payload
        // },
        addPost(state, action) {
            // console.log('action payload: ', action.payload)
            state.posts = action.payload
        },
    },
    // extraReducers(builder) {
    //     builder.addCase(getPostById.fulfilled, (state, action) => {
    //         state.posts = action.payload
    //     })
    // },
})

// export const getPostById: any = createAsyncThunk(
//     'forum/getPostById',
//     async (id: string) => {
//         const dataPostById = await apiPosts.getPostsById(id)
//         return dataPostById
//     }
// )

export const {
    likePostById,
    addComment,
    addPost,
    onChangeLikePost,
    onChangeUnlikePost,
} = forumSlice.actions

export default forumSlice.reducer
