import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
    FooterFlatList,
    HeaderFlatList,
    ListCommunityView,
    Loading,
} from '@components'
import { RootState } from '@redux'
import { COLORS } from '@theme'
import { HomeScreenProps } from '@navigation/type'

const listGroupSelector = (state: RootState) => state.group.groups

export default function HomeScreen() {
    const navigation =
        useNavigation<HomeScreenProps<'HomeScreen'>['navigation']>()
    const [groupNotJoin, setGroupNotJoin] = useState<
        {
            title: string
            image: string
            id: string
            total_members: number
            joinGr: boolean
        }[]
    >([])
    const listGroup = useSelector(listGroupSelector)

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        filterGroupNotJoin()
    }, [listGroup])

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
        }, 1500)
    }, [])

    const handleOnChangeGroup = (id: { id: string }) => {
        navigation.navigate('DetailCommunities', id)
    }

    const filterGroupNotJoin = () => {
        const filterGroup = listGroup.filter((item) => {
            return item.joinGr === false
        })
        setGroupNotJoin(filterGroup)
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={styles.loading}>
                    <Loading />
                </View>
            ) : (
                <View style={styles.contentBody}>
                    <View>
                        <FlatList
                            data={groupNotJoin}
                            renderItem={({ item }) => (
                                <ListCommunityView
                                    onPress={() => handleOnChangeGroup(item.id)}
                                    item={item}
                                />
                            )}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={HeaderFlatList}
                            ListFooterComponent={FooterFlatList}
                        />
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    contentBody: {
        marginHorizontal: 24,
    },
})
