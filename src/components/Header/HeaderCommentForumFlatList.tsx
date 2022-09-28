import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header, IConBack, InputReplyPost, Posted } from '@components'
import { RootState } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import {
    addComment,
    getCommentById,
    getPostById,
    likePostById,
    onChangeLikePost,
    onChangeUnlikePost,
} from '@redux/slices/forumSlice'

const dataUserSelector = (state: RootState) => state.auth.user
const dataPostByIdSelector = (state: RootState) => state.forum.posts
const likePostSelector = (state: RootState) => state.forum.like
const likeQuantitySelector = (state: RootState) => state.forum.quantityLike
const dataCommentSelector = (state: RootState) => state.forum.comments
const userUpdateSelector = (state: RootState) => state.home.user

const HeaderCommentForumFlatList = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const idFromParam: any = useRoute().params

    const dataPost = useSelector(dataPostByIdSelector)
    const dataUser = useSelector(dataUserSelector)
    const like = useSelector(likeQuantitySelector)
    const checkLikePost = useSelector(likePostSelector)
    const userUpdate = useSelector(userUpdateSelector)

    const [valueText, setValueText] = useState<string>('')

    useEffect(() => {
        dispatch(getPostById(idFromParam))
    }, [])

    const handleOnLikePost = (id: string) => {
        dispatch(likePostById(id))
        if (checkLikePost.includes(id)) {
            dispatch(onChangeUnlikePost())
        } else {
            dispatch(onChangeLikePost())
        }
    }

    const handleComment = (id: string) => {
        if (valueText) {
            dispatch(
                addComment({
                    post_id: id,
                    data: {
                        name: `${dataUser.first_name} ${dataUser.last_name}`,
                        avatar: userUpdate.image
                            ? userUpdate.image
                            : dataUser.image,
                        body: valueText,
                        id: Math.random().toString(),
                        createdAt: Date.now().toString(),
                    },
                })
            )
        }
        setValueText('')
    }
    return (
        <View>
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
                        // quantityComment={dataComment.length}
                        secondary
                        onLikePost={() => handleOnLikePost(dataPost.id)}
                        image_link={dataPost.image}
                        timeDetail="8:50PM"
                        dateDetail="23 Sep 2021 "
                        quantityLike={like}
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
        </View>
    )
}

export default HeaderCommentForumFlatList

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 24,
    },
    commentContainer: {
        marginHorizontal: 24,
    },
    posted: {
        marginTop: 15,
    },
})
