import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface buttonInfoFollow {
    primary?: boolean
    secondary?: boolean
    tertiary?: boolean
    quinary?: boolean
    Icon?: () => JSX.Element
    number: string
}

const ButtonInfoFollow = ({ Icon, number, quinary }: buttonInfoFollow) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                {quinary && (
                    <Image
                        source={require('../../assets/images/logos_twitter.png')}
                        style={{ width: 24, height: 24 }}
                    />
                )}
                {!!Icon && <Icon />}
                <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonInfoFollow

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BackgroundInput,
        width: 103,
        height: 36,
        borderRadius: BORDER.maximum,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'space-evenly',
    },
    number: {
        fontSize: SIZES.medium,
        color: COLORS.Semantic5,
        fontWeight: '600',
    },
})
