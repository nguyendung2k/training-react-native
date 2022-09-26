import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, BORDER, SIZES } from '@theme'
import { IconUsers } from '@components'

const ListMember = ({ data }: any) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.image} source={{ uri: data.image }} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.body}>
                            <Text style={styles.quantity}>
                                {data.total_follow}
                            </Text>
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
