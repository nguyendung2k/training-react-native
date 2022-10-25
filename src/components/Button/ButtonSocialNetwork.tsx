import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, BORDER, SIZES } from '@theme'

interface buttonHomeProps {
    title?: string
    Icon?: () => JSX.Element
    secondary?: boolean
    tertiary?: boolean
    primary?: boolean
}

const ButtonSocialNetwork = ({
    title,
    secondary,
    primary,
}: buttonHomeProps) => {
    return (
        <View
            style={[styles.container, secondary && styles.secondaryContainer]}
        >
            <View style={styles.btn}>
                <Text
                    style={[
                        primary && styles.txt,
                        secondary && styles.secondaryTxt,
                    ]}
                >
                    {title}
                </Text>
            </View>
        </View>
    )
}

export default ButtonSocialNetwork

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: BORDER.base,
        paddingVertical: 21,
        marginBottom: 12,
    },
    secondaryContainer: {},
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    txt: {
        marginLeft: 70,
        fontSize: SIZES.small,
        fontWeight: '500',
        color: COLORS.Neutral10,
    },
    secondaryTxt: {
        fontSize: SIZES.font,
        fontWeight: '600',
        color: COLORS.Neutral6,
        marginRight: 16,
        marginLeft: 74,
    },
})
