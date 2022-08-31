import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface headerSlideProps {
    title: string
}

export default function HeaderSlide({ title }: headerSlideProps) {
    return (
        <View>
            <View>
                <Text style={styles.container_Title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_Title: {
        fontSize: SIZES.large,
        color: COLORS.Neutral10,
        fontWeight: '600',
        marginTop: 36,
    },
})
