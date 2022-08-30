import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'
import { SLIDES } from '../../assets/constants/silde'
import { ListView } from '../ListView/ListView'

interface slideProps {
    title: string
    source?: any
}

export const SlideView = ({ title }: slideProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_Content}>
                <Text style={styles.title}>{title}</Text>
                <Image
                    source={require('../../assets/images/Slide1.png')}
                    style={styles.image}
                />
            </View>
        </View>
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
})
