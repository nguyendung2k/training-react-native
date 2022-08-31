import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Main/Home'
import Communities from '../../screens/Main/Communities'
import Account from '../../screens/Main/Account'
import DetailCommunities from '../../screens/Main/DetailCommunities'

const HomeStack = createNativeStackNavigator()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen
                name="DetailCommunities"
                component={DetailCommunities}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
