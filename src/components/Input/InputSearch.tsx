import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState } from 'react'
import Header from '../Header/Header'
import { BORDER, COLORS } from '../../assets/constants/theme'
import { IconSearchDetail } from '../Svg/Icon'

interface inputSearchProps {
    placeholder?: string
    value?: string
    Icon?: () => JSX.Element
    onPress?: () => void
    onChangeText?: (value: any) => void | undefined
    secondary?: boolean
}

const InputSearch = ({
    Icon,
    onChangeText,
    onPress,
    placeholder,
    value,
    secondary,
}: inputSearchProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={onPress}>
                    {!!Icon && <Icon />}
                </TouchableOpacity>
                <TextInput
                    style={styles.txt}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                />
                {secondary && (
                    <TouchableOpacity onPress={onPress} style={styles.icon}>
                        <IconSearchDetail stroke={COLORS.Neutral10} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default InputSearch

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BackgroundInput,
        marginTop: 20,
        marginBottom: 36,
        borderRadius: BORDER.base,
    },
    content: {
        paddingLeft: 17,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        marginLeft: 20,
        width: '70%',
        height: 58,
    },
    icon: {
        height: 30,
    },
})
