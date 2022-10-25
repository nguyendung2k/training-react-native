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
    StatusBar,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { BORDER, COLORS, SIZES } from '@theme'
import { RootState, useAppDispatch } from '@redux/store'
import { detailUser, loadingAction, loginAuth, showNoticeSuccess } from '@redux'
import { Input } from '@components/Input'
import { NotificationModal } from '@components/Modal'
import { ArrowRight, IconCheckCircle, IconMinusCircle } from '@components/Svg'
import { MessageError } from '@components/MessageError'
import { ButtonComponent, ButtonForm, ButtonNoBg } from '@components/Button'
import { RegisterScreenProp } from '@navigation/type'

const userSelector = (state: RootState) => state.user.user
const noticeSelector = (state: RootState) => state.home.notice

const Login = () => {
    const navigation =
        useNavigation<RegisterScreenProp<'Login'>['navigation']>()
    const dispatch = useAppDispatch()
    const userData = useSelector(userSelector)
    // console.log(userData)

    const notice = useSelector(noticeSelector)

    const [showNotice, setShowNotice] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShowNotice(false)
        }, 3000)
    }, [showNotice])

    useEffect(() => {
        setTimeout(() => {
            dispatch(showNoticeSuccess(false))
        }, 5000)
    }, [notice])

    const handleLogin = (values: { email: string; password: string }) => {
        const checkLogin = userData.filter((item) => {
            const email = values.email.toLowerCase()
            const password = values.password.toLowerCase()
            return item.email === email && item.password === password
        })
        if (checkLogin.length === 0) {
            setShowNotice(true)
        } else {
            const tokenUser = checkLogin[0].data.token
            const detail = checkLogin[0].data
            dispatch(loginAuth(tokenUser))
            dispatch(detailUser(detail))
            dispatch(loadingAction(true))
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
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={COLORS.Neutral0}
            />
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
                        <View style={styles.notification}>
                            {notice && (
                                <NotificationModal
                                    onPress={() => setShowNotice(false)}
                                    value="Register Success"
                                    ICon={() => (
                                        <IconCheckCircle
                                            fill={COLORS.Primary}
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
                                email: 'user2@gmail.com',
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
                                        <ButtonComponent
                                            label="Forgot password?"
                                            styleBtn={styles.btnForgot}
                                            styleText={styles.textForgot}
                                            onPress={() =>
                                                navigation.navigate(
                                                    'ForgotPassword'
                                                )
                                            }
                                        />
                                    </View>
                                    <ButtonComponent
                                        label="Login"
                                        styleBtn={styles.btnLogin}
                                        styleText={styles.textBtn}
                                        Icon={
                                            <ArrowRight stroke={COLORS.White} />
                                        }
                                        onPress={() => handleSubmit()}
                                    />
                                </View>
                            )}
                        </Formik>
                        <View style={styles.footer}>
                            <Text style={styles.textFooter}>
                                Don’t have an account?
                            </Text>
                            <ButtonComponent
                                label="Register"
                                styleBtn={styles.btnForgotPassword}
                                styleText={styles.textForgotPassword}
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

    textBtn: {
        fontSize: SIZES.large,
        fontWeight: '600',
        marginRight: 10,
        color: COLORS.White,
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
    btnLogin: {
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
    btnForgotPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textForgotPassword: {
        color: COLORS.Primary,
        fontSize: SIZES.medium,
        fontWeight: '600',
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
