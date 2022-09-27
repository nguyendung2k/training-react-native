import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Comment, Header, IConBack, InputReplyPost, Posted } from '@components'
import { RootState, useAppSelector } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import {
    addComment,
    getCommentById,
    getPostById,
    likePostById,
} from '@redux/slices/homeSlice'

const dataCommentSelector = (state: RootState) => state.home.comments
const userUpdateSelector = (state: RootState) => state.home.user
const dataUserSelector = (state: RootState) => state.auth.user
const dataPostByIdSelector = (state: RootState) => state.home.posts
const dataLikePostSelector = (state: RootState) => state.home.likePost

const CommentForumScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const idFromParam = useRoute().params
    const dataComment = useSelector(dataCommentSelector)
    console.log('dataComment: ', dataComment)
    const dataPost = useSelector(dataPostByIdSelector)
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const likePost = useAppSelector(dataLikePostSelector)

    const [valueText, setValueText] = useState<string>('')

    useEffect(() => {
        dispatch(getPostById(idFromParam))
        dispatch(getCommentById(idFromParam))
    }, [])

    const handleOnLikePost = (id: string) => {
        dispatch(likePostById(id))
    }

    const handleComment = (id: string) => {
        dispatch(
            addComment({
                post_id: id,
                name: `${dataUser.first_name} ${dataUser.last_name}`,
                avatar: dataUser.image,
                description: valueText,
            })
        )

        setValueText('')
    }

    return (
        <SafeAreaView style={styles.commentForum}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Header
                        onPress={() => navigation.navigate('ForumScreen')}
                        Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    />
                </View>
                <View style={styles.commentContainer}>
                    <View style={styles.posted}>
                        <Posted
                            id={dataPost.id}
                            name="Esther Howard"
                            title={dataPost.title}
                            contentHeader={dataPost.body}
                            quantityComment={dataComment[0]?.data.length}
                            secondary
                            onLikePost={() => handleOnLikePost(dataPost.id)}
                            image_link={dataPost.image}
                            timeDetail="8:50PM"
                            dateDetail="23 Sep 2021 "
                            quantityLike={likePost[0].quantity}
                        />
                        <View>
                            <InputReplyPost
                                onPress={() => handleComment(dataPost.id)}
                                avatar={dataUser.image}
                                value={valueText}
                                onChangeText={setValueText}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.commentContent}>
                    {dataComment[0]?.data.map((item: any) => {
                        return (
                            <Comment
                                key={item.id}
                                name={item.name}
                                description={item.body}
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
