import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardId from './CardId'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'
import { useSelector } from 'react-redux'

interface cardInfoProps {
    secondary?: boolean
    primary?: boolean
}
const dataUserSelector = (state: any) => state.auth.user
const userUpdateSelector = (state: any) => state.home.user

const CardInfo = ({ secondary, primary }: cardInfoProps) => {
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)

    return (
        <View style={[styles.container, primary && styles.containerPrimary]}>
            <View
                style={[styles.content, secondary && styles.contentSecondary]}
            >
                <View style={styles.image}>
                    {secondary ? (
                        <Image
                            source={{
                                uri: userUpdate.image
                                    ? userUpdate.image
                                    : dataUser.image,
                            }}
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: 100,
                            }}
                        />
                    ) : (
                        <Image
                            source={{
                                uri: userUpdate.image
                                    ? userUpdate.image
                                    : dataUser.image,
                            }}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                marginRight: 20,
                            }}
                        />
                    )}
                </View>
                <View style={secondary && styles.contentDetail}>
                    <Text
                        style={[
                            styles.title,
                            secondary && styles.titleSecondary,
                        ]}
                    >
                        {userUpdate.name
                            ? userUpdate.name
                            : dataUser.first_name}
                        <Text> </Text>
                        {dataUser.last_name}
                    </Text>
                    <CardId />
                </View>
            </View>
        </View>
    )
}

export default CardInfo

const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER.base,
        marginVertical: 24,
    },
    containerPrimary: {
        backgroundColor: COLORS.BackgroundInput,
        // backgroundColor: COLORS.Neutral0,
    },
    content: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 18,
        alignItems: 'center',
        marginLeft: 18,
    },
    contentSecondary: {
        flexDirection: 'column',
    },
    image: {
        // marginRight: 20,
    },

    title: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        marginBottom: 7,
    },
    titleSecondary: {
        fontSize: SIZES.large,
        color: COLORS.Primary,
        marginTop: 14,
        marginBottom: 4,
    },
    contentDetail: {
        alignItems: 'center',
    },
})
