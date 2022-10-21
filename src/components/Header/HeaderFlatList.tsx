import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { BORDER, COLORS, SIZES } from '@theme'
import { CommunitiesScreenProp } from '@navigation/type'
import { SlideCommunityView } from '@components/SlideView'
import HeaderSlide from './HeaderSlide'

// const userUpdateSelector = (state: RootState) => state.user.userUpdate
const userDetailSelector = (state: RootState) => state.user.userDetail
const dataGroupSelector = (state: RootState) => state.group.groups
const dataUser = (state: RootState) => state.user.user

const HeaderFlatList = () => {
    const navigation =
        useNavigation<
            CommunitiesScreenProp<'CommunitiesStackScreen'>['navigation']
        >()
    const userDetail = useSelector(userDetailSelector)
    const dataGroup = useSelector(dataGroupSelector)

    const [groupJoin, setGroupJoin] = useState<any>([])

    useEffect(() => {
        filterGroupByJoin()
    }, [dataGroup])

    const filterGroupByJoin = () => {
        const filterGroup = dataGroup.filter((item) => {
            return item.joinGr === true
        })
        setGroupJoin(filterGroup)
    }

    const handleDirection = (id: string) => {
        navigation.navigate('DetailCommunities', id)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.header}
                onPress={() =>
                    navigation.navigate('YourProfileScreen', userDetail.user_id)
                }
            >
                <View style={styles.header_Image}>
                    <Image
                        source={{
                            uri: userDetail.image,
                        }}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.header_Title}>Hello</Text>
                    <Text style={styles.header_Name}>
                        {userDetail.full_name}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.content_Container}>
                    <View style={styles.content_Image}>
                        <Image
                            source={require('../../assets/images/Loa.png')}
                        />
                    </View>
                    <View style={styles.content_Description}>
                        <Text style={styles.content_Title}>News for you</Text>
                        <Text style={styles.Description}>
                            You don’t have enough{' '}
                            <Text style={styles.block}>TomoCoins! </Text>
                        </Text>
                        <Text>Please purchase some in the store.</Text>
                    </View>
                </View>
            </View>

            <View>
                <HeaderSlide title="Joined communities" />
                <FlatList
                    data={groupJoin}
                    renderItem={({ item }) => (
                        <SlideCommunityView
                            onPress={() => handleDirection(item.id)}
                            item={item}
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <HeaderSlide title="Others" />
        </SafeAreaView>
    )
}

export default HeaderFlatList

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
    image: {
        width: 48,
        height: 48,
        borderRadius: 50,
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
        marginBottom: 2,
    },
    block: {
        color: COLORS.Neutral10,
        fontWeight: '800',
    },
})
