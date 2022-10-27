import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    TextProps,
    Image,
} from 'react-native'
import React, { useState } from 'react'
import { BORDER, COLORS, SIZES } from '@theme'
import { Eye, EyeSlash } from '@components/Svg'
import { ButtonComponent } from '@components/Button'

interface inputProps extends TextProps {
    value?: string | undefined
    placeholder?: string
    Icon?: React.ReactNode
    IconSearch?: React.ReactNode
    onChangeText?: (value: string) => void | undefined
    onPress?: () => void | undefined
    title?: string
    style?: any
    styleSearchInput?: any
    isPassword?: boolean
    secureTextEntry?: boolean
    error?: React.ReactNode
    introduction?: boolean
    onBlur?: any
    number?: boolean
    disable?: boolean
    inputReply?: boolean
    inputSearch?: boolean
    avatar?: string
}

const InputComponent = ({
    placeholder,
    value,
    title,
    introduction,
    Icon,
    isPassword,
    error,
    onBlur,
    number,
    disable,
    style,
    inputReply,
    avatar,
    inputSearch,
    IconSearch,
    styleSearchInput,
    onChangeText,
    onPress,
}: inputProps) => {
    const [showPass, setShowPass] = useState<boolean>(true)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    return (
        <View
            style={[
                styles.container,
                inputReply ? { flexWrap: 'nowrap' } : { flexWrap: 'wrap' },
            ]}
        >
            {inputReply && (
                <View style={[styles.image, { marginTop: 27 }]}>
                    <Image
                        source={{
                            uri: avatar,
                        }}
                        style={styles.imageAvatar}
                    />
                </View>
            )}
            <Text style={styles.title}>{title}</Text>
            {inputSearch && (
                <TouchableOpacity style={styleSearchInput} onPress={onPress}>
                    {IconSearch}
                </TouchableOpacity>
            )}
            <TextInput
                placeholder={placeholder}
                style={[
                    styles.input,
                    style,
                    {
                        paddingLeft: 16,
                        paddingBottom: 16,
                        paddingTop: 20,
                    },
                ]}
                secureTextEntry={isPassword && showPass}
                value={value}
                onChangeText={onChangeText}
                multiline={introduction && true}
                onBlur={onBlur}
                keyboardType={number ? 'numeric' : 'default'}
                editable={disable}
            />

            {error}
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.icon}
                onPress={handleShowPass}
            >
                {Icon}
                {isPassword &&
                    (showPass ? (
                        <EyeSlash stroke={COLORS.Primary} />
                    ) : (
                        <Eye stroke={COLORS.Primary} />
                    ))}
            </TouchableOpacity>
            {inputReply && (
                <View style={styles.btn}>
                    <ButtonComponent
                        onPress={onPress}
                        label="Reply"
                        styleBtn={styles.btnReply}
                        styleText={styles.txtBtnReply}
                    />
                </View>
            )}
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: 8,
        // width: '60%',
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
    btnReply: {
        backgroundColor: COLORS.Primary,
        width: 75,
        borderRadius: BORDER.base,
    },
    txtBtnReply: {
        textAlign: 'center',
        paddingVertical: 16,
        color: COLORS.White,
        fontSize: SIZES.medium,
        fontWeight: '600',
    },
    btn: {
        marginTop: 'auto',
        // width: 100,
        // height: 100,
        // backgroundColor: 'red',
    },
    image: {
        flex: 1,
        marginTop: 'auto',
    },

    imageAvatar: {
        width: 48,
        height: 48,
        borderRadius: 100,
    },
})
