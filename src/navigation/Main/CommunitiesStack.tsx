import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { Communities } from '@screens'

export type CommunityStackParamList = {
    Communities: undefined
    DetailCommunities: { id: string }
}
export type communityScreenProp = StackNavigationProp<CommunityStackParamList>

const CommunitiesStack = createNativeStackNavigator<CommunityStackParamList>()

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
