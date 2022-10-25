import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { BORDER, COLORS, SIZES } from '@theme'
import { useNavigation } from '@react-navigation/native'
import { Input } from '@components/Input'
import { MessageError } from '@components/MessageError'
import { ButtonComponent, ButtonForm } from '@components/Button'

const ForgotPassword = () => {
    const navigation = useNavigation()
    const checkLogin = Yup.object().shape({
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email Address is Required'),
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    <View>
                        <Text style={styles.header}>Forgot Password</Text>
                        <Text style={styles.description}>
                            Enter your email and we’ll send the instruction to
                            you
                        </Text>
                    </View>
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={checkLogin}
                        onSubmit={(x) => console.log(x)}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            errors,
                            values,
                            touched,
                        }) => (
                            <View style={styles.form}>
                                <Input
                                    title="Email"
                                    placeholder="Your email"
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    error={
                                        touched.email && (
                                            <MessageError
                                                error={errors.email}
                                            />
                                        )
                                    }
                                    primary
                                />

                                <View style={styles.btn}>
                                    <ButtonComponent
                                        label="Submit"
                                        onPress={handleSubmit}
                                        styleBtn={styles.btnSubmit}
                                        styleText={styles.btnText}
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
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ForgotPassword

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
        fontSize: SIZES.font,
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
    btnSubmit: {
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
    btnText: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.White,
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
