import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IconHome from '../../assets/icons/IconHome.svg'
import IconCommunities from '../../assets/icons/IconCommunities.svg'
import IconUser from '../../assets/icons/IconUser.svg'

import Home from '../../screens/Home'
import Communities from '../../screens/Communities'
import Account from '../../screens/Account'
import { COLORS } from '../../assets/constants/theme'

const Tabs = createBottomTabNavigator()

const TabsBottoms = () => {
    const [activeIcon, setActiveIcon] = useState<boolean>(false)

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarInactiveTintColor: COLORS.Neutral3,
                tabBarStyle: {
                    height: 90,
                    borderTopWidth: 0,
                },
            })}
        >
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: COLORS.Primary,
                    tabBarLabel: 'Home',
                    tabBarIcon: () => <IconHome />,
                }}
                name="Home"
                component={Home}
            />
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: COLORS.Primary,
                    tabBarLabel: 'Communities',
                    tabBarIcon: () => <IconCommunities />,
                }}
                name="Communities"
                component={Communities}
            />
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: COLORS.Primary,
                    tabBarLabel: 'Account',
                    tabBarIcon: () => <IconUser />,
                }}
                name="Account"
                component={Account}
            />
        </Tabs.Navigator>
    )
}

export default TabsBottoms
