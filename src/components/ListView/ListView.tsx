import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../Checkbox/CheckBox'

import Check from '../../assets/icons/Check.svg'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface listViewProps {
    title?: string
    number?: string
    members?: string
    showBox?: boolean
    source?: any
    item: { id: string; title: string; image: string; total_members: string }
    onPress?: () => void | undefined
}

const ListView = ({ showBox, onPress, item }: listViewProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.checkbox}>
                {showBox && <CheckBox Icon={() => <Check />} />}
            </View>
            <View style={styles.content}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.description}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.block}>
                        <Text style={styles.number}>{item.total_members}</Text>
                        <Text style={styles.members}>members</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: { width: 74, height: 74, borderRadius: BORDER.maximum },
    content: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginLeft: 16,
    },
    title: {
        fontSize: SIZES.font,
        fontWeight: '500',
        marginBottom: 4,
    },
    block: {
        flexDirection: 'row',
    },
    number: {
        color: COLORS.Neutral4,
        fontSize: SIZES.medium,
        marginRight: 4,
    },
    members: {
        color: COLORS.Neutral4,
        fontSize: SIZES.medium,
    },
})
