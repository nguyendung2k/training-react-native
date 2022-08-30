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
import { Formik } from 'formik'
import Input from '../components/Input/Input'
import ButtonForm from '../components/Button/ButtonForm'
import { COLORS, SIZES } from '../assets/constants/theme'

import EyeSlash from '../assets/icons/EyeSlash.svg'
import Eye from '../assets/icons/Eye.svg'
import ArrowRightWhite from '../assets/icons/ArrowRightWhite.svg'
import { checkInputTest } from '../utils/checkInput'

const userAPI = `https://fakestoreapi.com/users`

function Login({ navigation }: any) {
    const [showPass, setShowPass] = useState<boolean>(true)

    const [users, setUsers] = useState<
        {
            email: string
            password: string
        }[]
    >([])

    // useEffect(() => {
    //     fetch(userAPI)
    //         .then((response) => response.json())
    //         .then((data) => setUsers(data))
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    const updateShowPassAndIcon = () => {
        setShowPass(!showPass)
    }

    console.log('Login render')

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/LogoBlue.png')}
                    />

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        // validationSchema={checkInputTest}
                        onSubmit={(data) => navigation.navigate('Home')}
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
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.email}
                                    </Text>
                                )}

                                <View>
                                    <Input
                                        title="Password"
                                        placeholder="Your password"
                                        secureTextEntry={
                                            showPass ? true : false
                                        }
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        Icon={() =>
                                            showPass ? <EyeSlash /> : <Eye />
                                        }
                                        onPress={updateShowPassAndIcon}
                                    />
                                </View>
                                {touched.password && (
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.password}
                                    </Text>
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
                                    onPress={handleSubmit}
                                    Icon={() => <ArrowRightWhite />}
                                />
                                <View style={styles.footer}>
                                    <Text style={styles.textFooter}>
                                        Don’t have an account?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate('Register')
                                        }
                                    >
                                        <Text style={styles.textFooter_primary}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
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
