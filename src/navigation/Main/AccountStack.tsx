import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Main/Home'
import Communities from '../../screens/Main/Communities'
import Account from '../../screens/Main/Account'
import DetailCommunities from '../../screens/Main/DetailCommunities'

const AccountStack = createNativeStackNavigator()

const AccountStackScreen = () => {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen name="Account" component={Account} />
        </AccountStack.Navigator>
    )
}

export default AccountStackScreen
