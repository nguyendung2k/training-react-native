import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Header, IConBack, ListPost, Loading } from '@components'
import { useNavigation } from '@react-navigation/native'
import { RootState } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import {
    likePostById,
    onChangeLikePost,
    onChangeUnlikePost,
} from '@redux/slices/forumSlice'

interface forumScreenProps {
    id: string
}

const listPostUpdateSelector = (state: RootState) => state.forum.posts
const userUpdateSelector = (state: RootState) => state.home.user
const dataCommentSelector = (state: RootState) => state.forum.comments
const dataLikePostSelector = (state: RootState) => state.forum.like
const likeQuantitySelector = (state: RootState) => state.forum.quantityLike

const ForumScreen = ({ id }: forumScreenProps) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const checkLikePost = useSelector(dataLikePostSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const postUpdate = useSelector(listPostUpdateSelector)
    const dataComment = useSelector(dataCommentSelector)
    // console.log('dataComment: ', dataComment)
    const like = useSelector(likeQuantitySelector)
    const [dataPosts, setDataPosts] = useState<any[]>([])
    const [pagePost, setPagePost] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)

    // console.log('dataPost', dataPosts)

    useEffect(() => {
        const getData = async () => {
            const urlApi = `https://631ff913e3bdd81d8eefe904.mockapi.io/posts/?page=${pagePost}&limit=5`
            const response = await axios.get(urlApi)
            const result: [] = response.status === 200 ? response.data : []
            setLoading(false)
            setDataPosts(dataPosts.concat(result))
        }
        getData()
    }, [pagePost])

    const handlePressPost = (id: { id: string }) => {
        navigation.navigate('CommentForumScreen', id)
    }
    const handlePressComment = (id: { id: string }) => {
        navigation.navigate('CommentForumScreen', id)
    }

    const handlePressImage = (id: { id: string }) => {
        navigation.navigate('CommentForumScreen', id)
    }

    const handleLoadMorePost = () => {
        setPagePost(pagePost + 1)
        setDataPosts(dataPosts)
        setLoading(true)
    }

    const handleOnLikePost = (id: string) => {
        dispatch(likePostById(id))
        if (checkLikePost.includes(id)) {
            dispatch(onChangeUnlikePost())
        } else {
            dispatch(onChangeLikePost())
        }
    }

    console.log('dataComment: ', dataComment)
    console.log('length: ', dataComment[0].data.length)
    console.log('dataPost: ', dataPosts)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    title="Forum"
                    showTextHeader
                    showIconAdd
                    showIcon
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    onPress={() => navigation.navigate('DetailCommunities')}
                    onDirection={() => navigation.navigate('NewPostScreen')}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.contentPost}>
                    <FlatList
                        data={dataPosts}
                        renderItem={({ item, index }) => {
                            console.log('item - render : ', item, index)
                            return (
                                <ListPost
                                    quantityLike={like}
                                    quantityComment={
                                        0
                                        // dataComment[index].data.length
                                    }
                                    primary
                                    onPress={() => handlePressPost(item.id)}
                                    onLikePost={() => handleOnLikePost(item.id)}
                                    item={item}
                                    onComment={() =>
                                        handlePressComment(item.id)
                                    }
                                    onPressImage={() =>
                                        handlePressImage(item.id)
                                    }
                                />
                            )
                        }}
                        keyExtractor={(_, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        onEndReached={handleLoadMorePost}
                        onEndReachedThreshold={0}
                        ListFooterComponent={loading ? Loading : null}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForumScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        marginHorizontal: 24,
        marginBottom: 28,
    },
    content: {
        flex: 1,
    },
    contentPost: {
        marginHorizontal: 24,
        // marginBottom: 100,
    },
})
