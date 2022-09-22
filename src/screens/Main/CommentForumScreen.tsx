import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import Posted from '../../components/Posted/Posted'
import InputReplyPost from '../../components/Input/InputReplyPost'
import Comment from '../../components/Comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { apiPosts } from '../../services/posts'

import {
    addComment,
    getComment,
    likePostById,
} from '../../redux/slices/homeSlice'

const dataCommentSelector = (state: any) => state.home.comments
const quantityLikePostSelector = (state: any) => state.home.quantity_like
const userUpdateSelector = (state: any) => state.home.user

const dataUserSelector = (state: any) => state.auth.user

const CommentForumScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const idFromParam = useRoute().params

    const dataComment = useSelector(dataCommentSelector)
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const quantityLike = useSelector(quantityLikePostSelector)

    const [quantityComments, setQuantityComments] = useState<number>(5)
    const [postById, setPostById] = useState<any>({})
    const [valueText, setValueText] = useState<string>('')

    useEffect(() => {
        const getDataPostById = async () => {
            const dataPostById = await apiPosts.getPostsById(idFromParam)
            setPostById(dataPostById)
        }
        dispatch(getComment())

        getDataPostById()
    }, [])

    const handleOnLikePost = (id: any) => {
        dispatch(likePostById(id))
    }

    const handleComment = () => {
        dispatch(
            addComment({
                name: `${dataUser.first_name} ${dataUser.last_name}`,
                avatar: dataUser.image,
                description: valueText,
            })
        )
        setValueText('')
        setQuantityComments((prev) => prev + 1)
    }

    return (
        <SafeAreaView style={styles.commentForum}>
            <View style={styles.header}>
                <Header
                    onPress={() => navigation.navigate('ForumScreen')}
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.commentContainer}>
                    <View style={styles.posted}>
                        <Posted
                            id={postById.id}
                            name="Esther Howard"
                            title={postById.title}
                            contentHeader={postById.body}
                            quantityLike={quantityLike}
                            quantityComment={quantityComments}
                            secondary
                            onLikePost={() => handleOnLikePost(postById.id)}
                            image_link={postById.image}
                            timeDetail="8:50PM"
                            dateDetail="23 Sep 2021 "
                        />
                        <View>
                            <InputReplyPost
                                onPress={handleComment}
                                avatar={dataUser.image}
                                value={valueText}
                                onChangeText={setValueText}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.commentContent}>
                    {dataComment.map((item: any, index: any) => {
                        return (
                            <Comment
                                key={index}
                                name={item.name}
                                description={item.description}
                                time="17h"
                                avatar={
                                    userUpdate.image
                                        ? userUpdate.image
                                        : item.avatar
                                }
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CommentForumScreen

const styles = StyleSheet.create({
    commentForum: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        marginHorizontal: 24,
    },
    commentContainer: {
        marginHorizontal: 24,
    },
    posted: {
        marginTop: 15,
    },
    commentContent: {
        // marginHorizontal: 24,
    },
})
