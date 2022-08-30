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

interface inputSearchProps {
    placeholder?: string
    value?: string
    Icon?: () => JSX.Element
    onPress?: () => void
    onChangeText?: (value: string) => void | undefined
}

const InputSearch = ({
    Icon,
    onChangeText,
    placeholder,
    value,
    onPress,
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

        width: '100%',
        height: 58,
    },
})
