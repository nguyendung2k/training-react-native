import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../screens/Main/Home'
import Communities from '../../screens/Main/Communities'
import Account from '../../screens/Main/Account'
import { COLORS, SIZES } from '../../assets/constants/theme'
import { IconCommunities, IconHome, IconUser } from '../../components/Svg/Icon'
import DetailCommunities from '../../screens/Main/DetailCommunities'
import MyMainStack from '../Main/HomeStack'
import AccountStackScreen from '../Main/AccountStack'
import CommunitiesStackScreen from '../Main/CommunitiesStack'
import HomeStackScreen from '../Main/HomeStack'

const Tabs = createBottomTabNavigator()

const TabsBottoms = () => {
    return (
        <Tabs.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarInactiveTintColor: COLORS.Neutral3,
                tabBarStyle: {
                    height: 90,
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
            })}
        >
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: COLORS.Primary,
                    tabBarIcon: ({ focused }) => {
                        // console.log(p.focused)
                        return (
                            <View
                                style={
                                    focused
                                        ? [styles.container, styles.border]
                                        : styles.container
                                }
                            >
                                <View style={styles.content}>
                                    <View>
                                        {focused ? (
                                            <IconHome stroke={COLORS.Primary} />
                                        ) : (
                                            <IconHome
                                                stroke={COLORS.Neutral3}
                                            />
                                        )}
                                    </View>
                                    <Text
                                        style={[
                                            focused
                                                ? styles.txtFocus
                                                : styles.txtUnFocus,
                                            styles.txt,
                                        ]}
                                    >
                                        Home
                                    </Text>
                                </View>
                            </View>
                        )
                    },
                }}
                name="HomeStackScreen"
                component={HomeStackScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: COLORS.Primary,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? [styles.container, styles.border]
                                        : styles.container
                                }
                            >
                                <View style={styles.content}>
                                    <View>
                                        {focused ? (
                                            <IconCommunities
                                                stroke={COLORS.Primary}
                                            />
                                        ) : (
                                            <IconCommunities
                                                stroke={COLORS.Neutral3}
                                            />
                                        )}
                                    </View>
                                    <Text
                                        style={[
                                            focused
                                                ? styles.txtFocus
                                                : styles.txtUnFocus,
                                            styles.txt,
                                        ]}
                                    >
                                        Communities
                                    </Text>
                                </View>
                            </View>
                        )
                    },
                }}
                name="CommunitiesStackScreen"
                component={CommunitiesStackScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarActiveTintColor: COLORS.Primary,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={
                                    focused
                                        ? [styles.container, styles.border]
                                        : styles.container
                                }
                            >
                                <View style={styles.content}>
                                    <View>
                                        {focused ? (
                                            <IconUser stroke={COLORS.Primary} />
                                        ) : (
                                            <IconUser
                                                stroke={COLORS.Neutral3}
                                            />
                                        )}
                                    </View>
                                    <Text
                                        style={[
                                            focused
                                                ? styles.txtFocus
                                                : styles.txtUnFocus,
                                            styles.txt,
                                        ]}
                                    >
                                        Account
                                    </Text>
                                </View>
                            </View>
                        )
                    },
                }}
                name="AccountStackScreen"
                component={AccountStackScreen}
            />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        position: 'absolute',
        width: 122,
        top: 0,
        height: 2,
        backgroundColor: COLORS.Primary,
    },

    content: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
    },
    txt: {
        fontSize: SIZES.small,
        fontWeight: '600',
    },

    txtFocus: {
        color: COLORS.Neutral10,
    },
    txtUnFocus: {
        color: COLORS.Neutral3,
    },
})

export default TabsBottoms
