import React from 'react'
import { Alert } from 'react-native'

export const showAlert = () =>
    Alert.alert('Alert', 'Email Or Password Not Correct', [
        {
            text: 'OK',
            onPress: () => console.log('Cancel'),
            style: 'cancel',
        },
    ])
