import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDER, COLORS } from '../../assets/constants/theme'
import HeaderSlide from '../Header/HeaderSlide'
import InputSelectAge from '../Input/InputSelectAge'
import CheckBox from '../Checkbox/CheckBox'
import { IconCheck } from '../Svg/Icon'
import ButtonHaft from '../Button/ButtonHaft'

const ConditionModal = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <HeaderSlide title="Age" secondary />
                <View style={styles.inputSelect}>
                    <InputSelectAge value="20" />
                    <View style={styles.line}></View>
                    <InputSelectAge value="30" />
                </View>
                <HeaderSlide title="Gender" secondary />
                <View>
                    <CheckBox
                        Icon={() => <IconCheck stroke={COLORS.White} />}
                        secondary
                        value="Female"
                    />
                    <CheckBox
                        Icon={() => <IconCheck stroke={COLORS.White} />}
                        secondary
                        value="Male"
                    />
                    <CheckBox
                        Icon={() => <IconCheck stroke={COLORS.White} />}
                        secondary
                        value="Others"
                    />
                </View>
                <View style={styles.btn}>
                    <ButtonHaft primary label="Apply" />
                    <View></View>
                    <ButtonHaft secondary label="Clear" />
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
