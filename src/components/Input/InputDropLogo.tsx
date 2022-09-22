import {
    Image,
    StyleSheet,
    Text,
    TextProps,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { Dispatch, useState } from 'react'

import CareDown from '../../assets/icons/CaretDown.svg'
import Input from './Input'
import { BORDER, COLORS } from '../../assets/constants/theme'
import DropDownPicker from 'react-native-dropdown-picker'

interface inputProps extends TextProps {
    title?: string
    value: null | string
    items: any[]
    setValue: Dispatch<(s: any) => any>
    setItems: Dispatch<(s: any) => any>
    onChangeValue?: ((value: any) => void | undefined) | undefined
    modalTitle?: string
    error?: React.ReactNode
    //(e: string | ChangeEvent<any>) => void
}

const InputDropLogo = ({
    title,
    value,
    items,
    setValue,
    setItems,
    onChangeValue,
}: inputProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                style={styles.content}
                dropDownContainerStyle={styles.dropDownBox}
                arrowIconStyle={{
                    width: 16,
                    height: 16,
                }}
                dropDownDirection="TOP"
                onChangeValue={onChangeValue}
            />
        </View>
    )
}

export default InputDropLogo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
    content: {
        flexDirection: 'row',
        backgroundColor: COLORS.BackgroundInput,
        width: 94,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: BORDER.base,
        marginRight: 16,
        borderColor: COLORS.BackgroundInput,
    },

    dropInput: {
        backgroundColor: COLORS.BackgroundInput,
        borderColor: COLORS.BackgroundInput,
    },
    dropDownBox: {
        backgroundColor: COLORS.BackgroundInput,
        borderColor: COLORS.BackgroundInput,
        marginVertical: 5,
        width: 94,
    },
})
