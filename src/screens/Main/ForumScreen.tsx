import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Header, IConBack, ListPost, Loading } from '@components'
import { useNavigation } from '@react-navigation/native'
import { RootState, useAppSelector } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import {
    getLikePost,
    likePostById,
    onChangeLikePost,
} from '@redux/slices/homeSlice'
import dataLike from '../../services/likePost.json'

const listPostUpdateSelector = (state: RootState) => state.home.posts
const userUpdateSelector = (state: RootState) => state.home.user
const dataCommentSelector = (state: RootState) => state.home.comments
const dataLikePostSelector = (state: RootState) => state.home.likePost

const ForumScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    // const dataPosts = useSelector(dataPostsSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const postUpdate = useSelector(listPostUpdateSelector)
    const likePost = useAppSelector(dataLikePostSelector)
    console.log('likePost', likePost)

    // console.log('dataLike: ', dataLike)
    const dataComment = useSelector(dataCommentSelector)
    const [dataPosts, setDataPosts] = useState<any[]>([])
    const [pagePost, setPagePost] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [like, setLike] = useState(likePost)

    useEffect(() => {
        const getData = async () => {
            const urlApi = `https://631ff913e3bdd81d8eefe904.mockapi.io/posts/?page=${pagePost}&limit=5`
            const response = await axios.get(urlApi)
            const result: [] = response.status === 200 ? response.data : []
            setLoading(false)
            setDataPosts(dataPosts.concat(result))
        }
        dispatch(getLikePost())
        getData()
    }, [pagePost])

    const handlePressPost = (id: { id: string }) => {
        navigation.navigate('CommentForumScreen', id)
    }

    const handleLoadMorePost = () => {
        setPagePost(pagePost + 1)
        setDataPosts(dataPosts)
        setLoading(true)
    }

    const handleOnLikePost = (id: string) => {
        dispatch(likePostById(id))
        dispatch(onChangeLikePost(id))
    }

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
                        renderItem={({ item }) => (
                            <ListPost
                                quantityLike={likePost[0].quantity}
                                // quantityComment={dataComment[0]?.data.length}
                                primary
                                onPress={() => handlePressPost(item.id)}
                                onLikePost={() => handleOnLikePost(item.id)}
                                item={item}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
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
