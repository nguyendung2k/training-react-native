import { Image, StyleSheet, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as ImagePicker from 'expo-image-picker'
import {
    createUser,
    formatNewUser,
    resetGroupJoin,
    RootState,
    showNoticeSuccess,
} from '@redux'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '@theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Yup from 'yup'
import { RegisterScreenProp } from '@navigation/type'
import { Input, InputDrop } from '@components/Input'
import { HeaderAuth } from '@components/Header'
import { ButtonForm, ButtonNoBg } from '@components/Button'
import { MessageError } from '@components/MessageError'

interface inputValue {
    profession?: string
    birth_year?: string
    gender?: string
    introduction?: string
}

const userSelector = (state: RootState) => state.user.user
const registerSelector = (state: RootState) => state.register

const RegisterEnd = () => {
    const dispatch = useDispatch()
    const navigation =
        useNavigation<RegisterScreenProp<'RegisterEnd'>['navigation']>()
    const userData = useSelector(userSelector)
    const registerUser = useSelector(registerSelector)

    const [valueProfession, setValueProfession] = useState<string>('Singer')
    const [itemsProfession, setItemsProfession] = useState<
        {
            label: string
            value: string
        }[]
    >([
        { label: 'Singer', value: 'Singer' },
        { label: 'Doctor', value: 'Doctor' },
        { label: 'Cook', value: 'Cook' },
    ])

    const [valueGender, setValueGender] = useState<string>('Male')
    const [itemsGender, setItemsGender] = useState<
        {
            label: string
            value: string
        }[]
    >([
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
    ])

    const [valueBirth, setValueBirth] = useState<string>('2000')
    const [itemsBirth, setItemsBirth] = useState<
        {
            label: string
            value: string
        }[]
    >([
        { label: '2000', value: '2000' },
        { label: '2001', value: '2001' },
        { label: '2002', value: '2002' },
    ])

    const [image, setImage] = useState<string>('')

    const handlePickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const handelSubmitForm = (values: inputValue) => {
        const newUser = {
            ...registerUser,
            data: {
                ...registerUser.data,
                image: image,
                introduction: values.introduction,
            },
        }

        const ListNewUser = [...userData, newUser]
        dispatch(createUser(ListNewUser))
        dispatch(formatNewUser())
        dispatch(showNoticeSuccess(true))
        dispatch(resetGroupJoin())
        navigation.popToTop()
    }

    const checkInput = Yup.object({
        introduction: Yup.string().required('Introduction is required'),
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Neutral0 }}>
            <KeyboardAwareScrollView
                style={{ marginHorizontal: 24 }}
                showsVerticalScrollIndicator={false}
            >
                <HeaderAuth
                    title="Getting started"
                    description="Personal Introduction"
                    txtContent="Profile picture"
                    number="3"
                    primary
                />

                <View style={styles.content}>
                    <Image
                        source={{
                            uri:
                                image === ''
                                    ? 'https://i.stack.imgur.com/l60Hf.png'
                                    : image,
                        }}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 100,
                            marginBottom: 20,
                        }}
                    />
                    <ButtonNoBg
                        title="Choose picture"
                        onPress={handlePickImage}
                    />
                </View>

                <HeaderAuth txtContent="Profile info" number="4" />

                <Formik
                    initialValues={{
                        profession: 'Singer',
                        birth_year: '2000',
                        gender: 'Male',
                        introduction: 'Hello world',
                    }}
                    validationSchema={checkInput}
                    onSubmit={handelSubmitForm}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                    }) => (
                        <View>
                            <View style={styles.contentInfo}>
                                <View>
                                    <InputDrop
                                        title="Profession"
                                        value={valueProfession}
                                        items={itemsProfession}
                                        setValue={setValueProfession}
                                        setItems={setItemsProfession}
                                        onChangeValue={handleChange(
                                            'profession'
                                        )}
                                    />
                                </View>
                                <View style={styles.groupInput}>
                                    <View>
                                        <InputDrop
                                            title="Birth year"
                                            value={valueBirth}
                                            items={itemsBirth}
                                            setValue={setValueBirth}
                                            setItems={setItemsBirth}
                                            onChangeValue={handleChange(
                                                'birth_year'
                                            )}
                                        />
                                    </View>
                                    <View>
                                        <InputDrop
                                            title="Gender"
                                            value={valueGender}
                                            items={itemsGender}
                                            setValue={setValueGender}
                                            setItems={setItemsGender}
                                            onChangeValue={handleChange(
                                                'gender'
                                            )}
                                        />
                                    </View>
                                </View>

                                <View>
                                    <Input
                                        title="Introduction"
                                        secondary
                                        onChangeText={handleChange(
                                            'introduction'
                                        )}
                                        introduction
                                        value={values.introduction}
                                        error={
                                            touched.introduction &&
                                            errors.introduction ? (
                                                <MessageError
                                                    error={errors.introduction}
                                                />
                                            ) : null
                                        }
                                    />
                                </View>
                            </View>

                            <View style={styles.btn}>
                                <ButtonForm
                                    label="Start"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default RegisterEnd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 52,
    },
    contentInfo: {
        // backgroundColor: 'black',
    },
    groupInput: {
        // flexDirection:'row'
    },
    btn: {
        marginTop: 60,
        marginBottom: 10,
    },
})
