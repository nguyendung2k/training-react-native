import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'
import { IconCaretRight, IconChat, IconInfo } from '../Svg/Icon'

interface bannerFormProps {
    title?: string
    des?: string
    txt?: string
    Icon?: () => JSX.Element
    status?: boolean
    onPress?: () => boolean | void | undefined
}

const BannerForum = ({ title, des, txt, Icon, status }: bannerFormProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.content}>
                    <IconChat />
                    <View style={styles.block}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.des}>{des}</Text>
                    </View>
                </View>
                {status ? (
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Go to forum</Text>
                        <IconCaretRight stroke={COLORS.DarkerPrimary} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.5} style={styles.footer}>
                        {!!Icon && <Icon />}
                        <Text style={styles.txt}>
                            Join community to enter this forum
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default BannerForum

const styles = StyleSheet.create({
    container: {
        width: 366,
        height: 204,
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: BORDER.base,
    },
    body: {
        marginVertical: 28,
        marginHorizontal: 24,
    },
    content: {
        flexDirection: 'row',
    },
    block: {
        marginLeft: 26,
        marginBottom: 32,
    },
    title: {
        fontSize: SIZES.font,
        fontWeight: '600',
        color: COLORS.Neutral10,
        marginBottom: 9,
    },
    des: {
        fontSize: SIZES.medium,
        color: COLORS.Neutral6,
        width: 209,
        lineHeight: 25,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        fontSize: SIZES.medium,
        color: COLORS.Primary,
        fontWeight: '600',
        marginLeft: 15,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        fontSize: SIZES.medium,
        color: COLORS.DarkerPrimary,
        fontWeight: '600',
        marginLeft: 70,
    },
})
