import {
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import LabelInput from '../components/Label/LabelInput'
import Input from '../components/Input/Input'
import { COLORS, SIZES } from '../assets/constants/theme'
import ButtonForm from '../components/Button/ButtonForm'

import EyeSlash from '../assets/icons/EyeSlash.svg'
import Eye from '../assets/icons/Eye.svg'

const ResetPassword = ({ navigation }: any) => {
    const [data, setData] = useState({
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const checkPassword = Yup.object().shape({
        new_password: Yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        old_password: Yup.string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

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
                        <LabelInput label="New Password" />
                        <View>
                            <Input
                                placeholder="Your password"
                                onChangeText={handleChange('old_password')}
                                value={values.old_password}
                                secureTextEntry={
                                    data.secureTextEntry ? true : false
                                }
                            />
                            <View style={styles.icon}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={updateSecureTextEntry}
                                >
                                    {data.secureTextEntry ? (
                                        <EyeSlash />
                                    ) : (
                                        <Eye />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {errors.old_password && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.old_password}
                                </Text>
                            )}
                        </View>
                        <View>
                            <LabelInput label="Confirm New password" />
                            <Input
                                placeholder="Enter your password again"
                                onChangeText={handleChange('new_password')}
                                value={values.new_password}
                                secureTextEntry={
                                    data.secureTextEntry ? true : false
                                }
                            />
                            {errors.new_password && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.new_password}
                                </Text>
                            )}
                        </View>
                        <View style={styles.btn}>
                            <ButtonForm label="Reset" onPress={handleSubmit} />
                        </View>
                        <ButtonForm
                            label="Back to login"
                            onPress={() => navigation.navigate('Login')}
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
})
