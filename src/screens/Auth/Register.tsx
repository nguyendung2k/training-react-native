import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '@theme'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import {
    ArrowRight,
    ButtonForm,
    CheckBox,
    Header,
    IConBack,
    IconCheck,
    IconMinusCircle,
    Input,
    InputDrop,
    MessageError,
    NotificationModal,
} from '@components'
import { createNewUser, RootState } from '@redux'
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Yup from 'yup'

interface dataUserRegister {
    id: string
    email: string
    password: string
    username: string
    gender: string
    birth_day: string
    introductionCode: string
    introduction: string
}

const userSelector = (state: RootState) => state.user.user

const Register = () => {
    const dispatch = useDispatch()
    const userData = useSelector(userSelector)

    console.log('userData', userData)

    const navigation = useNavigation<any>()
    const [valueGender, setValueGender] = useState<string>('Male')
    const [itemsGender, setItemsGender] = useState<any[]>([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ])

    const [valueBirth, setValueBirth] = useState<string>('2000')
    const [itemsBirth, setItemsBirth] = useState<any[]>([
        { label: '2000', value: '2000' },
        { label: '2001', value: '2001' },
        { label: '2002', value: '2002' },
    ])

    const [checkBox, setCheckBox] = useState(false)
    const [showNotice, setShowNotice] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShowNotice(false)
        }, 4000)
    }, [showNotice])

    const handleSubmitForm = (data: dataUserRegister) => {
        const checkUser = userData.every((item) => {
            return item.email !== data.email
        })

        if (checkUser === true) {
            const [first, last] = data.username.split(' ')
            const params = {
                id: (userData.length + 1).toString(),
                email: data.email,
                password: data.password,
                data: {
                    token: Math.random().toString(),
                    first_name: first,
                    last_name: last,
                    full_name: data.username,
                    introduce_code: Number(data.introductionCode),
                    email: data.email,
                },
            }
            dispatch(createNewUser(params))
            navigation.navigate('VerificationCode')
        } else {
            setShowNotice(true)
        }
    }

    const checkInput = Yup.object({
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email Address is Required'),
        password: Yup.string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        username: Yup.string().required('Username is required'),
        introductionCode: Yup.string().required(
            'Introduction Code is required'
        ),
        gender: Yup.string().required('Gender is required'),
        birth_year: Yup.string().required('Birth year is required'),
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notification}>
                {showNotice && (
                    <NotificationModal
                        onPress={() => setShowNotice(false)}
                        value="Email already exists"
                        ICon={() => <IconMinusCircle fill={COLORS.Neutral4} />}
                    />
                )}
            </View>
            <View style={{ marginHorizontal: 22 }}>
                <Header
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    showTextHeader
                    showRightIcon
                    title="Register"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
            <KeyboardAwareScrollView>
                <Formik
                    initialValues={{
                        email: 'user2@gmail.com',
                        password: '123456',
                        username: 'User Secondary',
                        gender: 'Male',
                        birth_year: '2000',
                        introductionCode: '123456',
                    }}
                    validationSchema={checkInput}
                    onSubmit={(data: any) => handleSubmitForm(data)}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        errors,
                        values,
                        touched,
                    }) => (
                        <View style={{ marginHorizontal: 24 }}>
                            <Input
                                title="Email"
                                placeholder="Your email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                error={
                                    touched.email && (
                                        <MessageError error={errors.email} />
                                    )
                                }
                                primary
                            />

                            <Input
                                title="Password"
                                placeholder="Your password"
                                onChangeText={handleChange('password')}
                                value={values.password}
                                isPassword
                                error={
                                    touched.password && (
                                        <MessageError error={errors.password} />
                                    )
                                }
                                primary
                            />

                            <Input
                                title="User name"
                                onChangeText={handleChange('username')}
                                value={values.username}
                                error={
                                    touched.username && (
                                        <MessageError error={errors.username} />
                                    )
                                }
                                primary
                            />

                            <View style={styles.inputDrop}>
                                <View style={styles.inputItemGender}>
                                    <InputDrop
                                        title="Gender"
                                        value={valueGender}
                                        items={itemsGender}
                                        setValue={setValueGender}
                                        setItems={setItemsGender}
                                        onChangeValue={handleChange('gender')}
                                        error={
                                            touched.gender && (
                                                <MessageError
                                                    error={errors.gender}
                                                />
                                            )
                                        }
                                    />
                                </View>
                                <View style={{ marginHorizontal: 5 }} />
                                <View style={styles.inputItemBirth}>
                                    <InputDrop
                                        title="Birth year"
                                        value={valueBirth}
                                        items={itemsBirth}
                                        setValue={setValueBirth}
                                        setItems={setItemsBirth}
                                        onChangeValue={handleChange(
                                            'birth_year'
                                        )}
                                        error={
                                            touched.birth_year && (
                                                <MessageError
                                                    error={errors.birth_year}
                                                />
                                            )
                                        }
                                    />
                                </View>
                            </View>

                            <Input
                                title="Introduction Code"
                                onChangeText={handleChange('introductionCode')}
                                value={values.introductionCode}
                                error={
                                    touched.introductionCode && (
                                        <MessageError
                                            error={errors.introductionCode}
                                        />
                                    )
                                }
                                primary
                                number
                            />

                            <View style={styles.footer}>
                                <CheckBox
                                    Icon={() => (
                                        <IconCheck stroke={COLORS.Neutral0} />
                                    )}
                                    check={checkBox}
                                    onPress={() => setCheckBox(!checkBox)}
                                />
                                <Text>
                                    I agree to the <Text />
                                    <Text style={styles.footerTxtPrimary}>
                                        Terms of Use
                                    </Text>
                                </Text>
                            </View>

                            <View style={styles.btn}>
                                <ButtonForm
                                    label="Submit"
                                    onPress={handleSubmit}
                                    Icon={() => (
                                        <ArrowRight stroke={COLORS.White} />
                                    )}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },

    contentBody: {
        marginHorizontal: 25,
    },
    content: {
        marginTop: 37,
    },
    content_title: {
        color: COLORS.Neutral10,
        fontSize: SIZES.large,
        fontWeight: '500',
        marginBottom: 4,
    },
    content_description: {
        color: COLORS.Neutral3,
        fontSize: SIZES.font,
        marginBottom: 20,
    },
    txtFollow: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: SIZES.large,
        color: COLORS.Neutral10,
        marginTop: 40,
        marginBottom: 20,
    },
    icon: {
        position: 'absolute',
        width: 24,
        height: 24,
        right: 16,
        top: '50%',
    },
    inputDrop: {
        flexDirection: 'row',
    },
    inputItemGender: {
        flex: 1,
    },
    inputItemBirth: {
        flex: 1,
    },
    btn: {
        // marginBottom: 50,
        marginTop: 41,
        // marginTop: 'auto',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 33,
        // marginBottom: 30,
    },

    footerTxtPrimary: {
        color: COLORS.Primary,
    },
    notification: {
        position: 'absolute',
        zIndex: 1000,
        left: 16,
        top: 24,
    },
})
