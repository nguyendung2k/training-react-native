import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

const CELL_COUNT = 4

const VerificationCode = ({ navigation }: any) => {
    const [value, setValue] = useState('')
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.push('Login')}>
                    <CaretLeft />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.content_title}>Verification Code</Text>
                <Text style={styles.content_description}>
                    Enter the OTP code from the phone we just sent you.
                </Text>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View style={styles.box} key={index}>
                            <Text
                                style={[
                                    styles.cell,
                                    isFocused && styles.focusCell,
                                ]}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            <View></View>
                        </View>
                    )}
                />
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
                        <TouchableOpacity onPress={() => console.log('Resend')}>
                            <Text style={styles.textFooter_primary}>
                                Resend
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
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
        marginLeft: 24,
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
    codeFieldRoot: {
        marginTop: 49,
    },
    box: {
        borderBottomColor: COLORS.Neutral8,
        borderBottomWidth: 2,
        margin: 10,
    },
    cell: {
        width: 56,
        height: 40,
        lineHeight: 38,
        fontSize: SIZES.extraLarge,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
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
