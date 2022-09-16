import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, BORDER, SIZES } from '../../assets/constants/theme'
import React from 'react'

interface btnProps {
    label: string
    style?: any
    secondary?: boolean
    tertiary?: boolean
    quaternary?: boolean
    quinary?: boolean
    disable?: boolean
    Icon?: () => JSX.Element
    onPress?: () => void | undefined
    disabled?: boolean
}

export default function ButtonForm({
    label,
    style,
    secondary,
    tertiary,
    quaternary,
    quinary,
    disable,
    disabled,
    onPress,
    Icon,
}: btnProps) {
    return (
        <View>
            <TouchableOpacity
                disabled={disabled}
                style={[
                    styles.btn,
                    styles.btn_Primary,
                    secondary && styles.btn_Secondary,
                    tertiary && styles.btn_Tertiary,
                    quaternary && styles.btn_Quaternary,
                    disable && styles.btn_Disable,
                    quinary && styles.btn_Quinary,
                    style,
                ]}
                onPress={onPress}
            >
                <Text
                    style={[
                        styles.text,
                        styles.textLogin,
                        secondary && styles.textBackLogin,
                        tertiary && styles.textAddNew,
                        quaternary && styles.textNext,
                        quinary && styles.txt_Quinary,
                        disable && styles.txtDisable,
                    ]}
                >
                    {label}
                </Text>
                {!!Icon && <Icon />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        fontWeight: '600',
        fontSize: SIZES.medium,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_Primary: {
        backgroundColor: COLORS.Primary,
        color: COLORS.White,
    },
    btn_Secondary: {
        backgroundColor: COLORS.White,
        color: COLORS.Neutral8,
        borderColor: COLORS.Neutral8,
        borderWidth: 1,
    },
    btn_Tertiary: {
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: COLORS.Neutral4,
        backgroundColor: COLORS.White,
    },
    btn_Quaternary: {
        borderRadius: BORDER.base,
        borderColor: COLORS.Primary,
        backgroundColor: COLORS.White,
        borderWidth: 2,
    },
    btn_Quinary: {
        borderRadius: BORDER.base,
        borderColor: COLORS.Semantic4,
        backgroundColor: COLORS.White,
        borderWidth: 2,
    },
    btn_Disable: {
        backgroundColor: COLORS.White,
        borderColor: COLORS.Neutral4,
        borderWidth: 2,
    },
    text: {
        fontSize: SIZES.large,
        fontWeight: '800',
        marginRight: 10,
    },
    textLogin: {
        color: COLORS.White,
    },
    textBackLogin: {
        color: COLORS.Neutral8,
    },
    textAddNew: {
        color: COLORS.Neutral4,
        fontSize: SIZES.medium,
    },
    textNext: {
        color: COLORS.Primary,
        fontWeight: '600',
        fontSize: SIZES.medium,
    },
    txtDisable: {
        color: COLORS.Neutral3,
    },
    txt_Quinary: {
        fontSize: SIZES.medium,
        color: COLORS.Semantic4,
        fontWeight: '600',
        marginRight: 10,
    },
})
