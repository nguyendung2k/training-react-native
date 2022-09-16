import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import Posted from '../../components/Posted/Posted'

const ForumScreen = ({ navigation }: any) => {
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
                    <Posted
                        onPress={() =>
                            navigation.navigate('CommentForumScreen')
                        }
                        name="Esther Howard"
                        hour="17h"
                        title="New pokémon is coming this ye..."
                        contentHeader="There's nothing like booting up a Pokémon video game for the first time. Red heart"
                        contentContainer="In honor of "
                        contentTag="#NationalVideoGamesDay"
                        contentContainerEnd=", we want to know..."
                        contentFooter="Red heart Your favorite Pokémon video game Video game Which Pokémon video game you're currently playing"
                        quantityLike="1.2K"
                        quantityComment="2.4K"
                        primary
                    />
                    <Posted
                        onPress={() =>
                            navigation.navigate('CommentForumScreen')
                        }
                        name="Esther Howard"
                        hour="17h"
                        title="New pokémon is coming this ye..."
                        contentHeader="There's nothing like booting up a Pokémon video game for the first time. Red heart"
                        contentContainer="In honor of "
                        contentTag="#NationalVideoGamesDay"
                        contentContainerEnd=", we want to know..."
                        contentFooter="Red heart Your favorite Pokémon video game Video game Which Pokémon video game you're currently playing"
                        primary
                        quantityLike="1.2K"
                        quantityComment="2.4K"
                    />
                    <Posted
                        onPress={() =>
                            navigation.navigate('CommentForumScreen')
                        }
                        name="Esther Howard"
                        hour="17h"
                        title="New pokémon is coming this ye..."
                        contentHeader="There's nothing like booting up a Pokémon video game for the first time. Red heart"
                        contentContainer="In honor of "
                        contentTag="#NationalVideoGamesDay"
                        contentContainerEnd=", we want to know..."
                        contentFooter="Red heart Your favorite Pokémon video game Video game Which Pokémon video game you're currently playing"
                        primary
                        quantityLike="1.2K"
                        quantityComment="2.4K"
                    />
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
