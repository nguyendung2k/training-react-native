import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Account from '../../screens/Main/Account'
import YourProfileScreen from '../../screens/Main/YourProfileScreen'

const AccountStack = createNativeStackNavigator()

const AccountStackScreen = () => {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen name="Account" component={Account} />
            <AccountStack.Screen
                name="YourProfileScreen"
                component={YourProfileScreen}
            />
        </AccountStack.Navigator>
    )
}

export default AccountStackScreen
