import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CaretLeft from '../../assets/icons/CaretLeft.svg'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface headerProps {
    showTextHeader?: boolean
    title?: string
    onPress?: () => void
    Icon?: () => JSX.Element
}

const Header = ({ showTextHeader, title, Icon, onPress }: headerProps) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                {!!Icon && <Icon />}
            </TouchableOpacity>
            {showTextHeader && <Text style={styles.txtHeader}>{title}</Text>}
            <Text></Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        // color: 'red',
        // backgroundColor: 'red',
    },
    txtHeader: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: SIZES.large,
        color: 'black',
        // color: 'red',
    },
})
