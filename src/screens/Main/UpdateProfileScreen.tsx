import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    Image,
} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { IConBack, IconCheck } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import HeaderSlide from '../../components/Header/HeaderSlide'
import UpdateAvatar from '../../components/UpdateAvatar/UpdateAvatar'
import Input from '../../components/Input/Input'
import InputDrop from '../../components/Input/InputDrop'
import InputDropLogo from '../../components/Input/InputDropLogo'
import ButtonForm from '../../components/Button/ButtonForm'

const UpdateProfileScreen = ({ navigation }: any) => {
    const [valueGender, setValueGender] = useState<string>('Male')
    const [itemsGender, setItemsGender] = useState<any[]>([
        {
            label: 'Male',
            value: 'Male',
        },
        { label: 'Female', value: 'Female' },
    ])

    const [valueBirth, setValueBirth] = useState<string>('2000')
    const [itemsBirth, setItemsBirth] = useState<any[]>([
        { label: '2000', value: '2000' },
        { label: '2001', value: '2001' },
        { label: '2002', value: '2002' },
    ])

    const [valueLogo, setValueLogo] = useState<any>('Facebook')
    const [itemsLogo, setItemsLogo] = useState<any[]>([
        {
            label: (
                <Image
                    source={require('../../assets/images/LogoFacebook.png')}
                />
            ),
            value: 'Facebook',
        },
        {
            label: (
                <Image
                    source={require('../../assets/images/LogoInstagram.png')}
                    style={{ width: 24, height: 24 }}
                />
            ),
            value: 'Instagram',
        },
        {
            label: (
                <Image
                    source={require('../../assets/images/logos_twitter.png')}
                />
            ),
            value: 'Twitter',
        },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback>
                    <ScrollView
                        style={styles.contentUpdateProfile}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.header}>
                            <Header
                                Icon={() => (
                                    <IConBack stroke={COLORS.Neutral10} />
                                )}
                                showTextHeader
                                showRightIcon
                                title="Update Profile"
                                onPress={() =>
                                    navigation.navigate('YourProfileScreen')
                                }
                            />
                        </View>
                        <View style={styles.updateAvatar}>
                            <HeaderSlide title="Profile picture" />
                            <UpdateAvatar />
                        </View>
                        <View>
                            <HeaderSlide title="Profile info" />
                            <Input
                                title="Email"
                                value="Yuki.Matsuura@gmail.com"
                                tertiary
                            />
                            <Input
                                title="Username"
                                value="Matsuura Yuki"
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
                                        // onChangeValue={handleChange('gender')}
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
                                        // onChangeValue={handleChange(
                                        //     'birth_year'
                                        // )}
                                    />
                                </View>
                            </View>
                            <Input
                                title="Introduction"
                                value="Hello world, I’m Yuki from Japan and I’m creating the beautiful videos. I wish Facebook would notify me when someone"
                                secondary
                                introduction
                            />
                        </View>
                        <View>
                            <HeaderSlide title="SNS accounts" />
                            <View>
                                <View style={styles.inputPickSocial}>
                                    <View style={styles.inputItem}>
                                        <View style={styles.inputLogo}>
                                            <InputDropLogo
                                                value={valueLogo}
                                                setValue={setValueLogo}
                                                items={itemsLogo}
                                                setItems={setItemsLogo}
                                            />
                                        </View>
                                        <View
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <View style={styles.inputValue}>
                                            <Input
                                                primary
                                                value="Matsuura Yuki official"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.inputPickSocial}>
                                    <View style={styles.inputItem}>
                                        <View style={styles.inputLogo}>
                                            <InputDropLogo
                                                value={valueLogo}
                                                setValue={setValueLogo}
                                                items={itemsLogo}
                                                setItems={setItemsLogo}
                                            />
                                        </View>
                                        <View
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <View style={styles.inputValue}>
                                            <Input
                                                primary
                                                value="Matsuura Yuki official"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.inputPickSocial}>
                                    <View style={styles.inputItem}>
                                        <View style={styles.inputLogo}>
                                            <InputDropLogo
                                                value={valueLogo}
                                                setValue={setValueLogo}
                                                items={itemsLogo}
                                                setItems={setItemsLogo}
                                            />
                                        </View>
                                        <View
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <View style={styles.inputValue}>
                                            <Input
                                                primary
                                                value="Matsuura Yuki official"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.inputPickSocial}>
                                    <View style={styles.inputItem}>
                                        <View style={styles.inputLogo}>
                                            <InputDropLogo
                                                value={valueLogo}
                                                setValue={setValueLogo}
                                                items={itemsLogo}
                                                setItems={setItemsLogo}
                                            />
                                        </View>
                                        <View
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <View style={styles.inputValue}>
                                            <Input
                                                primary
                                                value="Matsuura Yuki official"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.btnAddNewAddress}>
                            <ButtonForm label="Add New Address" tertiary />
                        </View>
                        <View style={styles.btnUpdate}>
                            <ButtonForm
                                label="Update"
                                Icon={() => <IconCheck stroke={COLORS.White} />}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default UpdateProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    contentUpdateProfile: {
        marginHorizontal: 24,
    },
    header: {},
    updateAvatar: {
        marginBottom: 20,
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
    inputPickSocial: {
        marginTop: -10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    inputLogo: {
        flex: 1,
        marginTop: 36,
    },
    inputValue: {
        flex: 3,
    },

    inputItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAddNewAddress: {
        marginTop: 20,
    },

    btnUpdate: {
        marginTop: 20,
        marginBottom: 30,
    },
})
