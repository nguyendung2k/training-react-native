import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import {
    ButtonForm,
    ButtonNoBg,
    HeaderAuth,
    Input,
    InputDrop,
} from '@components'

import { useNavigation } from '@react-navigation/native'
const RegisterEnd = () => {
    const navigation = useNavigation<any>()
    const [valueProfession, setValueProfession] = useState<string>('Singer')
    const [itemsProfession, setItemsProfession] = useState<any[]>([
        { label: 'Singer', value: 'Singer' },
        { label: 'Doctor', value: 'Doctor' },
        { label: 'Cook', value: 'Cook' },
    ])

    const [valueGender, setValueGender] = useState<string>('Male')
    const [itemsGender, setItemsGender] = useState<any[]>([
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
    ])

    const [valueBirth, setValueBirth] = useState<string>('2000')
    const [itemsBirth, setItemsBirth] = useState<any[]>([
        { label: '2000', value: '2000' },
        { label: '2001', value: '2001' },
        { label: '2002', value: '2002' },
    ])

    const handelSubmitForm = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HeaderAuth
                        title="Getting started"
                        description="Personal Introduction"
                        txtContent="Profile picture"
                        number="3"
                        primary
                    />

                    <View style={styles.content}>
                        <Image
                            source={require('../../assets/images/Choosepicture.png')}
                        />
                        <ButtonNoBg
                            title="Choose picture"
                            onPress={() => console.log('OnPress')}
                        />
                    </View>

                    <HeaderAuth txtContent="Profile info" number="4" />

                    <Formik
                        initialValues={{
                            profession: 'Singer',
                            birth_year: '2000',
                            gender: 'Male',
                            introduction: '',
                        }}
                        // validationSchema={checkInputTest}
                        onSubmit={handelSubmitForm}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            errors,
                            touched,
                        }) => (
                            <>
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
                                        {touched.profession && (
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    color: 'red',
                                                }}
                                            >
                                                {errors.profession}
                                            </Text>
                                        )}
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
                                    </View>

                                    <View>
                                        <Input
                                            title="Introduction"
                                            secondary
                                            onChangeText={handleChange(
                                                'introduction'
                                            )}
                                            value={values.introduction}
                                        />
                                        {touched.introduction && (
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    color: 'red',
                                                }}
                                            >
                                                {errors.introduction}
                                            </Text>
                                        )}
                                    </View>
                                </View>

                                <View style={styles.btn}>
                                    <ButtonForm
                                        label="Start"
                                        onPress={handleSubmit}
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
        marginTop: 48,
        marginBottom: 10,
    },
})
