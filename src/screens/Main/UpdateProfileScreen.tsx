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
import ButtonForm from '../../components/Button/ButtonForm'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import ChoseAddressSocial from '../../components/ChoseAddressSocial/ChoseAddressSocial'
import { updateUser } from '../../redux/slices/homeSlice'

const dataUserSelector = (state: any) => state.auth.user
const userUpdateSelector = (state: any) => state.home.user

const inputChooseSocial = [
    {
        id: 1,
        input: <ChoseAddressSocial nameAddress="Facebook" />,
    },
]

const UpdateProfileScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)

    const [email, setEmail] = useState<string>(dataUser.email)
    const [first_name, setFirst_name] = useState<string>(dataUser.first_name)

    const [introduction, setIntroduction] = useState<string>(
        userUpdate.introduction
            ? userUpdate.introduction
            : dataUser.introduction
    )

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
                name: first_name,
                introduction: introduction,
                image: image,
            })
        )
        navigation.navigate('YourProfileScreen')
    }
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
                                value={first_name}
                                primary
                                onChangeText={(value: string) =>
                                    setFirst_name(value)
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
