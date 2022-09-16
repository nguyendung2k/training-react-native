import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
} from 'react-native'
import React from 'react'
import Input from './Input'
import ButtonReply from '../Button/ButtonReply'
import { COLORS } from '../../assets/constants/theme'

const InputReplyPost = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.image}>
                    <Image
                        source={require('../../assets/images/Avatar1.png')}
                        style={styles.imageAvatar}
                    />
                </View>
                <View style={styles.inputTxt}>
                    <Input placeholder="Your reply" tertiary />
                </View>
                <View style={styles.btn}>
                    <ButtonReply />
                </View>
            </View>
        </View>
    )
}

export default InputReplyPost

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        borderTopWidth: 1,
        borderTopColor: COLORS.Neutral2,
        marginBottom: 23,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    inputTxt: {
        flex: 2.9,
    },
    btn: {
        flex: 1,
        marginTop: 'auto',
    },
})
