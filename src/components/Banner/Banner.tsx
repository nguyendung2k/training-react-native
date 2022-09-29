import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ButtonBanner, IconSignOut } from '@components'
import { BORDER, COLORS, SIZES } from '@theme'
import { changeGroupById } from '@redux/slices/groupSlice'
import { RootState } from '@redux'
import { useDispatch, useSelector } from 'react-redux'

interface bannerProps {
    onPressLeaving?: () => void
    onPressParticipate?: () => void
    status?: boolean
}

const dataFindGroupSelector = (state: RootState) => state.group.findGroup

const Banner = ({ onPressLeaving, onPressParticipate }: bannerProps) => {
    const dispatch = useDispatch()
    const idFromParam = useRoute().params
    const dataFindGroup = useSelector(dataFindGroupSelector)
    useEffect(() => {
        console.log('idFromParam: ', idFromParam)
        dispatch(changeGroupById(idFromParam))
    }, [])

    // console.log('data sau khi thay doi: ', dataDetailGroup)

    // const findGroupById = (idFromParam: any) => {
    //     const findGroup = dataGroup.filter((item) => {
    //         return item.id === idFromParam
    //     })

    // console.log('dataFindGroup[0]?.joinGr: ', dataFindGroup[0]?.joinGr)

    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: dataFindGroup[0]?.image }}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={{ borderRadius: BORDER.maximum }}
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            {dataFindGroup[0]?.title
                                ? dataFindGroup[0].title
                                : ''}{' '}
                        </Text>
                        <Text style={styles.des}>
                            {dataFindGroup[0]?.total_members
                                ? dataFindGroup[0].total_members
                                : ''}{' '}
                            members
                        </Text>
                        {dataFindGroup[0]?.joinGr ? (
                            <ButtonBanner
                                secondary
                                label="Leaving"
                                Icon={() => (
                                    <IconSignOut stroke={COLORS.Neutral0} />
                                )}
                                onPress={onPressLeaving}
                            />
                        ) : (
                            <ButtonBanner
                                label="Participate"
                                onPress={onPressParticipate}
                            />
                        )}
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        marginTop: 29.25,
        marginBottom: 24,
    },
    image: {
        width: 366,
        height: 205,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: SIZES.large,
        color: COLORS.Neutral0,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 35,
    },
    des: {
        fontSize: SIZES.small,
        fontWeight: '500',
        color: COLORS.Neutral0,
        marginTop: 6,
        marginBottom: 33,
    },
})
