import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface checkBox {
    onPress?: () => void | boolean
    secondary?: boolean
    style?: any
    Icon?: () => JSX.Element | null
    value?: string
}

const CheckBox = ({ onPress, secondary, style, Icon, value }: checkBox) => {
    const [checkBox, setCheckBox] = useState<boolean>(false)
    const updateCheckBox = () => {
        setCheckBox(!checkBox)
    }
    return (
        <View style={[secondary && styles.container]}>
            <TouchableOpacity
                onPress={updateCheckBox}
                style={[
                    styles.checkBox,
                    checkBox && styles.checkBox_Secondary,
                    style,
                ]}
            >
                {!!Icon && checkBox && <Icon />}
            </TouchableOpacity>
            {secondary && <Text style={styles.txt}>{value}</Text>}
        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    checkBox: {
        width: 32,
        height: 32,
        borderColor: COLORS.Primary,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 28,
    },
    checkBox_Secondary: {
        backgroundColor: COLORS.Primary,
    },
    txt: {
        fontSize: SIZES.font,
        color: COLORS.Neutral0,
        fontWeight: '400',
    },
})
