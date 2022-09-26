import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@theme'

interface headerAuth {
    title?: string
    description?: string
    number?: string
    txtContent?: string
    txtEnd?: string
}

const HeaderAuth = ({
    title,
    description,
    number,
    txtContent,
    txtEnd,
}: headerAuth) => {
    return (
        <View>
            <View style={styles.image}>
                <Image source={require('../../assets/images/LogoBlue.png')} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.number}>
                    <Text style={styles.txtNumber}>{number}</Text>
                </View>
                <View>
                    <Text style={styles.txtCenter}>{txtContent}</Text>
                    <Text style={styles.txtEnd}>{txtEnd}</Text>
                </View>
            </View>
        </View>
    )
}

export default HeaderAuth

const styles = StyleSheet.create({
    image: {
        marginBottom: 32,
    },
    title: {
        fontSize: SIZES.font,
        color: COLORS.Neutral6,
        marginBottom: 5,
        fontWeight: '500',
    },
    description: {
        fontSize: SIZES.extraLarge,
        color: COLORS.Neutral10,
        fontWeight: '600',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    number: {
        borderColor: COLORS.Neutral8,
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: COLORS.Neutral8,
        justifyContent: 'center',
        marginRight: 12,
    },
    txtNumber: {
        fontSize: SIZES.font,
        color: COLORS.White,
        textAlign: 'center',
    },

    txtCenter: {
        fontSize: SIZES.font,
        color: COLORS.Neutral10,
        fontWeight: '600',
        marginRight: 15,
        marginTop: 18,
    },
    txtEnd: {
        fontSize: SIZES.small,
        color: COLORS.Neutral4,
        textAlign: 'left',
        marginTop: 5,
    },
})
