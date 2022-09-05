import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'

import HeaderSlide from '../../components/Header/HeaderSlide'

import ButtonNoBg from '../../components/Button/ButtonNoBg'
import ButtonHome from '../../components/Button/ButtonHome'
import ListView from '../../components/ListView/ListView'
import SlideView from '../../components/SlideView/SlideView'
import { SLIDES } from '../../assets/constants/slide'
import { GROUPS } from '../../assets/constants/groups'
import { IconCoin, IconFacebook, IconTwitter } from '../../components/Svg/Icon'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({ navigation }: any) {
    // console.log(navigation)
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.contentBody}>
                <View style={styles.header}>
                    <View style={styles.header_Image}>
                        <Image
                            source={require('../../assets/images/Avatar1.png')}
                        />
                    </View>
                    <View>
                        <Text style={styles.header_Title}>Hello</Text>
                        <Text style={styles.header_Name}>Matsuura Yuki</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.content_Container}>
                        <View style={styles.content_Image}></View>
                        <View style={styles.content_Description}>
                            <Text style={styles.content_Title}>
                                News for you
                            </Text>
                            <Text style={styles.Description}>
                                You don’t have enough{' '}
                                <Text style={styles.block}>TomoCoins! </Text>
                                Please purchase some in the store.
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <HeaderSlide title="Joined communities" />
                    <FlatList
                        data={SLIDES}
                        renderItem={({ item }) => <SlideView item={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View>
                    <HeaderSlide title="Others" />
                    <FlatList
                        data={GROUPS}
                        renderItem={({ item }) => (
                            <ListView
                                onPress={() =>
                                    navigation.navigate('DetailCommunities')
                                }
                                item={item}
                            />
                        )}
                    />
                </View>

                <View style={styles.btn}>
                    <ButtonNoBg title="See all" />
                </View>

                <View style={styles.btnGroup}>
                    <ButtonHome
                        Icon={() => <IconCoin stroke={'#FEA827'} />}
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    contentBody: {
        marginHorizontal: 24,
        marginBottom: 50,
    },
    header: {
        marginTop: 56,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_Image: {
        marginRight: 20,
    },
    header_Title: {
        fontSize: SIZES.font,
        color: COLORS.Neutral6,
        fontWeight: '400',
    },
    header_Name: {
        fontSize: SIZES.large,
        color: COLORS.Neutral10,
        fontWeight: '600',
    },
    content: {
        marginTop: 36,
        backgroundColor: COLORS.BackgroundInput,
        borderWidth: 1,
        borderColor: COLORS.BackgroundInput,
        borderRadius: BORDER.maximum,
    },
    content_Container: {
        flexDirection: 'row',
        paddingTop: 32,
        paddingBottom: 32,
        alignItems: 'center',
    },
    content_Description: {
        width: 251,
    },
    content_Image: {
        marginRight: 19,
        marginLeft: 16,
    },
    content_Title: {
        fontSize: SIZES.font,
        color: COLORS.Primary,
        fontWeight: '600',
        marginBottom: 6,
    },
    Description: {
        fontSize: SIZES.small,
        fontWeight: '400',
        lineHeight: 20,
    },
    block: {
        color: COLORS.Neutral10,
        fontWeight: '800',
    },
    btn: {
        marginBottom: 42,
    },
    btnGroup: {
        marginBottom: 40,
    },
})
