import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface buttonProps {
    onPress?: () => void
}

const ButtonChooseImage = ({ onPress }: buttonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.txt}>Choose picture</Text>
        </TouchableOpacity>
    )
}

export default ButtonChooseImage

const styles = StyleSheet.create({
    txt: {
        color: COLORS.Primary,
        fontSize: SIZES.medium,
        marginTop: 21,
    },
})
