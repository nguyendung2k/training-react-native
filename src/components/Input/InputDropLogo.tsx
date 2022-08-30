import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CareDown from '../../assets/icons/CaretDown.svg'
import Input from './Input'
import { BORDER, COLORS } from '../../assets/constants/theme'

const InputDropLogo = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                <Image
                    source={require('../../assets/images/LogoInstagram.png')}
                />
                <View>
                    <TouchableOpacity>
                        <CareDown />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <View style={styles.input}>
                <Input value="@Yuki.Matsuura" />
            </View>
        </View>
    )
}

export default InputDropLogo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.BackgroundInput,
        height: 50,
        width: 94,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: BORDER.base,
        marginRight: 16,
    },

    input: {
        flex: 2,
    },
})
