import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeScreen } from '@screens'

export type HomeStackParamList = {
    HomeScreen: undefined
}
export type homeScreenProp = StackNavigationProp<HomeStackParamList>

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
