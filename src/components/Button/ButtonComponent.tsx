import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@theme'

interface button {
    label?: string | number | null
    styleBtn?: any
    styleText?: any
    disabled?: boolean
    Icon?: React.ReactNode
    IconRight?: React.ReactNode
    opacity?: number
    notice?: boolean
    title?: string
    numberNotification?: string
    onPress?: (value?: any) => void
}

const ButtonComponent = ({
    label,
    styleBtn,
    disabled,
    Icon,
    styleText,
    IconRight,
    opacity,
    notice,
    title,
    numberNotification,
    onPress,
}: button) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styleBtn]}
            onPress={onPress}
            activeOpacity={opacity}
        >
            {IconRight}
            <Text style={[styleText]}>{label}</Text>
            {Icon}
            {notice && (
                <View style={styles.btnContent}>
                    <Text style={styles.btnTitle}>{title}</Text>
                    <View style={styles.btnQuantity}>
                        <Text style={styles.btnTxt}>{numberNotification}</Text>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default ButtonComponent
