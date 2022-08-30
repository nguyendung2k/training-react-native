import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface buttonProps {
    onPress?: () => void
    title?: string
    Icon?: () => JSX.Element
}

const ButtonNoBg = ({ onPress, title, Icon }: buttonProps) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.txt}>{title}</Text>
            {!!Icon && <Icon />}
        </TouchableOpacity>
    )
}

export default ButtonNoBg

const styles = StyleSheet.create({
    txt: {
        color: COLORS.Primary,
        fontSize: SIZES.medium,
        marginRight: 14,
        fontWeight: '600',
    },
    btn: {
        flexDirection: 'row',
        marginTop: 21,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
