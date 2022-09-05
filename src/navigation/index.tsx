import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyAuthStack from './Auth/MyAuthStack'
import MyMainStack from './Main/HomeStack'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabsBottoms from './navigator/TabsBottoms'
import DetailCommunities from '../screens/Main/DetailCommunities'

const Stack = createNativeStackNavigator()

const MyStack = () => {
    // const token = false
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* {token ? ( */}
                <Stack.Screen name="TabsBottom" component={TabsBottoms} />
                <Stack.Screen
                    name="DetailCommunities"
                    component={DetailCommunities}
                />
                {/* <Stack.Screen name="MyMainStack" component={MyMainStack} /> */}
                {/* <Stack.Screen name="MyAuthStack" component={MyAuthStack} /> */}
                {/* ) : ( */}
                {/* )} */}
                {/* Khai bao den Au va main */}
                {/* <MyMainStack /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack
