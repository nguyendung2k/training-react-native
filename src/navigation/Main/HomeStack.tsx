import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Main/Home'
import DetailCommunities from '@screens/Main/DetailCommunities'
import WaitingForApprovalScreen from '@screens/Main/WaitingForApprovalScreen'
import FriendRequestScreen from '@screens/Main/FriendRequestScreen'
import ForumScreen from '@screens/Main/ForumScreen'
import CommentForumScreen from '@screens/Main/CommentForumScreen'
import NewPostScreen from '@screens/Main/NewPostScreen'
import { StackNavigationProp } from '@react-navigation/stack'

export type HomeStackParamList = {
    Home: undefined
}
export type homeScreenProp = StackNavigationProp<HomeStackParamList>

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
