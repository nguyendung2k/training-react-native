import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import { BORDER, COLORS, SIZES } from '@theme'
import { useNavigation } from '@react-navigation/native'
import { InputComponent } from '@components/Input'
import { ButtonComponent } from '@components/Button'

const ResetPassword = () => {
    const navigation = useNavigation<any>()
    const [showPass, setShowPass] = useState<boolean>(true)

    const updateShowPassAndIcon = () => {
        setShowPass(!showPass)
    }

    const checkPassword = Yup.object().shape({
        new_password: Yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        old_password: Yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Reset Password</Text>
            <Formik
                initialValues={{
                    old_password: '',
                    new_password: '',
                }}
                validationSchema={checkPassword}
                onSubmit={() => navigation.navigate('ResetSuccessfully')}
            >
                {({ handleSubmit, handleChange, errors, values }) => (
                    <View style={styles.form}>
                        <View>
                            <InputComponent
                                title="New Password"
                                placeholder="Your password"
                                onChangeText={handleChange('old_password')}
                                value={values.old_password}
                                secureTextEntry={showPass ? true : false}
                            />
                            <View style={styles.icon}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={updateShowPassAndIcon}
                                ></TouchableOpacity>
                            </View>
                            {errors.old_password && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.old_password}
                                </Text>
                            )}
                        </View>
                        <View>
                            <InputComponent
                                title="Confirm New password"
                                placeholder="Enter your password again"
                                onChangeText={handleChange('new_password')}
                                value={values.new_password}
                                secureTextEntry={showPass ? true : false}
                            />
                            {errors.new_password && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.new_password}
                                </Text>
                            )}
                        </View>
                        <View style={styles.btn}>
                            <ButtonComponent
                                label="Reset"
                                onPress={handleSubmit}
                                styleBtn={styles.btnReset}
                                styleText={styles.txtReset}
                            />
                        </View>
                        <ButtonComponent
                            label="Back to login"
                            onPress={() => navigation.goBack()}
                            styleBtn={styles.btnBackToLogin}
                            styleText={styles.txtBackToLogin}
                        />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        color: COLORS.Neutral10,
        fontSize: SIZES.extraLarge,
        fontWeight: '600',
        textAlign: 'center',
    },
    description: {
        color: COLORS.Neutral6,
        fontSize: SIZES.small,
        marginTop: 6,
        marginBottom: 24,
        textAlign: 'center',
    },
    form: {
        marginHorizontal: 25,
    },
    btn: {
        marginBottom: 18,
        marginTop: 36,
    },
    icon: {
        position: 'absolute',
        width: 24,
        height: 24,
        right: 16,
        top: 11,
    },
    btnReset: {
        fontWeight: '600',
        fontSize: SIZES.medium,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.Primary,
        color: COLORS.White,
    },
    txtReset: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.Neutral0,
    },
    btnBackToLogin: {
        fontWeight: '600',
        fontSize: SIZES.medium,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.White,
        color: COLORS.Neutral8,
        borderColor: COLORS.Neutral8,
        borderWidth: 1,
    },
    txtBackToLogin: {
        fontSize: SIZES.large,
        fontWeight: '600',
        marginRight: 10,
        color: COLORS.Neutral8,
    },
})
