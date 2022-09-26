import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { AccountScreen } from '@screens'

export type AccountStackParamList = {
    AccountScreen: undefined
}

const AccountStack = createNativeStackNavigator<AccountStackParamList>()

export type accountScreenProp = StackNavigationProp<AccountStackParamList>

const AccountStackScreen = () => {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen
                name="AccountScreen"
                component={AccountScreen}
            />
        </AccountStack.Navigator>
    )
}

export default AccountStackScreen
