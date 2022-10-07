import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '@theme'
import { IconUsersDual } from '@components/Svg'
import { ButtonHaft } from '@components/Button'

interface waitingFormProps {
    name?: string
    dateRequest?: string
    quantityFollow?: string
    primary?: boolean
    secondary?: boolean
    onAccept?: () => void
    onReject?: () => void
}

const WaitingFormRequest = ({
    name,
    dateRequest,
    quantityFollow,
    primary,
    secondary,
    onAccept,
    onReject,
}: waitingFormProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Image
                        source={require('../../assets/images/Avatar1.png')}
                        style={styles.imageAvatar}
                    />
                </View>
                <View style={styles.infoRequest}>
                    <View style={styles.infoRequestHeader}>
                        <View>
                            <Text style={styles.infoNameRequest}>{name}</Text>
                            <View style={styles.infoNumberFollow}>
                                <Text style={styles.infoNumber}>
                                    {quantityFollow}
                                </Text>
                                <IconUsersDual stroke={COLORS.Neutral6} />
                            </View>
                        </View>
                        <Text style={styles.infoDateRequest}>
                            {dateRequest}
                        </Text>
                    </View>
                    <View style={styles.infoGroupRequest}>
                        <View style={styles.infoItemGroup}>
                            <View style={styles.infoItem}>
                                <Image
                                    source={require('../../assets/images/Avatar1.png')}
                                    style={styles.imageGroup}
                                />
                                <Text style={styles.infoNameGroup}>Movies</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Image
                                    source={require('../../assets/images/Avatar1.png')}
                                    style={styles.imageGroup}
                                />
                                <Text style={styles.infoNameGroup}>Movies</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Image
                                    source={require('../../assets/images/Avatar1.png')}
                                    style={styles.imageGroup}
                                />
                                <Text style={styles.infoNameGroup}>Movies</Text>
                            </View>
                        </View>
                    </View>

                    {secondary && (
                        <View style={styles.infoRequestTxt}>
                            <Text style={styles.txt}>Request pending...</Text>
                        </View>
                    )}

                    {primary && (
                        <View style={styles.btn}>
                            <ButtonHaft
                                onPress={onAccept}
                                primary
                                label="Accept"
                            />
                            <ButtonHaft
                                onPress={onReject}
                                quaternary
                                label="Reject"
                            />
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default WaitingFormRequest

const styles = StyleSheet.create({
    container: {
        minHeight: 256,
        backgroundColor: COLORS.Neutral1,
        borderRadius: BORDER.base,
        marginBottom: 20,
    },
    content: {
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 20,
        marginRight: 16,
    },

    imageAvatar: {
        width: 52,
        height: 52,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: COLORS.Semantic1,
        marginRight: 20,
    },
    infoRequest: {},
    infoRequestHeader: {
        flexDirection: 'row',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    infoNameRequest: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        color: COLORS.DarkerPrimary,
        marginRight: 76,
    },
    infoNumberFollow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    infoNumber: {
        fontSize: SIZES.medium,
        fontWeight: '400',
        color: COLORS.Neutral6,
        marginRight: 4,
    },
    infoDateRequest: {
        fontWeight: '500',
        color: COLORS.Neutral4,
    },
    infoGroupRequest: {
        marginTop: 25,
    },
    infoItemGroup: {
        flexDirection: 'column',
    },
    imageGroup: {
        width: 24,
        height: 24,
    },
    infoNameGroup: {
        color: COLORS.Neutral8,
        fontWeight: '500',
        fontSize: SIZES.small,
        marginLeft: 8,
        textAlign: 'center',
    },
    infoRequestTxt: {
        marginTop: 38,
    },
    txt: {
        fontWeight: '600',
        color: COLORS.Neutral4,
        fontSize: SIZES.medium,
    },

    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        paddingBottom: 10,
    },
})
