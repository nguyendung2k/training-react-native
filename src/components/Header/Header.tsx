import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CaretLeft from '../../assets/icons/CaretLeft.svg'
import { COLORS, SIZES } from '../../assets/constants/theme'
import { IconPencil } from '../Svg/Icon'

interface headerProps {
    showTextHeader?: boolean
    showRightIcon?: boolean
    primary?: boolean
    secondary?: boolean
    title?: string
    onPress?: () => void
    Icon?: () => JSX.Element
}

const Header = ({
    showTextHeader,
    showRightIcon,
    title,
    primary,
    secondary,
    Icon,
    onPress,
}: headerProps) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                {!!Icon && <Icon />}
            </TouchableOpacity>
            {showTextHeader && (
                <Text
                    style={[styles.txtHeader, secondary && styles.txtSecondary]}
                >
                    {title}
                </Text>
            )}
            {showRightIcon && !!Icon && (
                <TouchableOpacity>
                    <IconPencil stroke={COLORS.Neutral0} />
                </TouchableOpacity>
            )}
            {primary && <Text></Text>}
            {}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'center',
        // color: 'red',
        // backgroundColor: 'red',
    },
    txtHeader: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: SIZES.large,
        color: COLORS.Neutral10,
        // color: 'red',
    },
    txtSecondary: {
        color: COLORS.Neutral0,
    },
})
