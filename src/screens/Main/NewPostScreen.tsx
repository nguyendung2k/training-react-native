import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/constants/theme'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import NewPost from '../../components/NewPost/NewPost'

const NewPostScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.newPost}>
            <View style={styles.header}>
                <Header
                    title="New post"
                    showTextHeader
                    showIconAdd
                    post
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    onPress={() => navigation.navigate('ForumScreen')}
                />
            </View>
            <View style={styles.newPostContainer}>
                <NewPost />
            </View>
        </SafeAreaView>
    )
}

export default NewPostScreen

const styles = StyleSheet.create({
    newPost: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        marginHorizontal: 24,
        marginBottom: 28,
    },
    newPostContainer: {
        marginHorizontal: 24,
        borderTopWidth: 1,
        borderTopColor: COLORS.Neutral2,
    },
})
