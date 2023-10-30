import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { BORDER, COLORS, SIZES } from '@theme'
import CardId from './CardId'

interface cardInfoProps {
    secondary?: boolean
    primary?: boolean
    onPress?: () => void
}

const userOtherDetailSelector = (state: RootState) => state.member.otherMember

const CardInfoOtherUser = ({ secondary, primary, onPress }: cardInfoProps) => {
    const userOtherDetail = useSelector(userOtherDetailSelector)

    console.log('userOtherDetail: ', userOtherDetail)

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, primary && styles.containerPrimary]}
        >
            <View
                style={[styles.content, secondary && styles.contentSecondary]}
            >
                <View>
                    {secondary && (
                        <Image
                            source={{
                                uri: userOtherDetail.image,
                            }}
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: 100,
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
                        {userOtherDetail.full_name}
                    </Text>
                    <CardId />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardInfoOtherUser

const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER.base,
        marginVertical: 24,
    },
    containerPrimary: {
        backgroundColor: COLORS.BackgroundInput,
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
