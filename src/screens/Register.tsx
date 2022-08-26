import { Formik } from 'formik'
import React, { useState } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import * as Yup from 'yup'

import ButtonForm from '../components/Button/ButtonForm'
import Input from '../components/Input/Input'
import InputDrop from '../components/Input/InputDrop'

import { COLORS, SIZES } from '../assets/constants/theme'

import CaretLeft from '../assets/icons/CaretLeft.svg'
import Eye from '../assets/icons/Eye.svg'
import EyeSlash from '../assets/icons/EyeSlash.svg'
import { checkInputTest } from '../utils/checkInput'

const Register = ({ navigation }: any) => {
    const [data, setData] = useState({ secureTextEntry: true })
    const [valueGender, setValueGender] = useState<string>('Male')

    const [itemsGender, setItemsGender] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ])

    const [valueBirth, setValueBirth] = useState<string>('2000')
    const [itemsBirth, setItemsBirth] = useState<any[]>([
        { label: '2000', value: '2000' },
        { label: '2001', value: '2001' },
        { label: '2002', value: '2002' },
    ])

    const updateSecureTextEntry = () => {
        setData({
            secureTextEntry: !data.secureTextEntry,
        })
    }
    console.log('Render')

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={10}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <CaretLeft />
                    </TouchableOpacity>
                    <Text style={styles.txtRegister}>Register</Text>
                    <Text></Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.content_title}>Your SNS accounts</Text>
                    <Text style={styles.content_description}>
                        Add the accounts you want to increase followers
                    </Text>
                </View>

                <Formik
                    initialValues={{
                        youtube: '',
                        instagram: '',
                        twitter: '',
                        facebook: '',
                        whatsapp: '',
                        email: '',
                        password: '',
                        username: '',
                        gender: 'Male',
                        birth_year: '2000',
                        introductionCode: '',
                    }}
                    // validationSchema={checkInputTest}
                    onSubmit={(x) => console.log(x)}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        errors,
                        values,
                        touched,
                    }) => (
                        <>
                            <View>
                                <Input
                                    onChangeText={handleChange('youtube')}
                                    value={values.youtube}
                                    title="Youtube"
                                />
                                {touched.youtube && (
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.youtube}
                                    </Text>
                                )}
                                <Input
                                    title="Instagram"
                                    onChangeText={handleChange('instagram')}
                                    value={values.instagram}
                                />
                                {touched.instagram && (
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.instagram}
                                    </Text>
                                )}

                                <Input
                                    title="Twitter"
                                    onChangeText={handleChange('twitter')}
                                    value={values.twitter}
                                />
                                {touched.twitter && (
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.twitter}
                                    </Text>
                                )}

                                <Input
                                    title="Facebook"
                                    onChangeText={handleChange('facebook')}
                                    value={values.facebook}
                                />
                                {touched.facebook && (
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.facebook}
                                    </Text>
                                )}

                                <Input
                                    title="Whatsapp"
                                    onChangeText={handleChange('whatsapp')}
                                    value={values.whatsapp}
                                />
                                {touched.whatsapp && (
                                    <Text
                                        style={{ fontSize: 10, color: 'red' }}
                                    >
                                        {errors.whatsapp}
                                    </Text>
                                )}
                            </View>

                            <Text style={styles.txtFollow}>
                                Follower account
                            </Text>

                            <View>
                                <Input
                                    title="Email"
                                    placeholder="Your email"
                                    onChangeText={handleChange('email')}
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
                                            data.secureTextEntry ? true : false
                                        }
                                        // secureTextEntry={isHide}
                                        onChangeText={handleChange('password')}
                                    />
                                    {touched.password && (
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: 'red',
                                            }}
                                        >
                                            {errors.password}
                                        </Text>
                                    )}
                                    <View style={styles.icon}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={updateSecureTextEntry}
                                        >
                                            {data.secureTextEntry ? (
                                                <EyeSlash />
                                            ) : (
                                                <Eye />
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <Input
                                title="User name"
                                onChangeText={handleChange('username')}
                                value={values.username}
                            />
                            {touched.username && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.username}
                                </Text>
                            )}
                            <View style={styles.inputDrop}>
                                <View style={styles.inputItemGender}>
                                    <InputDrop
                                        title="Gender"
                                        value={valueGender}
                                        setValue={setValueGender}
                                        items={itemsGender}
                                        setItems={setItemsGender}
                                        onChangeValue={handleChange('gender')}
                                    />
                                    {touched.gender && (
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: 'red',
                                            }}
                                        >
                                            {errors.gender}
                                        </Text>
                                    )}
                                </View>
                                <View style={styles.inputItemBirth}>
                                    <InputDrop
                                        title="Birth year"
                                        value={valueBirth}
                                        setValue={setValueBirth}
                                        items={itemsBirth}
                                        setItems={setItemsBirth}
                                        onChangeValue={handleChange(
                                            'birth_year'
                                        )}
                                    />
                                    {touched.birth_year && (
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: 'red',
                                            }}
                                        >
                                            {errors.birth_year}
                                        </Text>
                                    )}
                                </View>
                            </View>

                            <Input
                                title="Introduction Code"
                                onChangeText={handleChange('introductionCode')}
                                value={values.introductionCode}
                            />
                            {touched.introductionCode && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.introductionCode}
                                </Text>
                            )}

                            <View style={styles.btn}>
                                <ButtonForm
                                    label="Submit"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
    },
    header: {
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'red',
    },
    txtRegister: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: SIZES.large,
        color: COLORS.Neutral10,
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
        marginBottom: 18,
        marginTop: 36,
    },
})
