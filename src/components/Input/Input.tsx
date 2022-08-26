import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    StyleProp,
    TextStyle,
    Text,
    TextProps,
} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface inputProps extends TextProps {
    secureTextEntry?: boolean
    value?: string
    placeholder?: string
    // style?: StyleProp<TextStyle> | undefined
    Icon?: () => JSX.Element
    onChangeText?: (value: string) => void | undefined
    onPress?: () => void | undefined
    title?: string
    secondary?: boolean
}

export default function Input({
    // style,
    placeholder,
    secureTextEntry,
    value,
    title,
    secondary,
    Icon,
    onChangeText,
    onPress,
}: inputProps) {
    const [showPass, setShowPass] = useState<boolean>(true)

    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.input, secondary && styles.inputSecondary]}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.icon}
                onPress={onPress}
            >
                {!!Icon && <Icon />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    inputPrimary: {},
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
    icon: {
        position: 'absolute',
        right: 16,
        top: '54%',
    },
    title: {
        fontWeight: '500',
        fontSize: SIZES.medium,
        color: COLORS.Neutral4,
        marginBottom: 4,
        marginTop: 16,
        textAlign: 'left',
    },
    inputSecondary: {
        fontWeight: '400',
        height: 120,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: 8,
        width: '100%',
        position: 'relative',
    },
})
