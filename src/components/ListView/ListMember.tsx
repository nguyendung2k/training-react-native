import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { IconUsers } from '../Svg/Icon'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

interface listMemberProps {
    data: []
}

const ListMember = ({ data }: any) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/Avatar1.png')}
                    />
                    <View style={styles.info}>
                        <Text style={styles.title}>{data.name}</Text>
                        <View style={styles.body}>
                            <Text style={styles.quantity}>{data.follow}</Text>
                            <IconUsers stroke={COLORS.Neutral8} />
                        </View>
                        <Text style={styles.description}>
                            {data.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default memo(ListMember)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral1,
        marginBottom: 16,
        borderRadius: BORDER.base,
    },
    content: {
        marginBottom: 20,
        marginTop: 16,
        marginLeft: 20,
        flexDirection: 'row',
    },
    image: {
        borderWidth: 4,
        borderRadius: 50,
        borderColor: COLORS.Semantic4,
    },
    info: {
        marginLeft: 20,
        width: 258,
    },
    title: {
        color: COLORS.DarkerPrimary,
        fontWeight: '600',
        fontSize: SIZES.medium,
        marginBottom: 4,
    },
    body: {
        flexDirection: 'row',
    },
    quantity: {
        fontSize: SIZES.small,
        marginBottom: 8,
        fontWeight: '500',
    },
    description: {
        fontWeight: '400',
        color: COLORS.Neutral6,
        fontSize: SIZES.small,
    },
})
