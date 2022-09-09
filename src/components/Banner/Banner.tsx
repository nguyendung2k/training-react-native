import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import ButtonBanner from '../Button/ButtonBanner'
import { COLORS, SIZES } from '../../assets/constants/theme'
import { IconSignOut } from '../Svg/Icon'

interface bannerProps {
    onPress?: () => void | undefined | boolean
    status?: boolean
}

const Banner = ({ status, onPress }: bannerProps) => {
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={require('../../assets/images/Background2.png')}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>Gaming</Text>
                        <Text style={styles.des}>256 members</Text>
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
