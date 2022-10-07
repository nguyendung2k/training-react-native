import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { ButtonNoBg } from '@components/Button'

interface updateAvatarProps {
    avatar?: string
    onPress?: () => void
}

const UpdateAvatar = ({ avatar, onPress }: updateAvatarProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.image} />
            <ButtonNoBg onPress={onPress} title="Choose picture" />
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
    image: {
        marginBottom: 21,
        width: 120,
        height: 120,
        borderRadius: 100,
    },
})
