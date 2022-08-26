import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyAuthStack from './Auth/MyAuthStack'
import MyMainStack from './Main/MyMainStack'
import { Text } from 'react-native'

const Stack = createNativeStackNavigator()

const MyStack = () => {
    const token = false
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {token ? (
                <Stack.Screen name="MyMainStack" component={MyMainStack} />
            ) : (
                <Stack.Screen name="MyAuthStack" component={MyAuthStack} />
            )}
            {/* Khai bao den Au va main */}
            {/* <MyMainStack /> */}
        </Stack.Navigator>
    )
}

export default MyStack
