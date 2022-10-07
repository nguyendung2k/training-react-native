import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { BORDER, COLORS } from '@theme'
import { GENDER } from '@constant/filter'
import {
    getDataMember,
    handleClearFitterConditionModal,
    searchAgeMaxChange,
    searchAgeMinChange,
    updateCheckboxIdChange,
    updateGenderChange,
    updateStatusGender,
} from '@redux'
import { HeaderSlide } from '@components/Header'
import { InputSelectAge } from '@components/Input'
import { CheckBox } from '@components/Checkbox'
import { IconCheck } from '@components/Svg'
import { ButtonHaft } from '@components/Button'

interface conditionModalProps {
    onPress: (minAge: string, maxAge: string, status: boolean) => void
}

const valueAgeMinSelector = (state: RootState) => state.filters.age.from
const valueAgeMaxSelector = (state: RootState) => state.filters.age.to
const valueGenderSelector = (state: RootState) => state.filters.gender
const valueStatusGender = (state: RootState) => state.filters.statusGender
const checkBoxSelector = (state: RootState) => state.filters.checkBox

const ConditionModal = ({ onPress }: conditionModalProps) => {
    const dispatch = useDispatch()

    const ageMin = useSelector(valueAgeMinSelector)
    const ageMax = useSelector(valueAgeMaxSelector)
    const statusGender = useSelector(valueStatusGender)

    const check = useSelector(checkBoxSelector)

    const handleChangeValueAgeMin = (value: string) => {
        dispatch(searchAgeMinChange(value))
        dispatch(getDataMember())
    }

    const handleChangeValueAgeMax = (value: string) => {
        dispatch(searchAgeMaxChange(value))
        dispatch(getDataMember())
    }

    const handleChangeValueGender = (gender: string) => {
        dispatch(updateGenderChange(gender))
    }

    const handleChangeStatusGender = (status: boolean) => {
        dispatch(updateStatusGender(status))
    }

    const handleUpdateCheckbox = (id: string) => {
        dispatch(updateCheckboxIdChange(id))
        dispatch(getDataMember())
    }

    const handleClearCondition = () => {
        dispatch(handleClearFitterConditionModal())
        dispatch(getDataMember())
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
                                    handleChangeStatusGender(item.status)
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
                        onPress={() => onPress(ageMin, ageMax, statusGender)}
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
