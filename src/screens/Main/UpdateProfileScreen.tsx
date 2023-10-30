import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import {
    ButtonForm,
    ChoseAddressSocial,
    Header,
    HeaderSlide,
    IConBack,
    IconCheck,
    Input,
    InputDrop,
    UpdateAvatar,
} from '@components'
import { RootState } from '@redux/store'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'
import { updateUser } from '@redux'

const dataUserSelector = (state: RootState) => state.user.userDetail
const userUpdateSelector = (state: RootState) => state.user.userUpdate

const inputChooseSocial = [
    {
        id: 1,
        input: <ChoseAddressSocial nameAddress="Facebook" />,
    },
]

const UpdateProfileScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)

    const [email, setEmail] = useState<string>(dataUser.email)
    const [full_name, setFull_name] = useState<string>(
        userUpdate.name ? userUpdate.name : dataUser.full_name
    )

    const [introduction, setIntroduction] = useState<string>(
        userUpdate.introduction
            ? userUpdate.introduction
            : dataUser.introduction
    )

    const [valueGender, setValueGender] = useState<string>('Male')
    const [itemsGender, setItemsGender] = useState<
        { label: string; value: string }[]
    >([
        {
            label: 'Male',
            value: 'Male',
        },
        { label: 'Female', value: 'Female' },
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

    // console.log('dataUser: ', dataUser)

    const [arrayChooseSocial, setArrayChooseSocial] =
        useState(inputChooseSocial)

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

    const handleAddNewAddress = () => {
        setArrayChooseSocial(
            arrayChooseSocial.concat([
                {
                    id: Math.random(),
                    input: <ChoseAddressSocial />,
                },
            ])
        )
    }

    const handleUpdateProfile = () => {
        dispatch(
            updateUser({
                email: email,
                name: full_name,
                introduction: introduction,
                image: image,
            })
        )
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.header}>
                    <Header
                        Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                        showTextHeader
                        showRightIcon
                        title="Update Profile"
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <TouchableWithoutFeedback>
                    <ScrollView
                        style={styles.contentUpdateProfile}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.updateAvatar}>
                            <HeaderSlide title="Profile picture" />
                            <UpdateAvatar
                                onPress={handlePickImage}
                                avatar={
                                    image
                                        ? image
                                        : userUpdate.image
                                        ? userUpdate.image
                                        : dataUser.image
                                }
                            />
                        </View>
                        <View>
                            <HeaderSlide title="Profile info" />
                            <Input
                                title="Email"
                                value={email}
                                onChangeText={(value: string) =>
                                    setEmail(value)
                                }
                                tertiary
                            />
                            <Input
                                title="Username"
                                value={full_name}
                                primary
                                onChangeText={(value: string) =>
                                    setFull_name(value)
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
                                    />
                                </View>
                            </View>
                            <Input
                                title="Introduction"
                                value={introduction}
                                secondary
                                onChangeText={(value: string) =>
                                    setIntroduction(value)
                                }
                                introduction
                            />
                        </View>
                        <View>
                            <HeaderSlide title="SNS accounts" />
                            <View>
                                {arrayChooseSocial.map((item) => {
                                    return (
                                        <View key={item.id}>{item.input}</View>
                                    )
                                })}
                            </View>
                            <View style={styles.btnAddNewAddress}>
                                <ButtonForm
                                    onPress={handleAddNewAddress}
                                    label="Add New Address"
                                    tertiary
                                />
                            </View>
                        </View>
                        <View style={styles.btnUpdate}>
                            <ButtonForm
                                label="Update"
                                Icon={() => <IconCheck stroke={COLORS.White} />}
                                onPress={handleUpdateProfile}
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
    header: {
        marginHorizontal: 18,
    },
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
