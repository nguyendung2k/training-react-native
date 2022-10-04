import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
interface messageErrorProps {
    error?: string | React.ReactNode
}

const MessageError = ({ error }: messageErrorProps) => {
    return (
        <View>
            <Text style={{ fontSize: 10, color: 'red' }}>{error}</Text>
        </View>
    )
}

export default MessageError
