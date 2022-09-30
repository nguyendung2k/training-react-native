import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import TabsBottoms from './navigator/TabsBottoms'
import MyAuthStack from './Auth/MyAuthStack'
import { RootState } from '@redux'
import {
    BlockListScreen,
    ChangePasswordScreen,
    CommentForumScreen,
    DetailCommunities,
    ForumScreen,
    FriendRequestScreen,
    NewPostScreen,
    UpdateProfileScreen,
    WaitingForApprovalScreen,
    YourProfileScreen,
} from '@screens'
const RootStack = createNativeStackNavigator()
const tokenUser = (state: RootState) => state.auth.user?.token

const MyStack = () => {
    const token = useSelector(tokenUser)
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                {token ? (
                    <>
                        <RootStack.Screen
                            name="TabsBottom"
                            component={TabsBottoms}
                        />
                        <RootStack.Screen
                            name="YourProfileScreen"
                            component={YourProfileScreen}
                        />
                        <RootStack.Screen
                            name="BlockListScreen"
                            component={BlockListScreen}
                        />
                        <RootStack.Screen
                            name="ChangePasswordScreen"
                            component={ChangePasswordScreen}
                        />
                        <RootStack.Screen
                            name="UpdateProfileScreen"
                            component={UpdateProfileScreen}
                        />
                        <RootStack.Screen
                            name="WaitingForApprovalScreen"
                            component={WaitingForApprovalScreen}
                        />
                        <RootStack.Screen
                            name="FriendRequestScreen"
                            component={FriendRequestScreen}
                        />
                        <RootStack.Screen
                            name="DetailCommunities"
                            component={DetailCommunities}
                        />
                        <RootStack.Screen
                            name="ForumScreen"
                            component={ForumScreen}
                        />
                        <RootStack.Screen
                            name="CommentForumScreen"
                            component={CommentForumScreen}
                        />
                        <RootStack.Screen
                            name="NewPostScreen"
                            component={NewPostScreen}
                        />
                    </>
                ) : (
                    <RootStack.Screen
                        name="MyAuthStack"
                        component={MyAuthStack}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack
