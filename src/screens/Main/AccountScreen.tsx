import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { useDispatch } from 'react-redux'

import {
    BaseModal,
    ButtonAccountMenu,
    ButtonForm,
    CardInfo,
    Header,
    IconLockKeyOpen,
    IconProhibit,
    IconSignOut,
    IconUserCircle,
    IconWarning,
} from '@components'
import { RootState, useAppSelector } from '@redux'
import { useNavigation } from '@react-navigation/native'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import { showModal } from '@redux/slices/homeSlice'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: true,
    }),
})

const AccountScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()

    const [expoPushToken, setExpoPushToken] = useState<any>('')

    const notificationListener = useRef<any>()

    const responseListener = useRef<any>()

    const modal = useAppSelector(
        (state: RootState) => state.home.modal.showModal
    )

    const handleShowModal = () => {
        dispatch(showModal({ showModal: true }))
    }

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then((token: any) => {
                setExpoPushToken(token)
            })
            .catch((e) => {
                console.log('error: ', e)
            })

        // responseListener.current =
        //     Notifications.addNotificationResponseReceivedListener(
        //         (response) => {
        //             console.log('response', response)
        //         }
        //     )

        // return () => {
        //     Notifications.removeNotificationSubscription(
        //         notificationListener.current
        //     )
        //     Notifications.removeNotificationSubscription(
        //         responseListener.current
        //     )
        // }
    }, [])

    async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
            },
            trigger: {
                seconds: 1,
            },
        })
    }

    // console.log('expoPushToken---: ', expoPushToken)

    async function registerForPushNotificationsAsync() {
        let token

        if (Device.isDevice) {
            const { status: existingStatus } =
                await Notifications.getPermissionsAsync()

            let finalStatus = existingStatus

            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync()
                finalStatus = status
            }

            if (finalStatus !== 'granted') {
                Alert.alert('Failed to get push token for push notification!')
                return
            }
            token = (await Notifications.getExpoPushTokenAsync()).data
        } else {
            Alert.alert('Must use physical device for Push Notifications')
        }

        return token
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Header title="Account" showTextHeader primary />
                </View>
                <View>
                    <CardInfo primary />
                </View>
                <View style={styles.btn}>
                    <ButtonAccountMenu
                        label="Your profile"
                        Icon={() => (
                            <IconUserCircle stroke={COLORS.Neutral10} />
                        )}
                        onPress={() => navigation.navigate('YourProfileScreen')}
                    />
                    <ButtonAccountMenu
                        label="Block List"
                        Icon={() => <IconProhibit stroke={COLORS.Neutral10} />}
                        onPress={() => navigation.navigate('BlockListScreen')}
                    />
                    <ButtonAccountMenu
                        label="Change password"
                        Icon={() => (
                            <IconLockKeyOpen stroke={COLORS.Neutral10} />
                        )}
                        onPress={() =>
                            navigation.navigate('ChangePasswordScreen')
                        }
                    />
                    <ButtonAccountMenu
                        label="Log out"
                        Icon={() => <IconSignOut stroke={COLORS.Neutral10} />}
                        onPress={handleShowModal}
                    />
                </View>
                <View style={styles.btnCancel}>
                    <ButtonForm
                        label="Cancel account"
                        quinary
                        Icon={() => <IconWarning stroke={COLORS.Semantic4} />}
                        onPress={async () => {
                            await schedulePushNotification()
                        }}
                    />
                </View>

                {modal ? (
                    <View style={styles.showModal}>
                        <BaseModal
                            title="Do you want to Log out?"
                            label="Log out"
                        />
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral0,
    },
    content: {
        marginHorizontal: 24,
        position: 'relative',
    },
    btn: {
        marginBottom: 90,
    },
    btnCancel: {
        marginBottom: 55,
    },
    showModal: {
        position: 'absolute',
        top: '37%',
        left: '10%',
    },
})
