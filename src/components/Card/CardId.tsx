import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconCopy } from '../Svg/Icon'
import { COLORS, SIZES } from '../../assets/constants/theme'
import { useSelector } from 'react-redux'

const dataUserSelector = (state: any) => state.auth.user

const CardId = () => {
    const dataUser = useSelector(dataUserSelector)
    // console.log('dataUser++++', dataUser)

    return (
        <View style={styles.container}>
            <Text style={styles.txtID}>ID: {dataUser.introduce_code}</Text>

            <TouchableOpacity activeOpacity={0.5}>
                <IconCopy stroke={'#5A636D'} />
            </TouchableOpacity>
        </View>
    )
}

export default CardId

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    txtID: {
        fontSize: SIZES.small,
        color: COLORS.Neutral6,
        marginRight: 17,
    },
})
