import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { ButtonComponent } from '@components/Button'
import { COLORS, SIZES } from '@theme'

interface updateAvatarProps {
    avatar?: string
    onPress?: () => void
}

const UpdateAvatar = ({ avatar, onPress }: updateAvatarProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.image} />
            <ButtonComponent
                label="Choose picture"
                onPress={onPress}
                styleBtn={styles.btn}
                styleText={styles.txtBtn}
            />
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
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtn: {
        color: COLORS.Primary,
        fontSize: SIZES.medium,
        fontWeight: '600',
    },
})
