import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IconX } from '../Svg/Icon'
import { BORDER, COLORS } from '../../assets/constants/theme'

const ImagePost = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btnCancel}>
                    <IconX stroke={COLORS.White} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/images/ImagePost.png')}
                        style={styles.image}
                    />
                    <View style={{ width: 10 }}></View>
                </View>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btnCancel}>
                    <IconX stroke={COLORS.White} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/images/ImagePost.png')}
                        style={styles.image}
                    />
                    <View style={{ width: 10 }}></View>
                </View>
            </View>
        </View>
    )
}

export default ImagePost

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: 'row',
    },
    content: {
        marginBottom: 20,
    },
    btnCancel: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.63)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 8,
        top: 10,
        zIndex: 100,
    },
    image: {
        width: 146,
        height: 183,
        borderRadius: BORDER.base,
        position: 'relative',
    },
})
