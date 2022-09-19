import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'
import { IconComment, IconDotTime, IconHeart } from '../Svg/Icon'
import { useSelector } from 'react-redux'

interface postedProps {
    Icon?: () => JSX.Element
    primary?: boolean
    secondary?: boolean
    onPress?: () => void
    name?: string
    date?: string
    hour?: string
    title?: string
    timeDetail?: string
    dateDetail?: string
    contentHeader?: string
    contentTag?: string
    contentContainer?: string
    contentContainerEnd?: string
    contentFooter?: string
    quantityLike?: string
    quantityComment?: string
    image_link: string
    onLikePost?: () => void
    id: string
}

const dataLikePostSelector = (state: any) => state.home.like

const Posted = ({
    onPress,
    onLikePost,
    primary,
    name,
    date,
    hour,
    title,
    contentHeader,
    contentContainer,
    contentContainerEnd,
    contentFooter,
    contentTag,
    quantityComment,
    quantityLike,
    secondary,
    timeDetail,
    dateDetail,
    image_link,
    id,
}: postedProps) => {
    const checkLikePost: any[] = useSelector(dataLikePostSelector)
    const isLike = checkLikePost.includes(id)
    // console.log('checkLikePost-----', checkLikePost)
    // const [isLike, setIsLike] = useState<boolean>(false)
    return (
        <View style={styles.posted}>
            <View style={styles.postedContainer}>
                <View>
                    <Image
                        source={{ uri: image_link }}
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
                                <Text style={styles.postedName}>{name}</Text>
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
                                        >
                                            {timeDetail}
                                        </Text>
                                        {<IconDotTime fill={COLORS.Neutral4} />}
                                        <Text
                                            style={{
                                                color: COLORS.Neutral4,
                                                fontWeight: '500',
                                                marginLeft: 8,
                                            }}
                                        >
                                            {dateDetail}{' '}
                                        </Text>
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
                                    <Text style={styles.postedTime}>
                                        {hour}
                                    </Text>
                                </>
                            )}
                        </View>
                    </View>
                    <View style={styles.postedBody}>
                        <View style={styles.postedTitle}>
                            <Text style={styles.postedTitle_Text}>{title}</Text>
                        </View>
                        <View style={styles.postedDescription}>
                            <Text style={styles.postedDes_Content}>
                                {contentHeader}
                            </Text>
                            <Text style={styles.postedDes_Content}>
                                {contentContainer}{' '}
                                <Text style={styles.postedDes_Tag}>
                                    {contentTag}
                                </Text>
                                {contentContainerEnd}
                            </Text>
                            <Text style={styles.postedDes_Content}>
                                {contentFooter}
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image
                                source={{ uri: image_link }}
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
                                {secondary && <Text>likes</Text>}
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

export default Posted

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