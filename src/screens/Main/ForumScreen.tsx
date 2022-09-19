import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import Posted from '../../components/Posted/Posted'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, likePostById } from '../../redux/slices/homeSlice'

const dataPostsSelector = (state: any) => state.home.posts

const likePostSelector = (state: any) => state.home.like
const quantityLikePostSelector = (state: any) => state.home.quantity_like

const ForumScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const dataPosts = useSelector(dataPostsSelector)
    const quantityLike = useSelector(quantityLikePostSelector)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const handlePress = (id: any) => {
        navigation.navigate('CommentForumScreen', id)
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
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.contentPost}>
                    {dataPosts.map((item: any) => {
                        return (
                            <Posted
                                key={item.id}
                                id={item.id}
                                onPress={() => handlePress(item.id)}
                                name="Esther Howard"
                                hour="17h"
                                title={item?.title}
                                contentHeader={item?.body}
                                contentContainer="In honor of "
                                contentTag="#NationalVideoGamesDay"
                                contentContainerEnd=", we want to know..."
                                contentFooter="Red heart Your favorite Pokémon video game Video game Which Pokémon video game you're currently playing"
                                quantityLike={quantityLike}
                                quantityComment={item?.quantity_comment}
                                image_link={item?.image}
                                primary
                                onLikePost={() => handleOnLikePost(item.id)}
                            />
                        )
                    })}
                </View>
            </ScrollView>
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
    content: {},
    contentPost: {
        marginHorizontal: 24,
    },
})
