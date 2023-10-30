import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import {
    ButtonForm,
    Header,
    IConBack,
    IconCheckCircle,
    Input,
    MessageError,
    NotificationModal,
} from '@components'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { RootState } from '@redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { showNotice, updatePassword } from '@redux'

const userSelector = (state: RootState) => state.user.user

type FormData = {
    currentPassword: string
    newPassword: string
    confirmNewPassword: string
}

const ChangePasswordScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const [showError, setShowError] = useState<boolean>(false)

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<FormData>({
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        },
    })

    const watchPassword = watch('newPassword')

    const handleChangePassword: SubmitHandler<FormData> = (data: FormData) => {
        if (data.currentPassword === user[0].password) {
            let copyUser = [...user]

            copyUser.forEach((_, index) => {
                return (copyUser[index] = {
                    ...copyUser[index],
                    password: data.newPassword,
                })
            })
            dispatch(updatePassword(copyUser))
            reset()
            navigation.goBack()
            dispatch(showNotice(true))
        } else if (data.currentPassword !== user[0].password) {
            setShowError(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    showTextHeader
                    showRightIcon
                    title="Update Profile"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputBlock}>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Current password is required',
                            minLength: {
                                value: 6,
                                message:
                                    'Password should be minimum 6 characters',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => (
                            <Input
                                title="Current password"
                                primary
                                secureTextEntry
                                isPassword
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={
                                    (errors.currentPassword && (
                                        <MessageError error={error?.message} />
                                    )) ||
                                    (showError && (
                                        <MessageError error="Password not correct!" />
                                    ))
                                }
                            />
                        )}
                        name="currentPassword"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: 'New password is required',
                            minLength: {
                                value: 6,
                                message:
                                    'Password should be minimum 6 characters',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => (
                            <Input
                                title="New password"
                                primary
                                secureTextEntry
                                isPassword
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={
                                    errors.newPassword && (
                                        <MessageError error={error?.message} />
                                    )
                                }
                            />
                        )}
                        name="newPassword"
                    />

                    <Controller
                        control={control}
                        rules={{
                            validate: (value) =>
                                value === watchPassword ||
                                'Password not match!!!',
                        }}
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => (
                            <Input
                                title="Confirm new password"
                                primary
                                secureTextEntry
                                isPassword
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={
                                    errors.confirmNewPassword && (
                                        <MessageError error={error?.message} />
                                    )
                                }
                            />
                        )}
                        name="confirmNewPassword"
                    />
                </View>
                <View style={styles.btn}>
                    <ButtonForm
                        label="Update"
                        onPress={handleSubmit(handleChangePassword)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        marginHorizontal: 24,
    },

    content: {
        marginHorizontal: 24,
    },
    inputBlock: {
        marginTop: 48,
        marginBottom: 250,
    },
    btn: {
        marginTop: 'auto',
    },
})
