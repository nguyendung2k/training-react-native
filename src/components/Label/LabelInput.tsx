import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface labelProps {
    label: string
}

export default function LabelInput(props: labelProps) {
    return <Text style={styles.label}>{props.label}</Text>
}

const styles = StyleSheet.create({
    label: {
        fontWeight: '500',
        fontSize: SIZES.medium,
        color: COLORS.Neutral4,
        marginBottom: 4,
        marginTop: 16,
        textAlign: 'left',
    },
})
