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
    primary?: boolean
    tertiary?: boolean
    isPassword?: boolean
    secureTextEntry?: boolean
    error?: React.ReactNode
    introduction?: React.ReactNode
}

export default function Input({
    placeholder,
    value,
    title,
    secondary,
    primary,
    tertiary,
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
                ]}
                secureTextEntry={isPassword && showPass}
                value={value}
                onChangeText={onChangeText}
                multiline={true}
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
        // paddingTop: 20,
        // paddingBottom: 16,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: 8,
        width: '100%',
        // position: 'relative',
    },
    inputPrimary: {
        paddingLeft: 16,
        paddingBottom: 16,
        paddingTop: 20,
        // height: 58,
    },
    tertiaryInput: {
        backgroundColor: COLORS.White,
        paddingBottom: 16,
        paddingTop: 20,
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
        // height: 120,
        paddingTop: 16,
        paddingHorizontal: 26,
        paddingBottom: 50,
        lineHeight: 20,
        // width: '100%',
    },
})
