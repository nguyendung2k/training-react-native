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
    handleClearFitterConditionModal,
    searchAgeMaxChange,
    searchAgeMinChange,
    updateCheckboxIdChange,
    updateGenderChange,
} from '../../redux/slices/filterSlice'
import { resetListMember, setMember } from '../../redux/slices/homeSlice'
import { membersRemainingSelector } from '../../redux/selectors'

interface conditionModalProps {
    onPress: (minAge: string, maxAge: string, gender: string) => void
}

const valueAgeMinSelector = (state: any) => state.filters.age.from
const valueAgeMaxSelector = (state: any) => state.filters.age.to
const valueGenderSelector = (state: any) => state.filters.gender
const checkBoxSelector = (state: any) => state.filters.checkBox

const ConditionModal = ({ onPress }: conditionModalProps) => {
    const dispatch = useDispatch()

    const memberList = useSelector(membersRemainingSelector)
    const ageMin = useSelector(valueAgeMinSelector)
    const ageMax = useSelector(valueAgeMaxSelector)

    const gender = useSelector(valueGenderSelector)
    const check = useSelector(checkBoxSelector)

    const handleChangeValueAgeMin = (value: string) => {
        dispatch(searchAgeMinChange(value))
    }

    const handleChangeValueAgeMax = (value: string) => {
        dispatch(searchAgeMaxChange(value))
    }

    const handleChangeValueGender = (gender: string) => {
        dispatch(updateGenderChange(gender))
    }

    const handleUpdateCheckbox = (id: string) => {
        dispatch(updateCheckboxIdChange(id))
    }

    const handleClearCondition = () => {
        dispatch(handleClearFitterConditionModal())
        dispatch(resetListMember())
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
                                check={check == item.id}
                            />
                        )
                    })}
                </View>
                <View style={styles.btn}>
                    <ButtonHaft
                        primary
                        label="Apply"
                        onPress={() => onPress(ageMin, ageMax, gender)}
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
