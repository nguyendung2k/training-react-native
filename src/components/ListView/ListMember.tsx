import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, BORDER, SIZES } from '@theme'
import { IconUsers } from '@components/Svg'

// interface dataUser {
//     id?: string
//     first_name?: string
//     last_name?: string
//     full_name?: string
//     age?: number
//     gender?: boolean
//     description?: string
//     introduction?: string
//     introduce_code?: number
//     image?: string
//     total_follow?: number
// }

interface props {
    onChangeUser?: () => void
    item?: any
}

const ListMember = ({ onChangeUser, item }: props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.container}
            onPress={onChangeUser}
        >
            <View style={styles.content}>
                <Image style={styles.image} source={{ uri: item?.image }} />
                <View style={styles.info}>
                    <Text style={styles.title}>{item?.full_name}</Text>
                    <View style={styles.body}>
                        <Text style={styles.quantity}>
                            {item?.total_follow}
                        </Text>
                        <IconUsers stroke={COLORS.Neutral8} />
                    </View>
                    <Text style={styles.description}>{item?.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListMember

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
        width: 52,
        height: 52,
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
