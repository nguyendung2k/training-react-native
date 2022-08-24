import {
    StyleSheet,
    View,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/constants/theme'

interface inputProps extends TextInputProps {
    secureTextEntry?: boolean
    values?: string
    placeholder?: string
    name?: string
    Icon?: any
    handleChange?: (value: string) => void
    onPress?: () => void | undefined
}

export default function Input({
    style,
    placeholder,
    Icon,
    secureTextEntry,
    values,
    handleChange,
    onPress,
}: inputProps) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                style={[styles.input, style]}
                secureTextEntry={secureTextEntry}
                value={values}
                onChangeText={handleChange}
            />
            <TouchableOpacity style={styles.icon} onPress={onPress}>
                {!!Icon && <Icon />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontWeight: '400',
        paddingTop: 20,
        paddingBottom: 16,
        paddingLeft: 16,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: 8,
        width: '100%',
        position: 'relative',
    },
    inputText: {
        color: COLORS.Neutral10,
    },
    icon: {
        right: 16,
        position: 'absolute',
    },
})
