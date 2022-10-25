import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'
import React, { useState } from 'react'
import { BORDER, COLORS, SIZES } from '@theme'
import { useNavigation } from '@react-navigation/native'
import { RegisterScreenProp } from '@navigation/type'
import { ChoseAddressSocial } from '@components/ChoseAddressSocial'
import { HeaderAuth } from '@components/Header'
import { ButtonComponent, ButtonForm } from '@components/Button'
const inputChooseSocial = [
    {
        id: 1,
        input: <ChoseAddressSocial nameAddress="Facebook" />,
    },
]

const PersonalIntroduction = () => {
    const navigation =
        useNavigation<
            RegisterScreenProp<'PersonalIntroduction'>['navigation']
        >()
    const [arrayChooseSocial, setArrayChooseSocial] =
        useState(inputChooseSocial)

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Neutral0 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={10}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.header}>
                    <HeaderAuth
                        title="Getting started"
                        description="Personal Introduction"
                        number="1"
                        txtContent="SNS accounts"
                        txtEnd="(Up to 5 accounts)"
                        primary
                    />
                </View>

                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.contentBody}>
                        <View>
                            {arrayChooseSocial.map((item) => {
                                return <View key={item.id}>{item.input}</View>
                            })}
                        </View>

                        <View style={styles.btn}>
                            <ButtonComponent
                                label="Add New Address"
                                onPress={handleAddNewAddress}
                                styleBtn={styles.btnAddNewAddress}
                                styleText={styles.txtAddNewAddress}
                            />
                        </View>

                        <View style={styles.footer}>
                            <ButtonComponent
                                label="Next"
                                onPress={() =>
                                    navigation.navigate('ListCommunity')
                                }
                                styleBtn={styles.btnNext}
                                styleText={styles.txtBtnNext}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default PersonalIntroduction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        backgroundColor: COLORS.White,
        marginHorizontal: 24,
    },
    contentBody: {
        marginHorizontal: 24,
        marginVertical: 40,
    },
    btn: {
        marginTop: 34,
    },
    footer: {
        marginTop: 34,
        // backgroundColor: 'red',
    },
    btnAddNewAddress: {
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
    txtAddNewAddress: {
        color: COLORS.Neutral4,
        fontSize: SIZES.medium,
        fontWeight: '600',
    },
    btnNext: {
        borderRadius: BORDER.base,
        borderColor: COLORS.Primary,
        backgroundColor: COLORS.White,
        fontSize: SIZES.medium,
        borderWidth: 1,
        paddingVertical: 17,
        fontWeight: '600',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnNext: {
        color: COLORS.Primary,
        fontWeight: '600',
        fontSize: SIZES.medium,
    },
})
