import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Main/Home'
import Communities from '../../screens/Main/Communities'
import Account from '../../screens/Main/Account'
import DetailCommunities from '../../screens/Main/DetailCommunities'

const CommunitiesStack = createNativeStackNavigator()

const CommunitiesStackScreen = () => {
    return (
        <CommunitiesStack.Navigator screenOptions={{ headerShown: false }}>
            <CommunitiesStack.Screen
                name="Communities"
                component={Communities}
            />
        </CommunitiesStack.Navigator>
    )
}

export default CommunitiesStackScreen
