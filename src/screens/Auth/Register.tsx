import { Formik } from 'formik'
import React, { useRef, useState } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import ButtonForm from '../../components/Button/ButtonForm'
import Input from '../../components/Input/Input'
import InputDrop from '../../components/Input/InputDrop'
import CheckBox from '../../components/Checkbox/CheckBox'

import { COLORS, SIZES } from '../../assets/constants/theme'
import Header from '../../components/Header/Header'
import MessageError from '../../components/MessageError/MessageError'
import { ArrowRight, IConBack, IconCheck } from '../../components/Svg/Icon'

const Register = ({ navigation }: any) => {
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

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={10}
        >
            <ScrollView
                style={styles.contentBody}
                showsVerticalScrollIndicator={false}
            >
                <Header
                    title="Register"
                    onPress={() => navigation.navigate('Login')}
                    showTextHeader={true}
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                />
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
                    onSubmit={() => navigation.navigate('VerificationCode')}
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
                                    error={
                                        touched.youtube && (
                                            <MessageError
                                                error={errors.youtube}
                                            />
                                        )
                                    }
                                />

                                <Input
                                    title="Instagram"
                                    onChangeText={handleChange('instagram')}
                                    value={values.instagram}
                                    error={
                                        touched.instagram && (
                                            <MessageError
                                                error={errors.instagram}
                                            />
                                        )
                                    }
                                />

                                <Input
                                    title="Twitter"
                                    onChangeText={handleChange('twitter')}
                                    value={values.twitter}
                                    error={
                                        touched.twitter && (
                                            <MessageError
                                                error={errors.twitter}
                                            />
                                        )
                                    }
                                />

                                <Input
                                    title="Facebook"
                                    onChangeText={handleChange('facebook')}
                                    value={values.facebook}
                                    error={
                                        touched.facebook && (
                                            <MessageError
                                                error={errors.facebook}
                                            />
                                        )
                                    }
                                />

                                <Input
                                    title="Whatsapp"
                                    onChangeText={handleChange('whatsapp')}
                                    value={values.whatsapp}
                                    error={
                                        touched.whatsapp && (
                                            <MessageError
                                                error={errors.whatsapp}
                                            />
                                        )
                                    }
                                />
                            </View>

                            <Text style={styles.txtFollow}>
                                Follower account
                            </Text>

                            <View>
                                <Input
                                    title="Email"
                                    placeholder="Your email"
                                    onChangeText={handleChange('email')}
                                    error={
                                        touched.email && (
                                            <MessageError
                                                error={errors.email}
                                            />
                                        )
                                    }
                                />

                                <View>
                                    <Input
                                        title="Password"
                                        placeholder="Your password"
                                        onChangeText={handleChange('password')}
                                        isPassword
                                        error={
                                            touched.password && (
                                                <MessageError
                                                    error={errors.password}
                                                />
                                            )
                                        }
                                    />
                                </View>
                            </View>

                            <Input
                                title="User name"
                                onChangeText={handleChange('username')}
                                value={values.username}
                                error={
                                    touched.username && (
                                        <MessageError error={errors.username} />
                                    )
                                }
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
                            />

                            <View style={styles.footer}>
                                <CheckBox
                                    Icon={() => (
                                        <IconCheck stroke={COLORS.White} />
                                    )}
                                />
                                <Text>
                                    I agree to the
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
        marginBottom: 18,
        marginTop: 36,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 33,
    },

    footerTxtPrimary: {
        color: COLORS.Primary,
    },
})
