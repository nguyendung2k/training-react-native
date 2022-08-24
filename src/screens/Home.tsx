import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

// const imageBackground = { uri: '../assets/images/Background.png' }

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
