import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AccountScreen } from '@screens'

const AccountStack = createNativeStackNavigator()

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
