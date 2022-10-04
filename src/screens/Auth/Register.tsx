import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '@theme'
import { Formik } from 'formik'
import React, { useState } from 'react'
import {
    ArrowRight,
    ButtonForm,
    CheckBox,
    Header,
    IConBack,
    IconCheck,
    Input,
    InputDrop,
    MessageError,
} from '@components'

const Register = () => {
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

    const handleSubmitForm = (data: any) => {
        console.log('data----submit: ', data)
        // navigation.navigate('VerificationCode')
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={10}
            >
                <View style={{ marginHorizontal: 22 }}>
                    <Header
                        Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                        showTextHeader
                        showRightIcon
                        title="Register"
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <ScrollView
                    style={styles.contentBody}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.content}>
                        <Text style={styles.content_title}>
                            Your SNS accounts
                        </Text>
                        <Text style={styles.content_description}>
                            Add the accounts you want to increase followers
                        </Text>
                    </View>

                    <Formik
                        initialValues={{
                            youtube: '@youtube',
                            instagram: '@instagram',
                            twitter: '@twitter',
                            facebook: '@facebook',
                            whatsapp: '@whatsapp',
                            email: 'user2@gmail.com',
                            password: '123456',
                            username: 'User Secondary',
                            gender: 'Male',
                            birth_year: '2000',
                            introductionCode: 'Hello everybody',
                        }}
                        // validationSchema={checkInputTest}
                        onSubmit={(data: any) => handleSubmitForm(data)}
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
                                        primary
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
                                        primary
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
                                        primary
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
                                        primary
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
                                        primary
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

                                    <View>
                                        <Input
                                            title="Password"
                                            placeholder="Your password"
                                            onChangeText={handleChange(
                                                'password'
                                            )}
                                            value={values.password}
                                            isPassword
                                            error={
                                                touched.password && (
                                                    <MessageError
                                                        error={errors.password}
                                                    />
                                                )
                                            }
                                            primary
                                        />
                                    </View>
                                </View>

                                <Input
                                    title="User name"
                                    onChangeText={handleChange('username')}
                                    value={values.username}
                                    error={
                                        touched.username && (
                                            <MessageError
                                                error={errors.username}
                                            />
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
                                            onChangeValue={handleChange(
                                                'gender'
                                            )}
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
                                                        error={
                                                            errors.birth_year
                                                        }
                                                    />
                                                )
                                            }
                                        />
                                    </View>
                                </View>

                                <Input
                                    title="Introduction Code"
                                    onChangeText={handleChange(
                                        'introductionCode'
                                    )}
                                    value={values.introductionCode}
                                    error={
                                        touched.introductionCode && (
                                            <MessageError
                                                error={errors.introductionCode}
                                            />
                                        )
                                    }
                                    introduction
                                />

                                <View style={styles.footer}>
                                    <CheckBox
                                        Icon={() => (
                                            <IconCheck
                                                stroke={COLORS.Neutral0}
                                            />
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
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
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
        marginBottom: 50,
        marginTop: 36,
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
})
