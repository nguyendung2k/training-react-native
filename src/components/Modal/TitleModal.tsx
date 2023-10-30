import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@theme'

interface titleProps {
    title?: string
    description?: string
    Icon?: () => JSX.Element
    primary?: boolean
    secondary?: boolean
}

const TitleModal = ({ title }: titleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default TitleModal

const styles = StyleSheet.create({
    container: {},
    title: {
        textAlign: 'center',
        color: COLORS.Neutral10,
        fontSize: SIZES.font,
        fontWeight: '500',
    },
})
