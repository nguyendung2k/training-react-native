import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import HeaderSlide from '../../components/Header/HeaderSlide'

import SlideView from '../../components/SlideView/SlideView'
import { BORDER, COLORS, SIZES } from '../../assets/constants/theme'
import { api } from '../../services/user'
import { apiSlice } from '../../services/slides'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { apiGroup } from './../../services/groups'
import { useSelector } from 'react-redux'

// interface headerFlatListProp {
//     navigation?: NavigationProp<any, any>
// }

const userUpdateSelector = (state: any) => state.home.user

const HeaderFlatList = () => {
    const userUpdate = useSelector(userUpdateSelector)

    const [dataUser, setDataUser] = useState<any>({})
    const [dataSlices, setDataSlices] = useState<any>()

    const navigation: any = useNavigation()

    useEffect(() => {
        const getData = async () => {
            const data = await api.getDetailUser()
            setDataUser(data)
        }
        const getDataSlice = async () => {
            const data = await apiGroup.getAllGroupData()
            setDataSlices(data)
        }

        getDataSlice()
        getData()
    }, [])

    const handleDirection = (id: string) => {
        navigation.navigate('DetailCommunities', id)
    }

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.header_Image}>
                    <Image
                        source={{
                            uri: userUpdate.image
                                ? userUpdate.image
                                : dataUser.image,
                        }}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.header_Title}>Hello</Text>
                    <Text style={styles.header_Name}>
                        {userUpdate.name
                            ? userUpdate.name
                            : dataUser.first_name}
                        <Text> </Text>
                        {dataUser.last_name}
                    </Text>
                </View>
            </View>

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
                            Please purchase some in the store.
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <HeaderSlide title="Joined communities" />
                <FlatList
                    data={dataSlices}
                    renderItem={({ item }) => (
                        <SlideView
                            onPress={() => handleDirection(item.id)}
                            item={item}
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <HeaderSlide title="Others" />
        </View>
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
    },
    block: {
        color: COLORS.Neutral10,
        fontWeight: '800',
    },
})
