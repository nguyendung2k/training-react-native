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
    SafeAreaView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
    ArrowRight,
    ButtonForm,
    ButtonNoBg,
    IconCheckCircle,
    IconMinusCircle,
    Input,
    MessageError,
    NotificationModal,
} from '@components'
import { COLORS, SIZES } from '@theme'
import { loginAuth } from '@redux/slices/authSlice'
import { RootState, useAppDispatch } from '@redux/store'
import { detailUser } from '@redux/slices/userSlice'
import { useSelector } from 'react-redux'

const userSelector = (state: RootState) => state.user.user
const Login = ({ navigation }: any) => {
    const dispatch = useAppDispatch()
    const userData = useSelector(userSelector)
    console.log('user:', userData)
    const [showNotice, setShowNotice] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShowNotice(false)
        }, 5000)
    }, [showNotice])

    const handleLogin = (values: { email: string; password: string }) => {
        const checkLogin = userData.filter((item) => {
            return (
                item.email === values.email && item.password === values.password
            )
        })
        if (checkLogin.length === 0) {
            setShowNotice(true)
        } else {
            const tokenUser = checkLogin[0].data.token
            const detail = checkLogin[0].data
            dispatch(loginAuth(tokenUser))
            dispatch(detailUser(detail))
        }
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
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View style={styles.notification}>
                            {showNotice && (
                                <NotificationModal
                                    onPress={() => setShowNotice(false)}
                                    tertiary
                                    ICon={() => (
                                        <IconMinusCircle
                                            fill={COLORS.Neutral4}
                                        />
                                    )}
                                />
                            )}
                        </View>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/LogoBlue.png')}
                        />

                        <Formik
                            initialValues={{
                                email: 'user123@gmail.com',
                                password: '123456',
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
                                        error={
                                            touched.email && errors.email ? (
                                                <MessageError
                                                    error={errors.email}
                                                />
                                            ) : null
                                        }
                                        primary
                                    />

                                    <View>
                                        <Input
                                            title="Password"
                                            placeholder="Your password"
                                            value={values.password}
                                            onChangeText={handleChange(
                                                'password'
                                            )}
                                            isPassword
                                            error={
                                                touched.password &&
                                                errors.password ? (
                                                    <MessageError
                                                        error={errors.password}
                                                    />
                                                ) : null
                                            }
                                            primary
                                        />
                                    </View>

                                    <View
                                        style={{
                                            width: 136,
                                            marginLeft: 'auto',
                                        }}
                                    >
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
                            <ButtonNoBg
                                title="Register"
                                onPress={() => navigation.navigate('Register')}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
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
    loading: {
        backgroundColor: 'red',
        width: 300,
        height: 300,
    },
    notification: {
        position: 'absolute',
        top: -100,
        left: 18,
        zIndex: 100,
    },
})
