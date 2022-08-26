import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CareDown from '../../assets/icons/CaretDown.svg'
import Input from './Input'
import { BORDER, COLORS } from '../../assets/constants/theme'

const InputDropLogo = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/images/LogoInstagram.png')}
                />
                <View>
                    <TouchableOpacity>
                        <CareDown />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.input}>
                <Input value="@Yuki.Matsuura" />
            </View>
        </TouchableOpacity>
    )
}

export default InputDropLogo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 20,
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
