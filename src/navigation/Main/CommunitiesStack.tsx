import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { CommunitiesScreen } from '@screens'

export type CommunityStackParamList = {
    CommunitiesScreen: undefined
    // DetailCommunities: { id: string }
    // CommunitiesStackScreen: undefined
}
export type communityScreenProp = StackNavigationProp<CommunityStackParamList>

const CommunitiesStack = createNativeStackNavigator<CommunityStackParamList>()

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
