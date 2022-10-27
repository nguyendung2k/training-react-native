import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@theme'

interface headerSlideProps {
    title: string
    secondary?: boolean
}

const HeaderSlide = ({ title, secondary }: headerSlideProps) => {
    return (
        <Text
            style={[styles.container_Title, secondary && styles.titleSecondary]}
        >
            {title}
        </Text>
    )
}

export default HeaderSlide

const styles = StyleSheet.create({
    container_Title: {
        fontSize: SIZES.large,
        color: COLORS.Neutral10,
        fontWeight: '600',
        marginTop: 36,
    },
    titleSecondary: {
        color: COLORS.Neutral0,
        fontWeight: '600',
    },
})
