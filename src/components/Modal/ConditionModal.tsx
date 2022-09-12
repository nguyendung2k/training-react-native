import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import HeaderSlide from '../Header/HeaderSlide'
import InputSelectAge from '../Input/InputSelectAge'
import CheckBox from '../Checkbox/CheckBox'
import ButtonHaft from '../Button/ButtonHaft'

import { IconCheck } from '../Svg/Icon'
import { BORDER, COLORS } from '../../assets/constants/theme'
import { GENDER } from '../../assets/constants/filter'
import {
    searchAgeMaxChange,
    searchAgeMinChange,
    searchGenderChange,
} from '../../redux/slices/filterSlice'
import { handleClearFitterConditionModal } from '../../redux/slices/homeSlice'

interface conditionModalProps {
    onPress: (minAge: string, maxAge: string, gender: string) => void
}

const valueAgeMinSelector = (state: any) => state.home.filter.valueAgeMin
const valueAgeMaxSelector = (state: any) => state.home.filter.valueAgeMax
const valueGenderSelector = (state: any) => state.home.filter.valueGender

const ConditionModal = ({ onPress }: conditionModalProps) => {
    const dispatch = useDispatch()
    const [valueAgeMin, setValueAgeMin] = useState<string>('')
    const [valueAgeMax, setValueAgeMax] = useState<string>('')
    const [valueGender, setValueGender] = useState<string>('')

    const ageMin = useSelector(valueAgeMinSelector)
    const ageMax = useSelector(valueAgeMaxSelector)
    const gender = useSelector(valueGenderSelector)

    console.log('valueAgeMin', ageMin)
    console.log('valueAgeMax', ageMax)

    const [checkBox, setCheckBox] = useState<string>('')

    const handleChangeValueAgeMin = (value: string) => {
        setValueAgeMin(value)
        dispatch(searchAgeMinChange(value))
    }

    const handleChangeValueAgeMax = (value: string) => {
        setValueAgeMax(value)
        dispatch(searchAgeMaxChange(value))
    }

    const handleChangeValueGender = (gender: string) => {
        setValueGender(gender)
        dispatch(searchGenderChange(gender))
    }

    const handleUpdateCheckbox = (id: string) => {
        setCheckBox(id)
    }

    const handleClearCondition = () => {
        console.log('123')

        // dispatch(handleClearFitterConditionModal())
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <HeaderSlide title="Age" secondary />
                <View style={styles.inputSelect}>
                    <InputSelectAge
                        value={ageMin}
                        onChangeText={handleChangeValueAgeMin}
                    />
                    <View style={styles.line}></View>
                    <InputSelectAge
                        value={ageMax}
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
                        onPress={() => onPress(ageMin, ageMax, valueGender)}
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
