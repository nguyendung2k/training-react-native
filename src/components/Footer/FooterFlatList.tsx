import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonNoBg from '../Button/ButtonNoBg'
import ButtonHome from '../Button/ButtonHome'
import { IconCoin, IconFacebook, IconTwitter } from '../Svg/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGroup, getGroup } from '../../redux/slices/homeSlice'

const FooterFlatList = () => {
    const dispatch = useDispatch()
    const handleSeeAllGroup = () => {
        dispatch(getAllGroup())
    }
    return (
        <View>
            <View style={styles.btn}>
                <ButtonNoBg title="See all" onPress={handleSeeAllGroup} />
            </View>

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
    },
    btnGroup: {
        marginBottom: 40,
    },
})
