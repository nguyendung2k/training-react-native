import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Home from '../screens/Home'
import ForgotPassword from '../screens/ForgotPassword'
import Register from '../screens/Register'
import VerificationCode from '../screens/VerificationCode'
import ResetPassword from '../screens/ResetPassword'
import ResetSuccessfully from '../screens/ResetSuccessfully'
import PersonalIntroduction from '../screens/PersonalIntroduction'

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen
                name="VerificationCode"
                component={VerificationCode}
            />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen
                name="ResetSuccessfully"
                component={ResetSuccessfully}
            />
            <Stack.Screen
                name="PersonalIntroduction"
                component={PersonalIntroduction}
            />
        </Stack.Navigator>
    )
}

export default MyStack

const styles = StyleSheet.create({})
