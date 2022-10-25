import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { useDispatch, useSelector } from 'react-redux'
import { modalHandle, RootState, showNotice } from '@redux'
import { useNavigation } from '@react-navigation/native'
import { BORDER, COLORS, SIZES } from '@theme'
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
import {
    ButtonAccountMenu,
    ButtonComponent,
    ButtonForm,
} from '@components/Button'
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
                    onPress={() =>
                        navigation.navigate(
                            'YourProfileScreen',
                            userDetail.user_id
                        )
                    }
                />
                <View style={styles.btn}>
                    <ButtonComponent
                        label="Your profile"
                        IconRight={<IconUserCircle stroke={COLORS.Neutral10} />}
                        styleBtn={styles.btnDefault}
                        styleText={styles.txtBtn}
                        onPress={() =>
                            navigation.navigate(
                                'YourProfileScreen',
                                userDetail.user_id
                            )
                        }
                    />
                    <ButtonComponent
                        label="Block List"
                        IconRight={<IconProhibit stroke={COLORS.Neutral10} />}
                        onPress={() => navigation.navigate('BlockListScreen')}
                        styleBtn={styles.btnDefault}
                        styleText={styles.txtBtn}
                    />
                    <ButtonComponent
                        label="Change password"
                        IconRight={
                            <IconLockKeyOpen stroke={COLORS.Neutral10} />
                        }
                        onPress={() =>
                            navigation.navigate('ChangePasswordScreen')
                        }
                        styleBtn={styles.btnDefault}
                        styleText={styles.txtBtn}
                    />
                    <ButtonComponent
                        label="Log out"
                        IconRight={
                            <IconSignOut
                                width={32}
                                height={32}
                                strokeWidth={1.5}
                                stroke={COLORS.Neutral10}
                            />
                        }
                        onPress={handleShowModal}
                        styleBtn={styles.btnDefault}
                        styleText={styles.txtBtn}
                    />
                </View>
                <View style={styles.btnCancel}>
                    <ButtonComponent
                        label="Cancel account"
                        styleBtn={styles.btnCan}
                        styleText={styles.txtBtnCan}
                        Icon={<IconWarning stroke={COLORS.Semantic4} />}
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
    btnDefault: {
        borderBottomColor: COLORS.Neutral3,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 22,
        // marginLeft: 8,
    },
    txtBtn: {
        marginLeft: 20,
        fontSize: SIZES.medium,
        fontWeight: '500',
    },
    btnCan: {
        borderRadius: BORDER.base,
        borderColor: COLORS.Semantic4,
        backgroundColor: COLORS.White,
        borderWidth: 1,
        fontWeight: '600',
        fontSize: SIZES.medium,
        paddingVertical: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnCan: {
        fontSize: SIZES.medium,
        color: COLORS.Semantic4,
        fontWeight: '600',
        marginRight: 10,
    },
})
