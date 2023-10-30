import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBell } from '@components'
import { COLORS, BORDER, SIZES } from '@theme'

interface bannerNotificationProps {
    Icon?: () => JSX.Element
    title?: string
    name?: string
    description?: string
}

const BannerNotification = ({
    Icon,
    title,
    name,
    description,
}: bannerNotificationProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <IconBell fill={COLORS.Semantic_Dark_1} />
                </View>
                <Text style={styles.content}>Notification from Followers</Text>
            </View>
            <View style={styles.notificationDescription}>
                <Text style={styles.description}>
                    <Text style={styles.nameDes}>Photo Kid</Text> joined thanks
                    to you! You get 300tm!
                </Text>
            </View>
        </View>
    )
}

export default BannerNotification

const styles = StyleSheet.create({
    container: {},
    header: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: COLORS.DarkerPrimary,
        borderTopLeftRadius: BORDER.base,
        borderTopRightRadius: BORDER.base,
        paddingLeft: 26,
    },
    content: {
        fontSize: SIZES.font,
        fontWeight: '600',
        color: COLORS.Neutral0,
        marginLeft: 14,
    },
    notificationDescription: {
        backgroundColor: COLORS.Primary,
        paddingVertical: 22,
        borderBottomRightRadius: BORDER.base,
        borderBottomLeftRadius: BORDER.base,
    },
    description: {
        color: COLORS.White,
        lineHeight: 25,
        marginLeft: 24,
    },
    nameDes: {
        fontWeight: 'bold',
    },
})
