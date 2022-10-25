import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface button {
    label: string | number | null
    styleBtn?: any
    styleText?: any
    disabled?: boolean
    Icon?: React.ReactNode
    IconRight?: React.ReactNode
    onPress?: () => void
}

const ButtonComponent = ({
    label,
    styleBtn,
    disabled,
    Icon,
    onPress,
    styleText,
    IconRight,
}: button) => {
    return (
        <View>
            <TouchableOpacity
                disabled={disabled}
                style={[styleBtn]}
                onPress={onPress}
                activeOpacity={0.9}
            >
                {IconRight}
                <Text style={[styleText]}>{label}</Text>
                {Icon}
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent
