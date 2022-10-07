import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { useDispatch, useSelector } from 'react-redux'
import { modalHandle, RootState, showNotice } from '@redux'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'
import { AccountScreenProp } from '@navigation/type'
import { BaseModal, NotificationModal } from '@components/Modal'
import {
    IconCheckCircle,
    IconLockKeyOpen,
    IconProhibit,
    IconSignOut,
    IconUserCircle,
    IconWarning,
} from '@components/Svg'
import { CardInfo } from '@components/Card'
import { ButtonAccountMenu, ButtonForm } from '@components/Button'
import { Header } from '@components/Header'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: true,
    }),
})

const showNoticeSelector = (state: RootState) => state.user.modal
const userDetailSelector = (state: RootState) => state.user.userDetail
const showModalSelector = (state: RootState) => state.auth.showModal

const AccountScreen = () => {
    const dispatch = useDispatch()
    const navigation =
        useNavigation<AccountScreenProp<'AccountStackScreen'>['navigation']>()
    const showModal = useSelector(showModalSelector)
    const showNoticeModal = useSelector(showNoticeSelector)
    const userDetail = useSelector(userDetailSelector)

    console.log('userDetailID: ', userDetail.user_id)

    const handleShowModal = () => {
        dispatch(modalHandle(true))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(showNotice(false))
        }, 1500)
    }, [showNoticeModal])

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then((token: string | undefined) => {
                // console.log('token: ', token)
            })
            .catch((e) => {
                console.log('error: ', e)
            })
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
            <View style={styles.notification}>
                {showNoticeModal && (
                    <NotificationModal
                        onPress={() => dispatch(showNotice(false))}
                        secondary
                        ICon={() => <IconCheckCircle fill={COLORS.Primary} />}
                    />
                )}
            </View>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Header title="Account" showTextHeader primary />
                <CardInfo
                    primary
                    onPress={() => navigation.navigate('YourProfileScreen')}
                />
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
                        Icon={() => (
                            <IconSignOut
                                width={32}
                                height={32}
                                strokeWidth={1.5}
                                stroke={COLORS.Neutral10}
                            />
                        )}
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

                {showModal ? (
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
        // backgroundColor: 'red',
    },
    btnCancel: {
        marginBottom: 55,
    },
    showModal: {
        position: 'absolute',
        top: '37%',
        left: '10%',
    },
    notification: {
        position: 'absolute',
        top: 15,
        left: 18,
        zIndex: 100,
    },
})
