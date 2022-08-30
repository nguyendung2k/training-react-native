import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

import Plus from '../assets/icons/Plus.svg'
import HeaderAuth from '../components/Header/HeaderAuth'
import InputDropLogo from '../components/Input/InputDropLogo'
import ButtonForm from '../components/Button/ButtonForm'
import ArrowRight from '../assets/icons/ArrowRight.svg'
const PersonalIntroduction = ({ navigation }: any) => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <HeaderAuth
                title="Getting started"
                description="Personal Introduction"
                number="1"
                txtContent="SNS accounts"
                txtEnd="(Up to 5 accounts)"
            />

            <View>
                <InputDropLogo />
            </View>

            <View>
                <ButtonForm
                    Icon={() => <Plus />}
                    label="Add New Address"
                    tertiary
                />
            </View>

            <View style={styles.footer}>
                <ButtonForm
                    label="Next"
                    quaternary
                    Icon={() => <ArrowRight />}
                    onPress={() => navigation.navigate('ListCommunity')}
                />
            </View>
        </ScrollView>
    )
}

export default PersonalIntroduction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    },
    footer: {
        marginTop: 294,
    },
})
