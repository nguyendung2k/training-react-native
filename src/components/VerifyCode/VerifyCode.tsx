import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
} from 'react-native-confirmation-code-field'
import { SIZES, COLORS } from '@theme'

const VerifyCode = () => {
    const CELL_COUNT = 4
    const [value, setValue] = useState('')

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })

    return (
        <CodeField
            ref={ref}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            renderCell={({ index, symbol, isFocused }) => (
                <View style={styles.box} key={index}>
                    <Text style={[styles.cell, isFocused && styles.focusCell]}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                    <View></View>
                </View>
            )}
            textContentType="oneTimeCode"
        />
    )
}

export default VerifyCode

const styles = StyleSheet.create({
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
    codeFieldRoot: {
        marginTop: 40,
    },
    box: {
        borderBottomColor: COLORS.Neutral8,
        borderBottomWidth: 2,
        margin: 10,
    },
})
