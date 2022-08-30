import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

import HeaderAuth from '../../components/Header/HeaderAuth'
import InputDropLogo from '../../components/Input/InputDropLogo'
import ButtonForm from '../../components/Button/ButtonForm'

import { COLORS } from '../../assets/constants/theme'
const PersonalIntroduction = ({ navigation }: any) => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.contentBody}>
                <HeaderAuth
                    title="Getting started"
                    description="Personal Introduction"
                    number="1"
                    txtContent="SNS accounts"
                    txtEnd="(Up to 5 accounts)"
                />

                <View>
                    <InputDropLogo />
                    <InputDropLogo />
                    <InputDropLogo />
                </View>

                <View style={styles.btn}>
                    <ButtonForm label="Add New Address" tertiary />
                </View>

                <View style={styles.footer}>
                    <ButtonForm
                        label="Next"
                        quaternary
                        onPress={() => navigation.navigate('ListCommunity')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default PersonalIntroduction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    contentBody: {
        marginHorizontal: 24,
        marginVertical: 40,
    },
    btn: {
        marginTop: 34,
    },
    footer: {
        marginTop: 294,
        backgroundColor: 'red',
    },
})
