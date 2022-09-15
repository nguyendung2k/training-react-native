import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../assets/constants/theme'

const Loading = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={COLORS.Primary} />
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

        // backgroundColor: 'red',
    },
})

export default Loading
