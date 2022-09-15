import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

import { LinearGradient } from 'expo-linear-gradient'

interface slideProps {
    title?: string
    source?: any
    item: { id: string; title: string; image: string }
    onPress?: () => void | undefined
}

const SlideView = ({ item, onPress }: slideProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.container_Content}>
                <Text style={styles.title}>{item.title}</Text>

                <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.image}
                    imageStyle={{ borderRadius: BORDER.maximum }}
                >
                    <LinearGradient
                        colors={['#140D2900', '#140D28E8']}
                        style={styles.linearGradient}
                    />
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default SlideView

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
    },

    container_Content: {},
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
        width: 210,
        height: 129,
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        borderRadius: BORDER.maximum,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
