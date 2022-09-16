import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React, { useState } from 'react'
import HeaderAuth from '../../components/Header/HeaderAuth'
import ButtonNoBg from '../../components/Button/ButtonNoBg'
import InputDrop from '../../components/Input/InputDrop'
import Input from '../../components/Input/Input'
import ButtonForm from '../../components/Button/ButtonForm'

import { Formik } from 'formik'
import { checkInputTest } from '../../utils/checkInput'

const RegisterEnd = ({ navigation }: any) => {
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

    return (
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
                    onSubmit={(values) => console.log('values', values)}
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
