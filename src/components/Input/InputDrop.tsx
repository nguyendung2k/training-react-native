import React, { Dispatch, useState } from 'react'
import { StyleSheet, Text, TextProps, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface inputProps extends TextProps {
    title?: string
    value: null | string
    items: any[]
    setValue: Dispatch<(s: any) => any>
    setItems: Dispatch<(s: any) => any>
    onChangeValue?: ((value: any) => void | undefined) | undefined
    modalTitle?: string
    //(e: string | ChangeEvent<any>) => void
}

const InputDrop = ({
    title,
    value,
    items,
    setValue,
    setItems,
    onChangeValue,
    modalTitle,
}: inputProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>{title}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                // dropDownDirection="TOP"
                // style={styles.input}
                style={styles.dropInput}
                // labelStyle={styles.label}
                dropDownContainerStyle={styles.dropDownBox}
                arrowIconStyle={{
                    width: 16,
                    height: 16,
                }}
                dropDownDirection="AUTO"
                bottomOffset={100}
                onChangeValue={onChangeValue}
                // modalTitle={modalTitle}
                // searchable={false}
            />
        </View>
    )
}

export default InputDrop

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: '500',
        fontSize: SIZES.medium,
        color: COLORS.Neutral4,
        marginBottom: 4,
        marginTop: 16,
        textAlign: 'left',
    },
    dropInput: {
        backgroundColor: COLORS.BackgroundInput,
        borderColor: COLORS.BackgroundInput,
        width: 170,
    },
    dropDownBox: {
        backgroundColor: COLORS.BackgroundInput,
        borderColor: COLORS.BackgroundInput,
        width: 170,
        marginVertical: 5,
    },
})
