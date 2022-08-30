import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

import { LinearGradient } from 'expo-linear-gradient'

interface slideProps {
    title: string
    source?: any
}

export const SlideView = ({ title }: slideProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.container_Content}>
                <Text style={styles.title}>{title}</Text>
                <LinearGradient
                    colors={[
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 1)',
                    ]}
                >
                    <Image
                        source={require('../../assets/images/Slide1.png')}
                        style={styles.image}
                    />
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

export const renderSlide = ({ item }: any) => (
    <SlideView title={item.title} key={item.id} />
)

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
    },

    container_Content: {
        marginBottom: 40,
    },
    title: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: COLORS.Neutral0,
        zIndex: 99,
        fontWeight: '600',
        fontSize: SIZES.small,
    },
    image: {
        position: 'relative',
        zIndex: 1,
        marginRight: 12,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
})
