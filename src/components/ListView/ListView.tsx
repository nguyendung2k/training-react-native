import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../Checkbox/CheckBox'

import Check from '../../assets/icons/Check.svg'
import { COLORS, SIZES } from '../../assets/constants/theme'

interface listViewProp {
    title?: string
    number?: string
    members?: string
}

const ListView = ({ title, number, members }: listViewProp) => {
    return (
        <View style={styles.container}>
            <View style={styles.checkbox}>
                <CheckBox Icon={() => <Check />} />
            </View>
            <View style={styles.content}>
                <Image source={require('../../assets/images/Avatar2.png')} />
                <View style={styles.description}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.block}>
                        <Text style={styles.number}>{number}</Text>
                        <Text style={styles.members}>{members}</Text>
                    </View>
                </View>
            </View>
        </View>
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
    content: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 28,
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
