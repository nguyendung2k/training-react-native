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
import { RootState } from '@redux/store'
import { useNavigation, useRoute } from '@react-navigation/native'
import { BORDER, COLORS, SIZES } from '@theme'
import { InputComponent, InputDrop } from '@components/Input'
import { ChoseAddressSocial } from '@components/ChoseAddressSocial'
import { IConBack, IconCheck } from '@components/Svg'
import { Header, HeaderSlide } from '@components/Header'
import { UpdateAvatar } from '@components/UpdateAvatar'
import { updateDetailUser, updateUser } from '@redux'
import { ButtonComponent } from '@components/Button'

const userDetailSelector = (state: RootState) => state.user.userDetail
const userDataSelector = (state: RootState) => state.user.user

const inputChooseSocial = [
    {
        id: 1,
        input: <ChoseAddressSocial nameAddress="Facebook" />,
    },
]

const UpdateProfileScreen = () => {
    const dispatch = useDispatch()
    const idUserParam: any = useRoute().params

    const navigation = useNavigation()
    const userDetail = useSelector(userDetailSelector)
    const userData = useSelector(userDataSelector)

    const [email, setEmail] = useState<string>(userDetail.email)
    const [full_name, setFullName] = useState<string>(userDetail.full_name)

    const [introduction, setIntroduction] = useState<string>(
        userDetail.introduction
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
        let newUserDetail = { ...userDetail }
        const newUserData = [...userData]

        if (userDetail.user_id === idUserParam) {
            newUserDetail = {
                ...newUserDetail,
                full_name: full_name,
                introduction: introduction,
                image: image.length > 0 ? image : userDetail.image,
            }
            dispatch(updateDetailUser(newUserDetail))
        }

        newUserData.forEach((item, index) => {
            if (item.id === idUserParam) {
                newUserData[index] = {
                    ...newUserData[index],
                    data: {
                        ...newUserData[index].data,
                        full_name: full_name,
                        introduction: introduction,
                        image: image,
                    },
                }
            }
            dispatch(updateUser(newUserData))
        })
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
                                avatar={image ? image : userDetail.image}
                            />
                        </View>
                        <View>
                            <HeaderSlide title="Profile info" />
                            <InputComponent
                                title="Email"
                                value={email}
                                onChangeText={(value: string) =>
                                    setEmail(value)
                                }
                                style={styles.input}
                                disable={false}
                            />
                            <InputComponent
                                title="Username"
                                value={full_name}
                                onChangeText={(value: string) =>
                                    setFullName(value)
                                }
                                style={styles.input}
                            />
                            <View style={styles.inputDrop}>
                                <View style={styles.inputItemGender}>
                                    <InputDrop
                                        title="Gender"
                                        value={valueGender}
                                        items={itemsGender}
                                        setValue={setValueGender}
                                        setItems={setItemsGender}
                                        primary
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
                                        primary
                                    />
                                </View>
                            </View>
                            <InputComponent
                                title="Introduction"
                                value={introduction}
                                onChangeText={(value: string) =>
                                    setIntroduction(value)
                                }
                                introduction
                                style={styles.input}
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
                                <ButtonComponent
                                    onPress={handleAddNewAddress}
                                    label="Add New Address"
                                    styleBtn={styles.btnAddNewAdd}
                                    styleText={styles.txtBtnNewAdd}
                                    // Icon = {}
                                />
                            </View>
                        </View>
                        <View style={styles.btnUpdate}>
                            <ButtonComponent
                                label="Update"
                                Icon={<IconCheck stroke={COLORS.White} />}
                                onPress={handleUpdateProfile}
                                styleBtn={styles.btnUpdateProfile}
                                styleText={styles.txtBtnUpdateProfile}
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
    input: {
        width: '100%',
    },
    btnAddNewAdd: {
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: COLORS.Neutral4,
        backgroundColor: COLORS.White,
        fontWeight: '600',
        fontSize: SIZES.medium,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnNewAdd: {
        color: COLORS.Neutral4,
        fontSize: SIZES.medium,
    },
    btnUpdateProfile: {
        fontWeight: '600',
        fontSize: SIZES.medium,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.Primary,
        color: COLORS.White,
    },
    txtBtnUpdateProfile: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.White,
    },
})
