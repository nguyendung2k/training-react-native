import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Comment, HeaderCommentForumFlatList } from '@components'
import { RootState } from '@redux/store'
import { COLORS } from '@theme'
import { useRoute } from '@react-navigation/native'

const dataCommentSelector = (state: RootState) => state.forum.comments

const CommentForumScreen = () => {
    const idFromParam = useRoute().params
    const [comments, setComments] = useState<any>([])
    const dataComment = useSelector(dataCommentSelector)

    useEffect(() => {
        handleGetForumComment(idFromParam)
    }, [])

    const handleGetForumComment = (id: string) => {
        const findComment: any = dataComment.filter((item) => {
            console.log('item: ', item)
            return item.post_id === id
        })
        setComments(findComment[0]?.data)
    }

    return (
        <SafeAreaView style={styles.commentForum}>
            <View>
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
        backgroundColor: COLORS.White,
    },
})
