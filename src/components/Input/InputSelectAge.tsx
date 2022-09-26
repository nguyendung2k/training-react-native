import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, BORDER, SIZES } from '@theme'

interface inputProps {
    value?: string
    onChangeText?: (value: string) => void | undefined
}

const InputSelectAge = ({ value, onChangeText }: inputProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.txtInput}
                value={value}
                onChangeText={onChangeText}
                keyboardType="numeric"
            />
        </View>
    )
}

export default InputSelectAge

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral6,
        paddingVertical: 17,
        width: '40%',
        marginTop: 32,
        borderRadius: BORDER.base,
    },
    txtInput: {
        color: COLORS.Neutral0,
        fontWeight: '600',
        fontSize: SIZES.font,
        marginLeft: 23,
    },
})
