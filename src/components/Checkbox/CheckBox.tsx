import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/constants/theme'

interface checkBox {
    onPress?: () => void | boolean
    secondary?: boolean
    style?: any
    Icon?: () => JSX.Element | null
}

const CheckBox = ({ onPress, secondary, style, Icon }: checkBox) => {
    const [checkBox, setCheckBox] = useState<boolean>(false)
    const updateCheckBox = () => {
        setCheckBox(!checkBox)
    }
    return (
        <View>
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
        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    checkBox: {
        width: 32,
        height: 32,
        borderColor: COLORS.Primary,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBox_Secondary: {
        width: 32,
        height: 32,
        borderColor: COLORS.Primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: COLORS.Primary,
    },
})
