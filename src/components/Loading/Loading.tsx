import { COLORS } from '@theme'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loading = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color={COLORS.Primary} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})

export default Loading
