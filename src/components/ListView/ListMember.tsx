import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { IconUsers } from '../Svg/Icon'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

const MEMBERS = [
    {
        title: 'Jenny Wilson',
        image: '../../assets/images/Avatar1.png',
        quantity: '2050',
        description: 'Typical creator. Bacon guru. Gamer.',
    },
    {
        title: 'Annette Black',
        image: '../../assets/images/Avatar1.png',
        quantity: '123',
        description:
            'I want to empower entrepreneurs and have a tangible impact in my community.',
    },
    {
        title: 'Savannah Nguyen',
        image: '../../assets/images/Avatar1.png',
        quantity: '456',
        description: 'Typical creator. Bacon guru. Gamer.',
    },
    {
        title: 'Savannah Nguyen',
        image: '../../assets/images/Avatar1.png',
        quantity: '456',
        description: 'Typical creator. Bacon guru. Gamer.',
    },
    {
        title: 'Savannah Nguyen',
        image: '../../assets/images/Avatar1.png',
        quantity: '456',
        description: 'Typical creator. Bacon guru. Gamer.',
    },
    {
        title: 'Savannah Nguyen',
        image: '../../assets/images/Avatar1.png',
        quantity: '456',
        description: 'Typical creator. Bacon guru. Gamer.',
    },
]

const ListMember = () => {
    console.log('re-render')
    return (
        <View>
            {MEMBERS.map((item, index) => (
                <TouchableOpacity key={index} style={styles.container}>
                    <View style={styles.content}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/Avatar1.png')}
                        />
                        <View style={styles.info}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.body}>
                                <Text style={styles.quantity}>
                                    {item.quantity}
                                </Text>
                                <IconUsers stroke={COLORS.Neutral8} />
                            </View>
                            <Text style={styles.description}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
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
