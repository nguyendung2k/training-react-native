import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface messageErrorProps {
    error?: string
}

const MessageError = ({ error }: messageErrorProps) => {
    return (
        <View>
            <Text style={{ fontSize: 10, color: 'red' }}>{error}</Text>
        </View>
    )
}

export default MessageError
