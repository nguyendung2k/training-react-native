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
import { useSelector } from 'react-redux'

interface inputReplyProps {
    avatar?: string
    value?: string
    onPress: (value: string) => void
    onChangeText?: (value: string) => void
}

const userUpdateSelector = (state: any) => state.home.user

const InputReplyPost = ({
    avatar,
    value,
    onPress,
    onChangeText,
}: inputReplyProps) => {
    const userUpdate = useSelector(userUpdateSelector)

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.image}>
                    <Image
                        source={{
                            uri: userUpdate.image ? userUpdate.image : avatar,
                        }}
                        style={styles.imageAvatar}
                    />
                </View>
                <View style={styles.inputTxt}>
                    <Input
                        placeholder="Your reply"
                        tertiary
                        value={value}
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={styles.btn}>
                    <ButtonReply onPress={onPress} />
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
