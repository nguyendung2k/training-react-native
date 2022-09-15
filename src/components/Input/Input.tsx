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
import { Eye, EyeSlash } from '../Svg/Icon'
import MessageError from '../MessageError/MessageError'

interface inputProps extends TextProps {
    value?: string
    placeholder?: string
    Icon?: () => JSX.Element
    onChangeText?: (value: string) => void | undefined
    onPress?: () => void | undefined
    title?: string
    secondary?: boolean
    isPassword?: boolean
    secureTextEntry?: boolean
    error?: React.ReactNode
}

export default function Input({
    placeholder,
    value,
    title,
    secondary,
    Icon,
    onChangeText,
    isPassword,
    error,
}: inputProps) {
    const [showPass, setShowPass] = useState<boolean>(true)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <TextInput
                placeholder={placeholder}
                style={[styles.input, secondary && styles.inputSecondary]}
                secureTextEntry={isPassword && showPass}
                value={value}
                onChangeText={onChangeText}
            />
            {error}
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.icon}
                onPress={handleShowPass}
            >
                {!!Icon && <Icon />}
                {isPassword &&
                    (showPass ? (
                        <EyeSlash stroke={COLORS.Primary} />
                    ) : (
                        <Eye stroke={COLORS.Primary} />
                    ))}
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
