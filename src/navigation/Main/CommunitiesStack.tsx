import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CommunitiesScreen } from '@screens'

const CommunitiesStack = createNativeStackNavigator()

const CommunitiesStackScreen = () => {
    return (
        <CommunitiesStack.Navigator screenOptions={{ headerShown: false }}>
            <CommunitiesStack.Screen
                name="CommunitiesScreen"
                component={CommunitiesScreen}
            />
        </CommunitiesStack.Navigator>
    )
}

export default CommunitiesStackScreen
