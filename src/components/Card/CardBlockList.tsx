import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, BORDER, SIZES } from '@theme'
import { ButtonForm } from '@components/Button'

interface cardBlockProps {
    name: string
}

const CardBlockList = ({ name }: cardBlockProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/images/Avatar1.png')}
                        style={styles.image}
                    />
                    <Text style={styles.nameBlock}>{name}</Text>
                </View>
                <View style={styles.btn}>
                    <ButtonForm secondary label="Remove block" />
                </View>
            </View>
        </View>
    )
}

export default CardBlockList

const styles = StyleSheet.create({
    container: {
        height: 162,
        width: 366,
        backgroundColor: COLORS.ColorCardBlock,
        borderRadius: BORDER.base,
        marginTop: 24,
    },
    content: {
        marginHorizontal: 28,
        marginVertical: 24,
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 100,
    },
    nameBlock: {
        color: COLORS.DarkerPrimary,
        fontWeight: '600',
        fontSize: SIZES.medium,
        marginLeft: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        marginTop: 16,
    },
})
