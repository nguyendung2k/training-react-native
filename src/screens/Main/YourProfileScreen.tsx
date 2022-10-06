import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {
    BannerNotification,
    ButtonActiveLogs,
    ButtonInfoFollow,
    ButtonNoBg,
    ButtonNotification,
    ButtonSocialNetwork,
    CardInfo,
    Header,
    HeaderSlide,
    IConBack,
    IconCaretRight,
    IconCoin,
    IconCrown,
    IconDotNotification,
    IconUsersDual,
} from '@components'
import { RootState } from '@redux/store'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES } from '@theme'
import { RootStackScreenProps } from '@navigation/type'

const dataUserSelector = (state: RootState) => state.user.userDetail
const userUpdateSelector = (state: RootState) => state.user.userUpdate

const YourProfileScreen = () => {
    const navigation =
        useNavigation<RootStackScreenProps<'YourProfileScreen'>['navigation']>()
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                                onPress={() => navigation.goBack()}
                                onDirection={() =>
                                    navigation.navigate('UpdateProfileScreen')
                                }
                                Icon={() => (
                                    <IConBack stroke={COLORS.Neutral0} />
                                )}
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
                            Icon={() => (
                                <IconUsersDual stroke={COLORS.Neutral10} />
                            )}
                        />
                        <ButtonInfoFollow
                            number="1234"
                            Icon={() => <IconCrown stroke={COLORS.Neutral10} />}
                            secondary
                        />
                        <ButtonInfoFollow
                            number="1234"
                            Icon={() => (
                                <IconCoin
                                    width={20}
                                    height={20}
                                    stroke={COLORS.Neutral10}
                                />
                            )}
                            tertiary
                        />
                    </View>

                    <View style={styles.btnGroup}>
                        <TouchableOpacity style={styles.btnContent}>
                            <Image
                                source={require('../../assets/images/LogoInstagram.png')}
                                style={styles.imageSocial}
                            />
                            <ButtonSocialNetwork
                                primary
                                title="@Matsuura Yuki "
                            />
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
                            <ButtonSocialNetwork
                                primary
                                title="@YukiMatsuura23"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContent}>
                            <Image
                                source={require('../../assets/images/logos_twitter.png')}
                                style={styles.imageSocial}
                            />
                            <ButtonSocialNetwork
                                primary
                                title="Matsuura Yuki"
                            />
                        </TouchableOpacity>
                    </View>
                    {/* ----------------------- */}

                    <HeaderSlide title="Introduction" />
                    <Text style={styles.textIntroduction}>
                        {userUpdate.introduction
                            ? userUpdate.introduction
                            : dataUser.introduction}
                    </Text>
                    {/* ------- */}

                    <HeaderSlide title="Your joined communities" />
                    <View style={styles.communitiesJoined}>
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
                            <ButtonSocialNetwork
                                title="Western Movies"
                                secondary
                            />
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
                            Icon={() => {
                                return (
                                    <IconDotNotification
                                        fill={COLORS.Semantic2}
                                    />
                                )
                            }}
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
                            Icon={() => (
                                <IconDotNotification fill={COLORS.White} />
                            )}
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
        </SafeAreaView>
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
    communitiesJoined: {
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
    notification: {
        marginTop: 36,
    },
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
