import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface buttonAccountMenuProps {
    Icon?: () => JSX.Element
    onPress?: () => void | undefined
    label?: string
}

const ButtonAccountMenu = ({
    Icon,
    label,
    onPress,
}: buttonAccountMenuProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <View style={styles.icon}>{!!Icon && <Icon />}</View>
                <Text style={styles.txt}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonAccountMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: COLORS.Neutral3,
        borderBottomWidth: 1,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 22,
    },
    icon: {
        marginLeft: 4,
    },
    txt: {
        marginLeft: 20,
        fontSize: SIZES.medium,
        fontWeight: '500',
    },
})
