import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconPencil, IconPencilAdd } from '@components'
import { BORDER, COLORS, SIZES } from '@theme'

interface headerProps {
    showTextHeader?: boolean
    showRightIcon?: boolean
    showIconAdd?: boolean
    primary?: boolean
    secondary?: boolean
    post?: boolean
    title?: string
    showIcon?: boolean
    onPress?: () => void
    Icon?: () => JSX.Element
    onDirection?: () => void
    onPost?: () => void
}

const Header = ({
    showTextHeader,
    showRightIcon,
    showIconAdd,
    title,
    showIcon,
    primary,
    secondary,
    post,
    Icon,
    onPress,
    onDirection,
    onPost,
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
                <TouchableOpacity onPress={onDirection}>
                    {showIcon && <IconPencil stroke={COLORS.Neutral0} />}
                </TouchableOpacity>
            )}
            {showIconAdd && !!Icon && (
                <TouchableOpacity
                    onPress={onDirection}
                    style={styles.iconPencilAdd}
                >
                    {showIcon && <IconPencilAdd stroke={COLORS.Neutral0} />}
                    {post && (
                        <TouchableOpacity onPress={onPost}>
                            <Text
                                style={{
                                    color: COLORS.Neutral0,
                                    fontWeight: '600',
                                    fontSize: SIZES.medium,
                                    paddingVertical: 4,
                                    paddingHorizontal: 1,
                                }}
                            >
                                Post
                            </Text>
                        </TouchableOpacity>
                    )}
                </TouchableOpacity>
            )}

            {primary && <Text></Text>}
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
    iconPencilAdd: {
        padding: 12,
        backgroundColor: COLORS.Primary,
        borderRadius: BORDER.base,
    },
})
