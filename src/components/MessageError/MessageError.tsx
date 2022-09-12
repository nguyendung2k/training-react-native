import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
interface messageErrorProps {
    error?: string
}

const MessageError = ({ error }: messageErrorProps) => {
    // useEffect(() => {
    //     getApi()
    // }, [])

    // async function getApi() {
    //     const res = await axios(
    //         'https://631ef80f58a1c0fe9f5c4864.mockapi.io/user'
    //     )
    //     console.log('res: ', res.data)
    // }

    return (
        <View>
            <Text style={{ fontSize: 10, color: 'red' }}>{error}</Text>
        </View>
    )
}

export default MessageError
