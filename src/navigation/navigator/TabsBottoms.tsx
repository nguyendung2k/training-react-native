import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "@theme";
import {
  AccountStackScreen,
  CommunitiesStackScreen,
  HomeStackScreen,
} from "@navigation/Main";
import { IconCommunities, IconHome, IconUser } from "@components/Svg";

const Tabs = createBottomTabNavigator();

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
            return (
              <View
                style={
                  focused ? [styles.container, styles.border] : styles.container
                }
              >
                <View style={styles.content}>
                  <View>
                    {focused ? (
                      <IconHome stroke={COLORS.Primary} />
                    ) : (
                      <IconHome stroke={COLORS.Neutral3} />
                    )}
                  </View>
                  <Text
                    style={[
                      focused ? styles.txtFocus : styles.txtUnFocus,
                      styles.txt,
                    ]}
                  >
                    Home
                  </Text>
                </View>
              </View>
            );
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
                  focused ? [styles.container, styles.border] : styles.container
                }
              >
                <View style={styles.content}>
                  <View>
                    {focused ? (
                      <IconCommunities stroke={COLORS.Primary} />
                    ) : (
                      <IconCommunities stroke={COLORS.Neutral3} />
                    )}
                  </View>
                  <Text
                    style={[
                      focused ? styles.txtFocus : styles.txtUnFocus,
                      styles.txt,
                    ]}
                  >
                    Communities
                  </Text>
                </View>
              </View>
            );
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
                  focused ? [styles.container, styles.border] : styles.container
                }
              >
                <View style={styles.content}>
                  <View>
                    {focused ? (
                      <IconUser stroke={COLORS.Primary} />
                    ) : (
                      <IconUser stroke={COLORS.Neutral3} />
                    )}
                  </View>
                  <Text
                    style={[
                      focused ? styles.txtFocus : styles.txtUnFocus,
                      styles.txt,
                    ]}
                  >
                    Account
                  </Text>
                </View>
              </View>
            );
          },
        }}
        name="AccountStackScreen"
        component={AccountStackScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    position: "absolute",
    width: 122,
    top: 0,
    height: 2,
    backgroundColor: COLORS.Primary,
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
  },
  txt: {
    fontSize: SIZES.small,
    fontWeight: "600",
  },

  txtFocus: {
    color: COLORS.Neutral10,
  },
  txtUnFocus: {
    color: COLORS.Neutral3,
  },
});

export default TabsBottoms;
