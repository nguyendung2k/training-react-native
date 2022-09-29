import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
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

    console.log('dataComment:-------- ', dataComment)

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
            <View style={styles.flatlist}>
                <FlatList
                    data={comments}
                    renderItem={({ item }) => (
                        <Comment time="12h" item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={HeaderCommentForumFlatList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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
    flatlist: {
        marginBottom: 28,
    },
})
