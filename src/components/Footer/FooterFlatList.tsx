import { COLORS } from '@theme'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CommunitiesScreenProp } from '@navigation/type'
import { ButtonHome, ButtonNoBg } from '@components/Button'
import {
    IconCaretRight,
    IconCoin,
    IconFacebook,
    IconTwitter,
} from '@components/Svg'

const FooterFlatList = () => {
    const navigation =
        useNavigation<
            CommunitiesScreenProp<'CommunitiesStackScreen'>['navigation']
        >()
    const handleSeeAllGroup = () => {
        navigation.navigate('CommunitiesStackScreen' as never)
    }
    return (
        <View>
            <TouchableOpacity activeOpacity={1} style={styles.btn}>
                <ButtonNoBg
                    title="See all"
                    onPress={handleSeeAllGroup}
                    Icon={() => <IconCaretRight stroke={COLORS.Primary} />}
                />
            </TouchableOpacity>

            <View style={styles.btnGroup}>
                <ButtonHome
                    Icon={() => (
                        <IconCoin width={32} height={32} stroke={'#FEA827'} />
                    )}
                    title="Purchase TomoCoins"
                />
                <ButtonHome
                    Icon={() => <IconTwitter stroke={'#406FF1'} />}
                    title="Introduce via Twitter"
                />
                <ButtonHome
                    Icon={() => <IconFacebook stroke={'#642AE3'} />}
                    title="Introduce via Facebook"
                />
            </View>
        </View>
    )
}

export default FooterFlatList

const styles = StyleSheet.create({
    btn: {
        marginBottom: 42,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnGroup: {
        marginBottom: 40,
    },
})
