import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface buttonNotificationProps {
    title?: string
    numberNotification?: string
    onPress?: () => void
}

const ButtonNotification = ({
    title,
    numberNotification,
    onPress,
}: buttonNotificationProps) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <View style={styles.btnContent}>
                <Text style={styles.btnTitle}>{title}</Text>
                <View style={styles.btnQuantity}>
                    <Text style={styles.btnTxt}>{numberNotification}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonNotification

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.Neutral1,
        borderRadius: BORDER.base,
        marginBottom: 12,
    },
    btnContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 21,
        marginHorizontal: 24,
    },
    btnTitle: {
        fontSize: SIZES.font,
        fontWeight: '500',
    },
    btnQuantity: {
        width: 28,
        height: 28,
        backgroundColor: COLORS.DarkerPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    btnTxt: {
        color: COLORS.White,
        fontSize: 12,
        fontWeight: '700',
    },
})
