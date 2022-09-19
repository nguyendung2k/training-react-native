import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import {
    IConBack,
    IconCaretRight,
    IconDotNotification,
    IconUsersDual,
} from '../../components/Svg/Icon'
import { COLORS, SIZES } from '../../assets/constants/theme'
import CardInfo from '../../components/Card/Card'
import ButtonInfoFollow from '../../components/Button/ButtonInfoFollow'
import HeaderSlide from '../../components/Header/HeaderSlide'
import ButtonSocialNetwork from '../../components/Button/ButtonSocialNetwork'
import ButtonActiveLogs from '../../components/Button/ButtonActiveLogs'
import ButtonNoBg from '../../components/Button/ButtonNoBg'
import BannerNotification from '../../components/Banner/BannerNotification'
import ButtonNotification from '../../components/Button/ButtonNotification'

const YourProfileScreen = ({ navigation }: any) => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
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
                            showIcon
                            onPress={() => navigation.navigate('Account')}
                            onDirection={() =>
                                navigation.navigate('UpdateProfileScreen')
                            }
                            Icon={() => <IConBack stroke={COLORS.Neutral0} />}
                        />
                    </View>
                </ImageBackground>
                <View style={styles.card_header}>
                    <CardInfo secondary />
                </View>
            </View>
            {/* -----Content----- */}
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
                    <TouchableOpacity style={styles.btnContent}>
                        <Image
                            source={require('../../assets/images/LogoInstagram.png')}
                            style={styles.imageSocial}
                        />
                        <ButtonSocialNetwork primary title="@Matsuura Yuki " />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContent}>
                        <Image
                            source={require('../../assets/images/logos_youtube-icon.png')}
                            style={styles.imageSocial}
                        />
                        <ButtonSocialNetwork
                            primary
                            title="Matsuura Yuki official"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContent}>
                        <Image
                            source={require('../../assets/images/LogoFacebook.png')}
                            style={styles.imageSocial}
                        />
                        <ButtonSocialNetwork primary title="@YukiMatsuura23" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContent}>
                        <Image
                            source={require('../../assets/images/logos_twitter.png')}
                            style={styles.imageSocial}
                        />
                        <ButtonSocialNetwork primary title="Matsuura Yuki" />
                    </TouchableOpacity>
                </View>
                {/* ----------------------- */}

                <HeaderSlide title="Introduction" />
                <Text style={styles.textIntroduction}>
                    Hello world, I’m Yuki from Japan and I’m creating the
                    beautiful videos. I wish Facebook would notify me when
                    someone deletes me. That way I could ‘Like’ it. My brain is
                    divided into two parts.
                </Text>
                {/* ------- */}

                <HeaderSlide title="Your joined communities" />
                <View style={styles.communnitiesJoined}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/CommunitiesJoined1.png')}
                            style={styles.imageCommunitiesJoined}
                        />
                        <ButtonSocialNetwork title="Anime" secondary />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 15 }}>
                        <Image
                            source={require('../../assets/images/CommunitiesJoined2.png')}
                            style={styles.imageCommunitiesJoined}
                        />
                        <ButtonSocialNetwork title="Fashion" secondary />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/CommunitiesJoined3.png')}
                            style={styles.imageCommunitiesJoined}
                        />
                        <ButtonSocialNetwork title="Western Movies" secondary />
                    </TouchableOpacity>
                </View>
                {/* ---------------------- */}
                <HeaderSlide title="Activities log" />
            </View>
            <View style={styles.blockActiveLog}>
                <TouchableOpacity style={styles.notification}>
                    <Image
                        source={require('../../assets/images/ImagePeople.png')}
                        style={styles.imagePeople}
                    />
                    <ButtonActiveLogs
                        name="Chotan Dai"
                        content=" uploaded a new video “5 tips for studying” on Youtube"
                        time="9 Jul 2021, 12:00AM "
                        active
                        Icon={() => (
                            <IconDotNotification fill={COLORS.Semantic2} />
                        )}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notification}>
                    <Image
                        source={require('../../assets/images/ImagePeople2.png')}
                        style={styles.imagePeople}
                    />
                    <ButtonActiveLogs
                        name="Chotan Dai"
                        content=" uploaded a new video “5 tips for studying” on Youtube"
                        time="9 Jul 2021, 12:00AM "
                        active
                        Icon={() => (
                            <IconDotNotification fill={COLORS.Semantic2} />
                        )}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notification}>
                    <Image
                        source={require('../../assets/images/ImagePeople3.png')}
                        style={styles.imagePeople}
                    />
                    <ButtonActiveLogs
                        name="Chotan Dai"
                        content=" uploaded a new video “5 tips for studying” on Youtube"
                        time="9 Jul 2021, 12:00AM "
                        active
                        Icon={() => <IconDotNotification fill={COLORS.White} />}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <ButtonNoBg
                    title="Older activities"
                    Icon={() => <IconCaretRight stroke={COLORS.Primary} />}
                />
            </View>

            <View style={styles.footer}>
                <BannerNotification />

                <View style={styles.btnRequest}>
                    <ButtonNotification
                        title="Waiting for approval"
                        numberNotification="5"
                        onPress={() =>
                            navigation.navigate('WaitingForApprovalScreen')
                        }
                    />
                    <ButtonNotification
                        title="Friend request sent"
                        numberNotification="22"
                        onPress={() =>
                            navigation.navigate('FriendRequestScreen')
                        }
                    />
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
        marginHorizontal: 24,
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
    communnitiesJoined: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnContent: {
        // position: 'relative',
        // backgroundColor: 'red',
    },
    imageSocial: {
        position: 'absolute',
        top: 15,
        zIndex: 10,
        marginLeft: 24,
        width: 30,
        height: 30,
    },
    imageCommunitiesJoined: {
        position: 'absolute',
        top: 7,
        zIndex: 10,
        marginLeft: 10,
    },
    notification: { marginTop: 36 },
    blockActiveLog: {
        minHeight: 338,
        width: '100%',
        backgroundColor: COLORS.BackgroundInput,
        marginTop: 12,
        marginBottom: 17,
    },
    imagePeople: {
        position: 'absolute',
        top: 0,
        zIndex: 10,
        marginLeft: 26,
        marginTop: 5,
    },
    footer: {
        marginTop: 62,
        marginHorizontal: 24,
        marginBottom: 63,
    },
    btnRequest: {
        marginTop: 68,
    },
})