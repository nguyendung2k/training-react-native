import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '@screens/Auth/Login'
import Register from '@screens/Auth/Register'
import VerificationCode from '@screens/Auth/VerificationCode'
import PersonalIntroduction from '@screens/Auth/PersonalIntroduction'
import ForgotPassword from '@screens/Auth/ForgotPassword'
import ListCommunity from '@screens/Auth/ListCommunity'
import RegisterEnd from '@screens/Auth/RegisterEnd'
import ResetPassword from '@screens/Auth/ResetPassword'
import ResetSuccessfully from '@screens/Auth/ResetSuccessfully'

const AuthStack = createNativeStackNavigator()

const MyAuthStack = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen
                name="VerificationCode"
                component={VerificationCode}
            />
            <AuthStack.Screen
                name="PersonalIntroduction"
                component={PersonalIntroduction}
            />
            <AuthStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />

            <AuthStack.Screen name="ListCommunity" component={ListCommunity} />
            <AuthStack.Screen name="RegisterEnd" component={RegisterEnd} />

            <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
            <AuthStack.Screen
                name="ResetSuccessfully"
                component={ResetSuccessfully}
            />
        </AuthStack.Navigator>
    )
}

export default MyAuthStack
