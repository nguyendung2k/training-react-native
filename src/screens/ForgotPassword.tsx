import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import LabelInput from '../components/Label/LabelInput'
import Input from '../components/Input/Input'
import { COLORS, SIZES } from '../assets/constants/theme'
import ButtonForm from '../components/Button/ButtonForm'

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
                        <LabelInput label="Email" />
                        <Input
                            placeholder="Your email"
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        {touched.email && (
                            <Text style={{ fontSize: 10, color: 'red' }}>
                                {errors.email}
                            </Text>
                        )}
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
