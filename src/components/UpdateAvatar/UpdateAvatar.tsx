import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonNoBg from '../Button/ButtonNoBg'

const UpdateAvatar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/AvatarLarge.png')}
                style={{ marginBottom: 21 }}
            />
            <ButtonNoBg title="Choose picture" />
        </View>
    )
}

export default UpdateAvatar

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 52,
    },
})
