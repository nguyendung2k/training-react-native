import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home'
import Communities from '../../screens/Communities'
import Account from '../../screens/Account'

const MainStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MyMainStack = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Communities" component={Communities} />
            <MainStack.Screen name="Account" component={Account} />
        </MainStack.Navigator>
    )
}

export default MyMainStack
