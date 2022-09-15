import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
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
