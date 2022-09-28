import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IconComment, IconDotTime, IconHeart } from '../Svg/Icon'
import { useSelector } from 'react-redux'
import { BORDER, COLORS, SIZES } from '@theme'
import { RootState } from '@redux/store'

interface postedProps {
    Icon?: () => JSX.Element
    primary?: boolean
    secondary?: boolean
    onPress: () => void
    onLikePost?: () => void
    quantityLike?: number
    quantityComment?: string | number
    item: {
        id: string
        body: string
        image: string
        title: string
        name: string
        time: number
    }
}

const dataLikePostSelector = (state: RootState) => state.forum.like

const ListPost = ({
    onPress,
    onLikePost,
    primary,
    secondary,
    item,
    quantityLike,
    quantityComment,
}: postedProps) => {
    const checkLikePost = useSelector(dataLikePostSelector)
    const isLike = checkLikePost.includes(item.id)
    return (
        <View style={styles.posted}>
            <View style={styles.postedContainer}>
                <View>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.postedImage}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.postedContent}
                    onPress={onPress}
                >
                    <View style={styles.postedHeader}>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Text style={styles.postedName}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                            {secondary && (
                                <>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 2,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.Neutral4,
                                                fontWeight: '500',
                                                marginRight: 8,
                                            }}
                                        ></Text>
                                        {<IconDotTime fill={COLORS.Neutral4} />}
                                        <Text
                                            style={{
                                                color: COLORS.Neutral4,
                                                fontWeight: '500',
                                                marginLeft: 8,
                                            }}
                                        ></Text>
                                    </View>
                                </>
                            )}
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            {primary && (
                                <>
                                    {<IconDotTime fill={COLORS.Neutral4} />}
                                    <Text style={styles.postedTime}>17h</Text>
                                </>
                            )}
                        </View>
                    </View>
                    <View style={styles.postedBody}>
                        <View style={styles.postedTitle}>
                            <Text style={styles.postedTitle_Text}>
                                {item.title}
                            </Text>
                        </View>
                        <View style={styles.postedDescription}>
                            <Text style={styles.postedDes_Content}>
                                {item.body}
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.postImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.postedFooter}>
                        <View style={styles.postedFeedback}>
                            <TouchableOpacity onPress={onLikePost}>
                                <IconHeart
                                    stroke={
                                        isLike
                                            ? COLORS.Semantic4
                                            : COLORS.Neutral8
                                    }
                                    fill={
                                        isLike ? COLORS.Semantic4 : COLORS.White
                                    }
                                    strokeWidth={1.5}
                                />
                            </TouchableOpacity>
                            <Text style={styles.postedQuantityFeedback}>
                                {quantityLike}
                            </Text>
                        </View>
                        <View style={styles.postedFeedback}>
                            <TouchableOpacity style={styles.postedIconComment}>
                                <IconComment
                                    stroke={COLORS.Neutral8}
                                    fill={COLORS.White}
                                    strokeWidth={1.5}
                                />
                            </TouchableOpacity>
                            <Text style={styles.postedQuantityFeedback}>
                                {quantityComment}
                                {secondary && <Text> replies</Text>}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ListPost

const styles = StyleSheet.create({
    posted: {
        borderTopWidth: 1,
        borderTopColor: COLORS.Neutral2,
    },
    postedContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    postedImage: {
        width: 48,
        height: 48,
        borderWidth: 3,
        borderColor: COLORS.Semantic4,
        borderRadius: 100,
    },
    postedContent: {
        marginLeft: 16,
    },
    postedHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postedName: {
        color: COLORS.Neutral10,
        fontWeight: '600',
        fontSize: SIZES.medium,
        marginRight: 8,
    },
    postedTime: {
        color: COLORS.Neutral4,
        fontWeight: '500',
        fontSize: SIZES.medium,
        marginLeft: 8,
    },
    postedBody: {
        marginTop: 16,
    },
    postedTitle: {
        marginBottom: 10,
    },
    postedTitle_Text: {
        fontWeight: '600',
        fontSize: SIZES.font,
        color: COLORS.Neutral10,
    },

    postedDescription: {
        width: 302,
    },
    postedDes_Content: {
        width: 300,
        color: COLORS.Neutral8,
        marginBottom: 20,
    },
    postedDes_Tag: {
        color: COLORS.Primary,
    },
    postImage: {
        width: 302,
        height: 185,
        borderRadius: BORDER.base,
    },
    postedFooter: {
        marginTop: 24,
        flexDirection: 'row',
    },
    postedFeedback: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postedQuantityFeedback: {
        fontSize: SIZES.medium,
        color: COLORS.Neutral8,
        marginLeft: 7,
    },
    postedIconComment: {
        marginLeft: 24,
    },
})
