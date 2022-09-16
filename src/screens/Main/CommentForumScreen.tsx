import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import Posted from '../../components/Posted/Posted'
import InputReplyPost from '../../components/Input/InputReplyPost'
import Comment from '../../components/Comment/Comment'

const CommentForumScreen = ({ navigation }: any) => {
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
                            name="Esther Howard"
                            title="New pokémon is coming this ye..."
                            contentHeader="There's nothing like booting up a Pokémon video game for the first time. Red heart"
                            contentContainer="In honor of "
                            contentTag="#NationalVideoGamesDay"
                            contentContainerEnd=", we want to know..."
                            contentFooter="Red heart Your favorite Pokémon video game Video game Which Pokémon video game you're currently playing"
                            quantityLike="1.2K"
                            quantityComment="2.4K"
                            secondary
                            timeDetail="8:50PM"
                            dateDetail="23 Sep 2021 "
                        />
                        <View>
                            <InputReplyPost />
                        </View>
                    </View>
                </View>
                <View style={styles.commentContent}>
                    <Comment />
                    <Comment />
                    <Comment />
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
