import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { apiGroup } from '../../services/groups'
import { useRoute } from '@react-navigation/native'
import { ButtonBanner, IconSignOut } from '@components'
import { BORDER, COLORS, SIZES } from '@theme'

interface bannerProps {
    onPress?: () => void | undefined | boolean
    status?: boolean
}

const Banner = ({ status, onPress }: bannerProps) => {
    const idFromParam = useRoute().params
    const [groupDetail, setGroupDetail] = useState<any>()

    useEffect(() => {
        const getDataGroupDetail = async () => {
            const data = await apiGroup.getGroupDataById(idFromParam)
            setGroupDetail(data)
        }
        getDataGroupDetail()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: groupDetail?.image }}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={{ borderRadius: BORDER.maximum }}
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            {groupDetail?.title ? groupDetail.title : ''}{' '}
                        </Text>
                        <Text style={styles.des}>
                            {groupDetail?.total_members
                                ? groupDetail.total_members
                                : ''}{' '}
                            members
                        </Text>
                        {status ? (
                            <ButtonBanner
                                secondary
                                label="Leaving"
                                Icon={() => (
                                    <IconSignOut stroke={COLORS.Neutral0} />
                                )}
                                onPress={onPress}
                            />
                        ) : (
                            <ButtonBanner
                                label="Participate"
                                onPress={onPress}
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
