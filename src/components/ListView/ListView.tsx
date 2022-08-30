import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../Checkbox/CheckBox'

import Check from '../../assets/icons/Check.svg'
import { COLORS, SIZES } from '../../assets/constants/theme'
import { GROUPS } from '../../assets/constants/groups'

interface listViewProp {
    title?: string
    number?: string
    members?: string
    showBox?: boolean
    source?: any
    item?: { id: string; title: string; image: string }[]
}

export const ListView = ({
    title,
    number,
    members,
    showBox,
    source,
}: listViewProp) => {
    return (
        <View style={styles.container}>
            <View style={styles.checkbox}>
                {showBox && <CheckBox Icon={() => <Check />} />}
            </View>
            <View style={styles.content}>
                <Image source={require('../../assets/images/Avatar2.png')} />
                <View style={styles.description}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.block}>
                        <Text style={styles.number}>{number}</Text>
                        <Text style={styles.members}>members</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export const renderListView = ({ item }: any) => (
    <ListView key={item.id} title={item.title} number={item.member} />
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
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
