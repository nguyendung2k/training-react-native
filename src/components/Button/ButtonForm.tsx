import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, BORDER, SIZES } from '../../assets/constants/theme'
import React from 'react'

interface btnProps {
    label: string
    onPress?: () => void | undefined
    style?: any
    secondary?: boolean
    tertiary?: boolean
}

export default function ButtonForm({
    label,
    onPress,
    style,
    secondary,
    tertiary,
}: btnProps) {
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.btn,
                    styles.btn_Primary,
                    secondary && styles.btn_Secondary,
                    style,
                ]}
                onPress={onPress}
            >
                <Text
                    style={[
                        styles.text,
                        styles.textLogin,
                        secondary && styles.textBackLogin,
                    ]}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        fontWeight: '600',
        fontSize: 16,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        alignItems: 'center',
    },
    btn_Primary: {
        backgroundColor: COLORS.Primary,
        color: COLORS.White,
    },
    btn_Secondary: {
        backgroundColor: COLORS.White,
        color: COLORS.Neutral8,
        borderColor: COLORS.Neutral8,
        borderWidth: 2,
    },

    text: {
        fontSize: SIZES.large,
        fontWeight: '800',
    },
    textLogin: {
        color: COLORS.White,
    },
    textBackLogin: {
        color: COLORS.Neutral8,
    },
})
