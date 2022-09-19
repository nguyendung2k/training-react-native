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
import { apiComment } from './../../services/comment'
import {
    addComment,
    getComment,
    likePostById,
} from '../../redux/slices/homeSlice'

const dataCommentSelector = (state: any) => state.home.comments
const quantityLikePostSelector = (state: any) => state.home.quantity_like

const dataUserSelector = (state: any) => state.auth.user

const CommentForumScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const dataComment = useSelector(dataCommentSelector)
    const dataUser = useSelector(dataUserSelector)
    const quantityLike = useSelector(quantityLikePostSelector)

    const idFromParam = useRoute().params

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
                            contentContainer="In honor of "
                            contentTag="#NationalVideoGamesDay"
                            contentContainerEnd=", we want to know..."
                            contentFooter="Red heart Your favorite Pokémon video game Video game Which Pokémon video game you're currently playing"
                            quantityLike={quantityLike}
                            quantityComment={postById.quantity_comment}
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
                    {dataComment.map((item: any) => {
                        return (
                            <Comment
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                time="17h"
                                avatar={item.avatar}
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
