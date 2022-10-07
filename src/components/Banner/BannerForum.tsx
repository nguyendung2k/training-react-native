import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, BORDER, SIZES } from '@theme'
import { RootState } from '@redux'
import { useSelector } from 'react-redux'
import { IconCaretRight, IconChat } from '@components/Svg'

interface bannerFormProps {
    title?: string
    des?: string
    txt?: string
    Icon?: () => JSX.Element
    onPress?: () => void
    onDirection?: () => void
}
const dataFindGroupSelector = (state: RootState) => state.group.findGroup

const BannerForum = ({ title, des, Icon, onDirection }: bannerFormProps) => {
    const dataFindGroup = useSelector(dataFindGroupSelector)

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
                {dataFindGroup[0]?.joinGr ? (
                    <TouchableOpacity style={styles.btn} onPress={onDirection}>
                        <Text style={styles.btnText}>Go to forum</Text>
                        <IconCaretRight stroke={COLORS.DarkerPrimary} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.footer}>
                        {!!Icon && <Icon />}
                        <Text style={styles.txt}>
                            Join community to enter this forum
                        </Text>
                    </View>
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
