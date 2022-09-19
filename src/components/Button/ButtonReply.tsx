import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface buttonProps {
    onPress?: () => void
}

const ButtonReply = ({ onPress }: buttonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
            <Text style={styles.btnTxt}>Reply</Text>
        </TouchableOpacity>
    )
}

export default ButtonReply

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.Primary,
        width: 75,
        borderRadius: BORDER.base,
    },
    btnTxt: {
        textAlign: 'center',
        paddingVertical: 16,
        color: COLORS.White,
        fontSize: SIZES.medium,
        fontWeight: '600',
    },
})
