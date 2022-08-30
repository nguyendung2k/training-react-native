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
import * as Yup from 'yup'
import { Formik } from 'formik'
import { api } from '../../api/userApi'
import Input from '../../components/Input/Input'
import ButtonForm from '../../components/Button/ButtonForm'
import { COLORS, SIZES } from '../../assets/constants/theme'

import { ArrowRight, Eye, EyeSlash } from '../../components/Svg/Icon'
import MessageError from '../../components/MessageError/MessageError'

function Login({ navigation }: any) {
    const [showPass, setShowPass] = useState<boolean>(true)
    const [user, setUser] = useState({})

    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await api.getDataUser
    //         setUser(data)
    //     }
    //     getData()
    // }, [])

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
                            email: '',
                            password: '',
                        }}
                        validationSchema={checkInput}
                        onSubmit={(values) => console.log(values)}
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
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={styles.textFooter_primary}>
                                Register
                            </Text>
                        </TouchableOpacity>
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
        marginLeft: 'auto',
        marginRight: 'auto',
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
