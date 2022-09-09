import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import * as Yup from 'yup'
import { Formik } from 'formik'

import Input from '../../components/Input/Input'
import ButtonForm from '../../components/Button/ButtonForm'
import { COLORS, SIZES } from '../../assets/constants/theme'

import { ArrowRight } from '../../components/Svg/Icon'
import MessageError from '../../components/MessageError/MessageError'
import { loginSuccess } from '../../redux/slices/authSlice'
import { USER, USER_INFO } from '../../assets/constants/user'
import ButtonNoBg from '../../components/Button/ButtonNoBg'

// const urlUser = 'http://localhost:3000/user'

function Login({ navigation }: any) {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:3000/user',
    //     }).then(function (response) {
    //         console.log(response)
    //     })
    // }, [])

    const handleLogin = (values: any) => {
        if (values.email === USER.email && values.password === USER.password) {
            dispatch(loginSuccess(USER_INFO.data[0]))
        }
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:3000/user_Info/1',
        // }).then(function (response) {
        //     const data = response.data
        // }
    }

    const checkInput = Yup.object({
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email Address is Required'),
        password: Yup.string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/LogoBlue.png')}
                    />

                    <Formik
                        initialValues={{
                            email: 'user1@gmail.com',
                            password: 'user123',
                        }}
                        validationSchema={checkInput}
                        onSubmit={(values) => handleLogin(values)}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            errors,
                            values,
                            touched,
                        }) => (
                            <View style={styles.form}>
                                <Text style={styles.textLogin}>Login</Text>

                                <Input
                                    onChangeText={handleChange('email')}
                                    placeholder="Your email"
                                    value={values.email}
                                    title="Email"
                                />

                                {touched.email && (
                                    <MessageError error={errors.email} />
                                )}

                                <View>
                                    <Input
                                        title="Password"
                                        placeholder="Your password"
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        isPassword
                                    />
                                </View>
                                {touched.password && (
                                    <MessageError error={errors.password} />
                                )}
                                <View>
                                    <TouchableOpacity
                                        style={styles.btnForgot}
                                        onPress={() =>
                                            navigation.navigate(
                                                'ForgotPassword'
                                            )
                                        }
                                    >
                                        <Text style={styles.textForgot}>
                                            Forgot password?
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <ButtonForm
                                    label="Login"
                                    onPress={() => handleSubmit()}
                                    Icon={() => (
                                        <ArrowRight stroke={COLORS.White} />
                                    )}
                                />
                            </View>
                        )}
                    </Formik>
                    <View style={styles.footer}>
                        <Text style={styles.textFooter}>
                            Don’t have an account?
                        </Text>
                        <ButtonNoBg title="Register" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.White,
    },
    logo: {
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    form: {
        marginHorizontal: 25,
    },
    btnForgot: {
        marginTop: 16,
        marginBottom: 33,
    },
    textForgot: {
        fontSize: SIZES.small,
        color: COLORS.Neutral4,
        textAlign: 'right',
    },
    textLogin: {
        color: COLORS.Neutral10,
        fontSize: SIZES.extraLarge,
        fontWeight: '600',
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    textFooter: {
        color: COLORS.Neutral8,
        fontSize: SIZES.small,
        marginRight: 5,
        textAlign: 'center',
        fontWeight: '500',
    },
    textFooter_primary: {
        color: COLORS.Primary,
        alignItems: 'center',
        marginRight: 5,
    },
})
