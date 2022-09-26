import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from '@react-navigation/stack'
import Account from '@screens/Main/Account'

export type AccountStackParamList = {
    Account: undefined
}

const AccountStack = createNativeStackNavigator<AccountStackParamList>()

export type accountScreenProp = StackNavigationProp<AccountStackParamList>

const AccountStackScreen = () => {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen name="Account" component={Account} />
        </AccountStack.Navigator>
    )
}

export default AccountStackScreen
