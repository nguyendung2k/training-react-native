import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import Posted from '../../components/Posted/Posted'
import { useDispatch, useSelector } from 'react-redux'
// import { getPosts, likePostById } from '../../redux/slices/homeSlice'
import ListPost from '../../components/ListView/ListPost'
import axios from 'axios'
import { apiPosts } from './../../services/posts'
import Loading from './../../components/Loading/Loading'
import { likePostById } from '../../redux/slices/homeSlice'

const listPostUpdateSelector = (state: any) => state.home.posts
const userUpdateSelector = (state: any) => state.home.user
const quantityLikePostSelector = (state: any) => state.home.quantity_like

const ForumScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    // const dataPosts = useSelector(dataPostsSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const postUpdate = useSelector(listPostUpdateSelector)

    const quantityLike = useSelector(quantityLikePostSelector)
    const [quantityComments, setQuantityComments] = useState<number>(5)
    const [dataPosts, setDataPosts] = useState<any[]>([])
    const [pagePost, setPagePost] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)

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

    const handlePress = (id: string) => {
        navigation.navigate('CommentForumScreen', id)
    }

    const handleLoadMorePost = () => {
        setPagePost(pagePost + 1)
        setDataPosts(dataPosts)
        setLoading(true)
    }

    const handleOnLikePost = (id: any) => {
        dispatch(likePostById(id))
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
                                primary
                                onPress={() => handlePress(item.id)}
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
        // marginBottom: 100,
        flex: 1,
    },
    contentPost: {
        marginHorizontal: 24,
        // marginBottom: 100,
    },
})
