import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    TextProps,
} from 'react-native'
import React, { useState } from 'react'
import { Eye, EyeSlash } from '@components'
import { COLORS, SIZES } from '@theme'

interface inputProps extends TextProps {
    value?: string
    placeholder?: string
    Icon?: () => JSX.Element
    onChangeText?: (value: string) => void | undefined
    onPress?: () => void | undefined
    title?: string
    secondary?: boolean
    primary?: boolean
    tertiary?: boolean
    quinary?: boolean
    senary?: boolean
    isPassword?: boolean
    secureTextEntry?: boolean
    error?: React.ReactNode
    introduction?: boolean
}

export default function Input({
    placeholder,
    value,
    title,
    secondary,
    primary,
    tertiary,
    quinary,
    senary,
    introduction,
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
                style={[
                    styles.input,
                    primary && styles.inputPrimary,
                    secondary && styles.inputSecondary,
                    tertiary && styles.tertiaryInput,
                    quinary && styles.quinaryInput,
                    senary && styles.inputAddNewPost,
                    introduction && styles.introduction,
                ]}
                secureTextEntry={isPassword && showPass}
                value={value}
                onChangeText={onChangeText}
                multiline={introduction && true}
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
        // fontWeight: '400',
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: 8,
        width: '100%',
        // position: 'relative',
    },
    inputPrimary: {
        paddingLeft: 16,
        paddingBottom: 16,
        paddingTop: 20,
    },
    inputSecondary: {
        // height: 120,
        paddingTop: 16,
        paddingBottom: 55,
        // width: '100%',
    },
    tertiaryInput: {
        backgroundColor: COLORS.White,
        paddingBottom: 16,
        paddingTop: 20,
    },
    quinaryInput: {
        backgroundColor: COLORS.White,
        paddingBottom: 35,
        width: 302,
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

    introduction: {
        paddingHorizontal: 26,
        paddingBottom: 50,
        lineHeight: 20,
    },
    inputAddNewPost: {
        paddingBottom: 150,
        width: 302,
        backgroundColor: COLORS.White,
    },
})
