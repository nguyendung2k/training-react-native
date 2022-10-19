import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppDispatch, getOtherMember, RootState } from '@redux'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS, SIZES } from '@theme'
import { RootStackScreenProps } from '@navigation/type'
import { Header, HeaderSlide } from '@components/Header'
import { IConBack, IconBlock, IconUsersDual } from '@components/Svg'
import { CardInfo } from '@components/Card'
import {
    ButtonForm,
    ButtonInfoFollow,
    ButtonSocialNetwork,
} from '@components/Button'

const userDetailSelector = (state: RootState) => state.user.userDetail

const YourUserScreen = () => {
    const idUserParam: any = useRoute().params
    const dispatch = useDispatch<AppDispatch>()
    const navigation =
        useNavigation<RootStackScreenProps<'YourProfileScreen'>['navigation']>()
    const userDetail = useSelector(userDetailSelector)

    useEffect(() => {
        dispatch(getOtherMember(idUserParam))
    }, [idUserParam])

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
                                showIcon
                                onPress={() => navigation.goBack()}
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
                <View style={styles.content}>
                    <View style={styles.btnFollow}>
                        <ButtonInfoFollow
                            number="1234"
                            Icon={() => (
                                <IconUsersDual stroke={COLORS.Neutral10} />
                            )}
                        />
                    </View>

                    <HeaderSlide title="Introduction" />
                    <Text style={styles.textIntroduction}>
                        {userDetail.introduction}
                    </Text>
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
                </View>
                <View style={styles.footer}>
                    <View style={styles.btnSentRequest}>
                        <ButtonForm label="Send RuiTomo Request" />
                    </View>
                    <View>
                        <ButtonForm
                            style={styles.btnBlock}
                            label="Block user"
                            block
                            Icon={() => (
                                <IconBlock
                                    width={21}
                                    height={20}
                                    fill={'none'}
                                    stroke={'#FF4C41'}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default YourUserScreen
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

    imageCommunitiesJoined: {
        position: 'absolute',
        top: 7,
        zIndex: 10,
        marginLeft: 10,
    },

    footer: {
        marginTop: 62,
        marginHorizontal: 24,
        marginBottom: 63,
    },
    btnSentRequest: {
        marginTop: 68,
    },
    btnUpdate: {
        marginTop: 20,
        marginBottom: 30,
    },
    btnBlock: {
        backgroundColor: COLORS.Neutral0,
        borderColor: COLORS.Semantic4,
        borderWidth: 1,
        marginTop: 24,
    },
})
