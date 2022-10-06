import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { InputReplyPost, Posted } from '@components'
import { RootState } from '@redux/store'
import { addComment, likePostById } from '@redux'

const userUpdateSelector = (state: RootState) => state.user.userUpdate
const dataUserSelector = (state: RootState) => state.user.userDetail

const likePostSelector = (state: RootState) => state.forum.like
const dataLikePostSelector = (state: RootState) => state.forum.likes

const dataPostSelector = (state: RootState) => state.forum.posts
const dataCommentSelector = (state: RootState) => state.forum.comments

const HeaderCommentForumFlatList = () => {
    const dispatch = useDispatch()
    const idFromParam: any = useRoute().params
    const dataComment = useSelector(dataCommentSelector)
    const dataLike = useSelector(dataLikePostSelector)

    const dataPost = useSelector(dataPostSelector)
    const dataUser = useSelector(dataUserSelector)

    const checkLikePost = useSelector(likePostSelector)
    const userUpdate = useSelector(userUpdateSelector)

    const [valueText, setValueText] = useState<string>('')
    const [dataPostById, setDataPostById] = useState<any>()

    const amountReply = dataComment.find(
        (comment) => comment.post_id === idFromParam
    )

    const handleAmountLike = (id: string) => {
        const amountLike = dataLike.find((like) => like.id === id)
        return amountLike ? amountLike?.data.length : 0
    }

    useEffect(() => {
        handleFindPostById(idFromParam)
    }, [idFromParam])

    const handleOnLikePost = (id: string) => {
        dispatch(likePostById(id))
        // if (checkLikePost.includes(id)) {
        //     dispatch(onChangeUnlikePost())
        // } else {
        //     dispatch(onChangeLikePost())
        // }
    }

    const handleFindPostById = (idFromParam: string) => {
        const findPost = dataPost.find((item) => {
            return item.id === idFromParam
        })

        setDataPostById(findPost)
    }

    const handleComment = (id: string) => {
        if (valueText) {
            let copyDataComment = [...dataComment]
            copyDataComment.forEach((item, index) => {
                if (item.post_id === id) {
                    copyDataComment[index] = {
                        ...copyDataComment[index],
                        data: [
                            {
                                name: dataUser.full_name,
                                avatar: userUpdate.image
                                    ? userUpdate.image
                                    : dataUser.image,
                                body: valueText,
                                id: Math.random().toString(),
                                createdAt: new Date().toISOString(),
                            },
                            ...copyDataComment[index].data,
                        ],
                    }
                } else if (item.post_id !== id) {
                    copyDataComment = [
                        ...copyDataComment,
                        {
                            post_id: id,
                            data: [
                                {
                                    name: dataUser.full_name,
                                    avatar: userUpdate.image
                                        ? userUpdate.image
                                        : dataUser.image,
                                    body: valueText,
                                    id: Math.random().toString(),
                                    createdAt: Date.now().toString(),
                                },
                            ],
                        },
                    ]
                }
            })
            setValueText('')
            dispatch(addComment(copyDataComment))
        }
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.commentContainer}>
                <View style={styles.posted}>
                    <Posted
                        id={dataPostById?.id}
                        name={dataPostById?.name}
                        title={dataPostById?.title}
                        contentHeader={dataPostById?.body}
                        quantityComment={
                            amountReply?.data.length === undefined
                                ? 0
                                : amountReply.data.length
                        }
                        secondary
                        onLikePost={() => handleOnLikePost(dataPostById?.id)}
                        image_link={dataPostById?.image}
                        timeDetail="8:50PM"
                        dateDetail={dataPostById?.createdAt}
                        quantityLike={handleAmountLike(idFromParam)}
                    />
                    <View>
                        <InputReplyPost
                            onPress={() => handleComment(dataPostById.id)}
                            avatar={dataUser.image}
                            value={valueText}
                            onChangeText={setValueText}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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
