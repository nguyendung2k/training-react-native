import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@theme'

interface checkBoxProps {
    onPress?: () => void | boolean
    Icon?: () => JSX.Element | null
    secondary?: boolean
    value?: string
    check?: boolean
}

const CheckBox = ({
    onPress,
    secondary,
    Icon,
    value,
    check,
}: checkBoxProps) => {
    return (
        <View style={[secondary && styles.container]}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.checkBox, check && styles.checkBox_Secondary]}
            >
                {!!Icon && check && <Icon />}
            </TouchableOpacity>
            {secondary && <Text style={styles.txt}>{value}</Text>}
        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    checkBox: {
        width: 32,
        height: 32,
        borderColor: COLORS.Primary,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 28,
    },
    checkBox_Secondary: {
        backgroundColor: COLORS.Primary,
    },
    txt: {
        fontSize: SIZES.font,
        color: COLORS.Neutral0,
        fontWeight: '400',
    },
})
