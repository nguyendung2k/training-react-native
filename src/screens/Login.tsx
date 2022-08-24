import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input/Input'
import LabelInput from '../components/Label/LabelInput'
import ButtonForm from '../components/Button/ButtonForm'
import { COLORS, SIZES } from '../assets/constants/theme'

import EyeSlash from '../assets/icons/EyeSlash.svg'
import Eye from '../assets/icons/Eye.svg'

function Login({ navigation }: any) {
    const [data, setData] = useState({
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const checkLogin = Yup.object().shape({
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email Address is Required'),
        password: Yup.string()
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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={1}
            style={styles.container}
        >
            <Image
                style={styles.logo}
                source={require('../assets/images/LogoBlue.png')}
            />

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                // validationSchema={checkLogin}
                onSubmit={(x) => console.log(x)}
            >
                {({ handleSubmit, handleChange, errors, values }) => (
                    <View style={styles.form}>
                        <Text style={styles.textLogin}>Login</Text>
                        <LabelInput label="Email" />
                        <Input
                            onChangeText={handleChange('email')}
                            placeholder="Your email"
                            value={values.email}
                        />
                        {errors.email && (
                            <Text style={{ fontSize: 10, color: 'red' }}>
                                {errors.email}
                            </Text>
                        )}
                        <LabelInput label="Password" />
                        <View>
                            <Input
                                placeholder="Your password"
                                secureTextEntry={
                                    data.secureTextEntry ? true : false
                                }
                                value={values.password}
                                onChangeText={handleChange('password')}
                                Icon={data.secureTextEntry ? EyeSlash : Eye}
                                onPress={updateSecureTextEntry}
                            />
                        </View>
                        {errors.password && (
                            <Text style={{ fontSize: 10, color: 'red' }}>
                                {errors.password}
                            </Text>
                        )}
                        <View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('ForgotPassword')
                                }
                            >
                                <Text style={styles.textForgot}>
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <ButtonForm label="Login" onPress={handleSubmit} />
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
                )}
            </Formik>

            {/* <Button title="Test" onPress={() => console.log('Test')} /> */}
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 67,
    },
    form: {
        marginHorizontal: 25,
    },
    textForgot: {
        textAlign: 'right',
        marginTop: 16,
        marginBottom: 33,
        fontSize: SIZES.small,
        color: COLORS.Neutral4,
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
