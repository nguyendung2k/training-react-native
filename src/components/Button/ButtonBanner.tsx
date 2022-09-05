import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface buttonProps {
    label?: string
    onPress?: () => void | undefined | boolean
    secondary?: boolean
    Icon?: () => JSX.Element
}

const ButtonBanner = ({ label, onPress, Icon, secondary }: buttonProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[
                    styles.btn,
                    styles.btnPrimary,
                    secondary && styles.btnSecondary,
                ]}
                onPress={onPress}
            >
                <View style={styles.content}>
                    <Text style={styles.txt}>{label} </Text>
                    {secondary && !!Icon && (
                        <View style={styles.icon}>
                            <Icon />
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonBanner

const styles = StyleSheet.create({
    container: {},
    btn: {
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: BORDER.base,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPrimary: {
        backgroundColor: COLORS.Primary,
    },
    btnSecondary: {
        backgroundColor: COLORS.Semantic4,
    },
    content: {
        flexDirection: 'row',
    },
    txt: {
        color: COLORS.Neutral0,
        fontWeight: '600',
        fontSize: SIZES.medium,
        textAlign: 'center',
    },
    icon: {
        alignItems: 'center',
        marginLeft: 5,
    },
})
