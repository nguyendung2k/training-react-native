import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconCopy } from '../Svg/Icon'
import { COLORS, SIZES } from '../../assets/constants/theme'

const CardId = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtID}>ID: 1752648</Text>

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
