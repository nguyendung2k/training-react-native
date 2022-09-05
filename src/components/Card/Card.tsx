import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CardId from './CardId'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface cardInfoProps {
    secondary?: boolean
}

const CardInfo = ({ secondary }: cardInfoProps) => {
    return (
        <View
            style={[styles.container, secondary && styles.containerSecondary]}
        >
            <View
                style={[styles.content, secondary && styles.contentSecondary]}
            >
                <View style={styles.image}>
                    {secondary ? (
                        <Image
                            source={require('../../assets/images/Avatar6.png')}
                        />
                    ) : (
                        <Image
                            source={require('../../assets/images/Avatar1.png')}
                        />
                    )}
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
    containerSecondary: {
        backgroundColor: COLORS.Neutral0,
    },
    content: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 18,
        alignItems: 'center',
        marginLeft: 18,
    },
    contentSecondary: {
        flexDirection: 'column',
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
