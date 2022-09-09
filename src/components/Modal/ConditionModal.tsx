import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BORDER, COLORS } from '../../assets/constants/theme'
import HeaderSlide from '../Header/HeaderSlide'
import InputSelectAge from '../Input/InputSelectAge'
import CheckBox from '../Checkbox/CheckBox'
import { IconCheck } from '../Svg/Icon'
import ButtonHaft from '../Button/ButtonHaft'

import { GENDER } from '../../assets/constants/filter'

interface conditionModalProps {
    onPress: (minAge: string, maxAge: string, gender: string) => void
}

const ConditionModal = ({ onPress }: conditionModalProps) => {
    const [valueAgeMin, setValueAgeMin] = useState<string>('')
    const [valueAgeMax, setValueAgeMax] = useState<string>('')
    const [valueGender, setValueGender] = useState<string>('')
    const [checkBox, setCheckBox] = useState<string>('')

    const handleChangeValueAgeMin = (value: string) => {
        setValueAgeMin(value)
    }

    const handleChangeValueAgeMax = (value: string) => {
        setValueAgeMax(value)
    }

    const handleChangeValueGender = (gender: string) => {
        setValueGender(gender)
    }

    const handleUpdateCheckbox = (id: string) => {
        setCheckBox(id)
    }

    const handleClearCondition = () => {
        setCheckBox('')
        setValueAgeMax('')
        setValueAgeMin('')
        setValueGender('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <HeaderSlide title="Age" secondary />
                <View style={styles.inputSelect}>
                    <InputSelectAge
                        value={valueAgeMin}
                        onChangeText={handleChangeValueAgeMin}
                    />
                    <View style={styles.line}></View>
                    <InputSelectAge
                        value={valueAgeMax}
                        onChangeText={handleChangeValueAgeMax}
                    />
                </View>
                <HeaderSlide title="Gender" secondary />
                <View>
                    {GENDER.map((item) => {
                        return (
                            <CheckBox
                                key={item.id}
                                Icon={() => <IconCheck stroke={COLORS.White} />}
                                secondary
                                value={item.gender}
                                onPress={() => {
                                    handleChangeValueGender(item.gender)
                                    handleUpdateCheckbox(item.id)
                                }}
                                check={checkBox === item.id}
                            />
                        )
                    })}
                </View>
                <View style={styles.btn}>
                    <ButtonHaft
                        primary
                        label="Apply"
                        onPress={() =>
                            onPress(valueAgeMin, valueAgeMax, valueGender)
                        }
                    />
                    <View></View>
                    <ButtonHaft
                        secondary
                        label="Clear"
                        onPress={handleClearCondition}
                    />
                </View>
            </View>
        </View>
    )
}

export default ConditionModal

const styles = StyleSheet.create({
    container: {
        width: 366,
        height: 458,
        backgroundColor: COLORS.Neutral8,
        borderRadius: BORDER.base,
    },
    body: {
        marginHorizontal: 32,
    },
    inputSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line: {
        backgroundColor: COLORS.Neutral6,
        width: 16.25,
        height: 2,
        marginTop: 30,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
