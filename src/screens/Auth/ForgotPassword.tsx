import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { ButtonForm, Input, MessageError } from '@components'
import { COLORS, SIZES } from '@assets/constants'

const ForgotPassword = ({ navigation }: any) => {
    const checkLogin = Yup.object().shape({
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email Address is Required'),
    })

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Forgot Password</Text>
            <Text style={styles.description}>
                Enter your email and we’ll send the instruction to you
            </Text>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={checkLogin}
                onSubmit={(x) => console.log(x)}
            >
                {({ handleSubmit, handleChange, errors, values, touched }) => (
                    <View style={styles.form}>
                        <Input
                            title="Email"
                            placeholder="Your email"
                            onChangeText={handleChange('email')}
                            value={values.email}
                            error={
                                touched.email && (
                                    <MessageError error={errors.email} />
                                )
                            }
                            primary
                        />

                        <View style={styles.btn}>
                            <ButtonForm label="Submit" onPress={handleSubmit} />
                        </View>
                        <ButtonForm
                            secondary
                            label="Back to login"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                )}
            </Formik>
        </ScrollView>
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
})
