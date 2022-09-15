import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import {
    IConBack,
    IconCoin,
    IconFacebook,
    IconTwitter,
    IconUsersDual,
} from '../../components/Svg/Icon'
import { COLORS, SIZES } from '../../assets/constants/theme'
import CardInfo from '../../components/Card/Card'
import ButtonInfoFollow from '../../components/Button/ButtonInfoFollow'
import ButtonHome from '../../components/Button/ButtonHome'
import HeaderSlide from '../../components/Header/HeaderSlide'
import ButtonHaft from '../../components/Button/ButtonHaft'

const YourProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    style={styles.imageBg}
                    source={require('../../assets/images/Background3.png')}
                >
                    <View style={styles.contentHeader}>
                        <Header
                            title="Your profile"
                            showTextHeader
                            showRightIcon
                            secondary
                            Icon={() => <IConBack stroke={COLORS.Neutral0} />}
                        />
                    </View>
                </ImageBackground>
                <View style={styles.card_header}>
                    <CardInfo secondary />
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.btnFollow}>
                    <ButtonInfoFollow
                        number="1234"
                        Icon={() => <IconUsersDual stroke={COLORS.Neutral10} />}
                    />
                    <ButtonInfoFollow
                        number="1234"
                        Icon={() => <IconUsersDual stroke={COLORS.Neutral10} />}
                    />
                    <ButtonInfoFollow
                        number="1234"
                        Icon={() => <IconUsersDual stroke={COLORS.Neutral10} />}
                    />
                </View>
                <View style={styles.btnGroup}>
                    <ButtonHome secondary title="Purchase TomoCoins" />
                    <ButtonHome secondary title="@Introduce via Twitter" />
                    <ButtonHome secondary title="@Introduce via Facebook" />
                    <ButtonHome secondary title="@Introduce via Facebook" />
                </View>
                <HeaderSlide title="Introduction" />
                <Text style={styles.textIntroduction}>
                    Hello world, I’m Yuki from Japan and I’m creating the
                    beautiful videos. I wish Facebook would notify me when
                    someone deletes me. That way I could ‘Like’ it. My brain is
                    divided into two parts.
                </Text>
                <HeaderSlide title="Your joined communities" />
                <View>
                    <ButtonHome secondary title="@Introduce via Facebook" />
                </View>
            </View>
        </ScrollView>
    )
}

export default YourProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Neutral0,
    },
    imageBg: {
        height: 212,
        position: 'absolute',
        width: '100%',
    },

    contentHeader: {
        marginTop: 80,
    },
    card_header: {
        // position: 'absolute',
        marginTop: 100,
        marginRight: 20,
    },
    header: {
        // position: 'relative',
        // marginBottom: -160,
        // backgroundColor: 'red',
    },
    btnFollow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    content: {
        marginHorizontal: 24,
    },
    btnGroup: {
        marginTop: 36,
    },
    textIntroduction: {
        fontSize: SIZES.medium,
        lineHeight: 25,
        color: COLORS.Neutral6,
        marginTop: 10,
    },
})
