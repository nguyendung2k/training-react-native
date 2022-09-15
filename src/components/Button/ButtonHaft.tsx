import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface btnProps {
    label?: string
    primary?: boolean
    secondary?: boolean
    tertiary?: boolean
    quaternary?: boolean
    onPress?: () => void | undefined
}

const ButtonHaft = ({
    label,
    primary,
    secondary,
    tertiary,
    quaternary,
    onPress,
}: btnProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.btn,
                    primary && styles.btnPrimary,
                    secondary && styles.btnSecondary,
                    tertiary && styles.btnTertiary,
                    quaternary && styles.btnRejectFollow,
                ]}
                onPress={onPress}
            >
                <Text
                    style={[
                        styles.label,
                        secondary && styles.labelSecondary,
                        tertiary && styles.labelTertiary,
                        quaternary && styles.labelQuaternary,
                    ]}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonHaft

const styles = StyleSheet.create({
    container: {
        marginTop: 26,
        width: '45%',
    },
    btn: {
        // paddingHorizontal: 48,
        paddingVertical: 16,
        borderRadius: BORDER.base,
    },
    btnPrimary: {
        backgroundColor: COLORS.Primary,
    },
    btnSecondary: {
        backgroundColor: COLORS.Neutral8,
        borderWidth: 1,
        borderColor: COLORS.Neutral4,
    },
    btnTertiary: {
        borderWidth: 1,
        borderColor: COLORS.Neutral6,
        backgroundColor: COLORS.Neutral0,
    },
    btnRejectFollow: {
        backgroundColor: COLORS.Neutral1,
        borderWidth: 1,
        borderColor: COLORS.Neutral4,
    },

    label: {
        color: COLORS.Neutral0,
        fontWeight: '600',
        fontSize: SIZES.medium,
        textAlign: 'center',
    },
    labelSecondary: {
        color: COLORS.Neutral4,
    },
    labelTertiary: {
        color: COLORS.Neutral6,
    },
    labelQuaternary: {
        color: COLORS.Neutral4,
    },
})
