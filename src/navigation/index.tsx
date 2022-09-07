import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyAuthStack from './Auth/MyAuthStack'

import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import TabsBottoms from './navigator/TabsBottoms'
import DetailCommunities from '../screens/Main/DetailCommunities'

const Stack = createNativeStackNavigator()
const tokenUser = (state: any) => state.auth.user?.token

const MyStack = () => {
    const token = useSelector(tokenUser)

    console.log('token----', token)

    // const token = false
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* {token ? ( */}

                {!token ? (
                    <Stack.Screen name="MyAuthStack" component={MyAuthStack} />
                ) : (
                    <>
                        <Stack.Screen
                            name="TabsBottom"
                            component={TabsBottoms}
                        />
                        <Stack.Screen
                            name="DetailCommunities"
                            component={DetailCommunities}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack
