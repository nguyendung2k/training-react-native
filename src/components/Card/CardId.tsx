import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { IconCopy } from '@components'
import { SIZES, COLORS } from '@theme'
import { RootState } from '@redux/store'

interface cardId {
    onPress?: () => void
}

const dataUserSelector = (state: RootState) => state.user.userDetail

const CardId = ({ onPress }: cardId) => {
    const dataUser = useSelector(dataUserSelector)
    // console.log('dataUser---', dataUser)
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={styles.container}
        >
            <Text style={styles.txtID}>ID: {dataUser.introduce_code}</Text>
            <TouchableOpacity>
                <IconCopy stroke={'#5A636D'} />
            </TouchableOpacity>
        </TouchableOpacity>
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
