import { StyleSheet, View, SafeAreaView } from 'react-native'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Comment,
    Header,
    HeaderCommentForumFlatList,
    IConBack,
} from '@components'
import { RootState } from '@redux/store'
import { COLORS } from '@theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import { stackScreenProp } from '@navigation/type'

const dataCommentSelector = (state: RootState) => state.forum.comments

const CommentForumScreen = () => {
    const idFromParam: any = useRoute().params
    const navigation = useNavigation<stackScreenProp>()

    const [comments, setComments] = useState<
        {
            avatar: string
            body: string
            id: string
            name: string
            createAt: string
        }[]
    >([])
    const dataComment = useSelector(dataCommentSelector)

    useEffect(() => {
        handleGetForumComment(idFromParam)
    }, [dataComment])

    const handleGetForumComment = (id: string) => {
        const findComment = dataComment.filter((item) => {
            return item.post_id === id
        })
        setComments(findComment[0]?.data)
    }

    return (
        <SafeAreaView style={styles.commentForum}>
            <View style={styles.header}>
                <Header
                    onPress={() => navigation.navigate('ForumScreen')}
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                />
            </View>
            <KeyboardAwareFlatList
                data={comments}
                renderItem={({ item }) => <Comment time="12h" item={item} />}
                ListHeaderComponent={HeaderCommentForumFlatList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

export default CommentForumScreen

const styles = StyleSheet.create({
    commentForum: {
        flex: 1,
        backgroundColor: COLORS.Neutral0,
    },
    header: {
        marginHorizontal: 24,
    },
    flatList: {
        marginBottom: 28,
    },
})
