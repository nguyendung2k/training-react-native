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
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { BORDER, COLORS, SIZES } from '@theme'
import { RootStackScreenProps } from '@navigation/type'
import { BannerNotification } from '@components/Banner'
import { Header, HeaderSlide } from '@components/Header'
import {
    IConBack,
    IconCaretRight,
    IconCoin,
    IconCrown,
    IconDotNotification,
    IconUsersDual,
} from '@components/Svg'
import { CardInfo } from '@components/Card'
import { ButtonComponent } from '@components/Button'
import { Notification } from '@components/Notification'

const userDetailSelector = (state: RootState) => state.user.userDetail

const YourProfileScreen = () => {
    const idUserParam = useRoute().params

    const navigation =
        useNavigation<RootStackScreenProps<'YourProfileScreen'>['navigation']>()
    const userDetail = useSelector(userDetailSelector)

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
                                    navigation.navigate(
                                        'UpdateProfileScreen',
                                        idUserParam
                                    )
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
                        <ButtonComponent
                            label="1234"
                            IconRight={
                                <IconUsersDual stroke={COLORS.Semantic5} />
                            }
                            styleBtn={[styles.btn, styles.default]}
                            styleText={[styles.txtBtnDefault]}
                        />
                        <ButtonComponent
                            label="1234"
                            IconRight={<IconCrown stroke={COLORS.Semantic2} />}
                            styleBtn={[styles.btn, styles.default]}
                            styleText={[
                                styles.txtBtnDefault,
                                { color: COLORS.Semantic2 },
                            ]}
                        />
                        <ButtonComponent
                            label="1234"
                            IconRight={
                                <IconCoin
                                    width={20}
                                    height={20}
                                    stroke={COLORS.Semantic1}
                                />
                            }
                            styleBtn={[styles.btn, styles.default]}
                            styleText={[
                                styles.txtBtnDefault,
                                { color: COLORS.Semantic1 },
                            ]}
                        />
                    </View>

                    <View style={styles.btnGroup}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/LogoInstagram.png')}
                                style={styles.imageSocial}
                            />
                            <ButtonComponent
                                label="@Matsuura Yuki"
                                styleBtn={styles.btnSocial}
                                styleText={styles.txtBtnSocial}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/logos_youtube-icon.png')}
                                style={styles.imageSocial}
                            />
                            <ButtonComponent
                                label="@Matsuura Yuki"
                                styleBtn={styles.btnSocial}
                                styleText={styles.txtBtnSocial}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/LogoFacebook.png')}
                                style={styles.imageSocial}
                            />
                            <ButtonComponent
                                label="@Matsuura Yuki"
                                styleBtn={styles.btnSocial}
                                styleText={styles.txtBtnSocial}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/logos_twitter.png')}
                                style={styles.imageSocial}
                            />
                            <ButtonComponent
                                label="@Matsuura Yuki"
                                styleBtn={styles.btnSocial}
                                styleText={styles.txtBtnSocial}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* ----------------------- */}

                    <HeaderSlide title="Introduction" />
                    <Text style={styles.textIntroduction}>
                        {userDetail.introduction}
                    </Text>
                    {/* ------- */}

                    <HeaderSlide title="Your joined communities" />
                    <View style={styles.communitiesJoined}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/CommunitiesJoined1.png')}
                                style={styles.imageCommunitiesJoined}
                            />
                            <ButtonComponent
                                label="Anime"
                                styleBtn={styles.btnCommunity}
                                styleText={styles.txtBtnCommunity}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                            <Image
                                source={require('../../assets/images/CommunitiesJoined2.png')}
                                style={styles.imageCommunitiesJoined}
                            />
                            <ButtonComponent
                                label="Fashion"
                                styleBtn={styles.btnCommunity}
                                styleText={styles.txtBtnCommunity}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/CommunitiesJoined3.png')}
                                style={styles.imageCommunitiesJoined}
                            />
                            <ButtonComponent
                                label="Western Movies"
                                styleBtn={styles.btnCommunity}
                                styleText={styles.txtBtnCommunity}
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
                        <Notification
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
                        <Notification
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
                        <Notification
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
                    <ButtonComponent
                        label="Older activities"
                        styleBtn={styles.btnOlder}
                        styleText={styles.txtBtn}
                        Icon={<IconCaretRight stroke={COLORS.Primary} />}
                    />
                </View>

                <View style={styles.footer}>
                    <BannerNotification />

                    <View style={styles.btnRequest}>
                        <ButtonComponent
                            title="Waiting for approval"
                            numberNotification="5"
                            onPress={() =>
                                navigation.navigate('WaitingForApprovalScreen')
                            }
                            styleBtn={styles.btnWaiting}
                            notice
                        />
                        <ButtonComponent
                            title="Friend request sent"
                            numberNotification="22"
                            onPress={() =>
                                navigation.navigate('FriendRequestScreen')
                            }
                            styleBtn={styles.btnFriendRequest}
                            notice
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
        marginTop: 100,
        marginRight: 20,
    },
    header: {},
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
    default: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'space-evenly',
    },
    btn: {
        backgroundColor: COLORS.BackgroundInput,
        width: 103,
        height: 36,
        borderRadius: BORDER.maximum,
    },
    txtBtnDefault: {
        fontSize: SIZES.medium,
        color: COLORS.Semantic5,
        fontWeight: '600',
    },
    btnSocial: {
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: BORDER.base,
        paddingVertical: 21,
        marginBottom: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtBtnSocial: {
        marginLeft: 70,
        fontSize: SIZES.small,
        fontWeight: '500',
        color: COLORS.Neutral10,
    },
    btnCommunity: {
        backgroundColor: COLORS.BackgroundInput,
        borderRadius: BORDER.base,
        paddingVertical: 21,
        marginBottom: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtBtnCommunity: {
        fontSize: SIZES.font,
        fontWeight: '600',
        color: COLORS.Neutral6,
        marginRight: 16,
        marginLeft: 74,
    },
    btnOlder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtn: {
        color: COLORS.Primary,
        fontSize: SIZES.medium,
        fontWeight: '600',
    },
    btnWaiting: {
        backgroundColor: COLORS.Neutral1,
        borderRadius: BORDER.base,
        marginBottom: 12,
    },
    btnFriendRequest: {
        backgroundColor: COLORS.Neutral1,
        borderRadius: BORDER.base,
        marginBottom: 12,
    },
})
