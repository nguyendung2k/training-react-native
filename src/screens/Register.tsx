import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'

import { Formik } from 'formik'
import * as Yup from 'yup'
import { Picker } from '@react-native-picker/picker'

import LabelInput from '../components/Label/LabelInput'
import Input from '../components/Input/Input'
import ButtonForm from '../components/Button/ButtonForm'
import InputDrop from '../components/Input/InputDrop'

import { COLORS, SIZES } from '../assets/constants/theme'

import EyeSlash from '../assets/icons/EyeSlash.svg'
import Eye from '../assets/icons/Eye.svg'
import CaretLeft from '../assets/icons/CaretLeft.svg'

const Register = ({ navigation }: any) => {
    const [data, setData] = useState({
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
            <View>
                <LabelInput label="Youtube" />
                <Input />

                <LabelInput label="Instagram" />
                <Input />

                <LabelInput label="Twitter" />
                <Input />

                <LabelInput label="Facebook" />
                <Input />

                <LabelInput label="Whatsapp" />
                <Input />
            </View>

            <Text style={styles.txtFollow}>Follower account</Text>

            <View>
                <LabelInput label="Email" />
                <Input placeholder="Your email" />

                <LabelInput label="Password" />
                <View>
                    <Input
                        placeholder="Your password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                    />
                    <View style={styles.icon}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? <EyeSlash /> : <Eye />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <LabelInput label="Username" />
            <Input />

            <LabelInput label="Introduction Code" />
            <Input />

            <View style={styles.btn}>
                <ButtonForm
                    label="Submit"
                    onPress={() => navigation.navigate('VerificationCode')}
                />
            </View>
        </ScrollView>
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
        top: 11,
    },
    btn: {
        marginBottom: 18,
        marginTop: 36,
    },
})
