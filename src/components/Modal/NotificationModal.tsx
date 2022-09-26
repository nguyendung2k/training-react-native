import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '@theme'

interface notificationModalProps {
    name: string
    ICon?: () => JSX.Element
    onPress?: () => void
}

const NotificationModal = ({ name, ICon, onPress }: notificationModalProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.container}
        >
            <View style={styles.content}>
                <TouchableOpacity>{!!ICon && <ICon />}</TouchableOpacity>
                <Text style={styles.infoNotice}>
                    You and
                    <Text style={styles.blockText}> {name} </Text>
                    have become friends
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NotificationModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 382,
        height: 84,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: BORDER.base,
        marginBottom: 10,
    },
    content: {
        flexDirection: 'row',
        marginTop: 23,
        marginBottom: 21,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    blockText: {
        color: COLORS.DarkerPrimary,
        fontWeight: '600',
    },
    infoNotice: {
        fontSize: SIZES.medium,
        fontWeight: '400',
        width: 303,
        marginLeft: 18,
        color: COLORS.Neutral6,
    },
})
