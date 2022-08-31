import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CardId from './CardId'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

const CardInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.image}>
                    <Image
                        source={require('../../assets/images/Avatar1.png')}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Matsuura Yuki</Text>
                    <CardId />
                </View>
            </View>
        </View>
    )
}

export default CardInfo

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: BORDER.base,
        marginVertical: 24,
    },
    content: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 18,
        alignItems: 'center',
        marginLeft: 18,
    },
    image: {
        marginRight: 20,
    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        marginBottom: 7,
    },
})
