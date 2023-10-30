import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconPickImage } from '@components'
import { COLORS, BORDER } from '@theme'

interface buttonProps {
    onPress?: () => void
}

const ButtonPickImage = ({ onPress }: buttonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <IconPickImage />
            </View>
        </TouchableOpacity>
    )
}

export default ButtonPickImage

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral1,
        width: 60,
        borderRadius: BORDER.base,
    },
    content: {
        paddingHorizontal: 12.5,
        paddingVertical: 12.5,
    },
})
