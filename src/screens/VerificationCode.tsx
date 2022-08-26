import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState } from 'react'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field'

import { COLORS, SIZES } from '../assets/constants/theme'

import CaretLeft from '../assets/icons/CaretLeft.svg'
import ButtonForm from '../components/Button/ButtonForm'
import VerifyCode from '../components/VerifyCode/VerifyCode'

const VerificationCode = ({ navigation }: any) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                    >
                        <CaretLeft />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.content_title}>Verification Code</Text>
                    <Text style={styles.content_description}>
                        Enter the OTP code from the phone we just sent you.
                    </Text>

                    <VerifyCode />

                    <View style={styles.footer}>
                        <ButtonForm
                            label="Verify"
                            onPress={() =>
                                navigation.navigate('PersonalIntroduction')
                            }
                        />
                        <View style={styles.footer_des}>
                            <Text style={styles.textFooter}>
                                Didn’t receive OTP code?
                            </Text>
                            <TouchableOpacity
                                onPress={() => console.log('Resend')}
                            >
                                <Text style={styles.textFooter_primary}>
                                    Resend
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default VerificationCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 23,
        marginLeft: 24,
    },
    header: {
        marginTop: 81,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 129.25,
    },
    content_title: {
        fontSize: SIZES.extraLarge,
        color: COLORS.Neutral10,
        marginBottom: 6,
        fontWeight: '600',
    },
    content_description: {
        fontSize: SIZES.small,
        color: COLORS.Neutral3,
        fontWeight: '500',
        lineHeight: 22.4,
    },

    footer: {
        flex: 1,
        width: '100%',
        marginTop: 48,
    },
    footer_des: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 22,
    },
    textFooter: {
        color: COLORS.Neutral8,
        fontSize: SIZES.small,
        marginRight: 5,
        textAlign: 'center',
        fontWeight: '500',
    },
    textFooter_primary: {
        color: COLORS.Primary,
        alignItems: 'center',
    },
})
