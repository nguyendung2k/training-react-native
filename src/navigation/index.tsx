import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyAuthStack from './Auth/MyAuthStack'

import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import TabsBottoms from './navigator/TabsBottoms'
import DetailCommunities from '../screens/Main/DetailCommunities'
import UpdateProfileScreen from '../screens/Main/UpdateProfileScreen'
import WaitingForApprovalScreen from '../screens/Main/WaitingForApprovalScreen'
import FriendRequestScreen from '../screens/Main/FriendRequestScreen'
import BlockListScreen from '../screens/Main/BlockListScreen'
import ChangePasswordScreen from '../screens/Main/ChangePasswordScreen'

const Stack = createNativeStackNavigator()
const tokenUser = (state: any) => state.auth.user?.token

const MyStack = () => {
    const token = useSelector(tokenUser)
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token ? (
                    <>
                        <Stack.Screen
                            name="TabsBottom"
                            component={TabsBottoms}
                        />
                        <Stack.Screen
                            name="DetailCommunities"
                            component={DetailCommunities}
                        />
                        <Stack.Screen
                            name="UpdateProfileScreen"
                            component={UpdateProfileScreen}
                        />
                        <Stack.Screen
                            name="WaitingForApprovalScreen"
                            component={WaitingForApprovalScreen}
                        />
                        <Stack.Screen
                            name="FriendRequestScreen"
                            component={FriendRequestScreen}
                        />
                        <Stack.Screen
                            name="BlockListScreen"
                            component={BlockListScreen}
                        />
                        <Stack.Screen
                            name="ChangePasswordScreen"
                            component={ChangePasswordScreen}
                        />
                    </>
                ) : (
                    <Stack.Screen name="MyAuthStack" component={MyAuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack
