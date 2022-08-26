import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VerificationCode from '../../screens/VerificationCode'
import Register from '../../screens/Register'
import PersonalIntroduction from '../../screens/PersonalIntroduction'
import Login from '../../screens/Login'
import ForgotPassword from '../../screens/ForgotPassword'
import ResetPassword from '../../screens/ResetPassword'
import ResetSuccessfully from '../../screens/ResetSuccessfully'
import ListCommunity from '../../screens/ListCommunity'
import RegisterEnd from '../../screens/RegisterEnd'

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
