import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '@theme'

interface buttonHomeProps {
    title?: string
    Icon?: () => JSX.Element
    secondary?: boolean
    tertiary?: boolean
    Image?: () => React.ReactNode
}

const ButtonHome = ({ title, Icon, secondary, tertiary }: buttonHomeProps) => {
    return (
        <View
            style={[
                styles.container,
                secondary && styles.containerSecondary,
                tertiary && styles.containerTertiary,
            ]}
        >
            <TouchableOpacity style={styles.btn}>
                {!!Icon && <Icon />}
                <Text style={styles.txt}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonHome

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral1,
        borderRadius: BORDER.base,
        paddingVertical: 21,
        paddingLeft: 20,
        marginBottom: 12,
    },
    containerSecondary: {
        backgroundColor: COLORS.BackgroundInput,
        width: '100%',
    },
    containerTertiary: {
        width: 140,
        backgroundColor: COLORS.BackgroundInput,
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    txt: {
        marginLeft: 20,
        fontSize: SIZES.small,
        fontWeight: '500',
        color: COLORS.Neutral10,
    },
})
