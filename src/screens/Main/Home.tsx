import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListView from '../../components/ListView/ListView'
import { COLORS } from '../../assets/constants/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderFlatList from '../../components/Header/HeaderFlatList'
import FooterFlatList from '../../components/Footer/FooterFlatList'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import { apiGroup } from '../../services/groups'
import { getGroup, getGroupById } from '../../redux/slices/homeSlice'
import ButtonNoBg from '../../components/Button/ButtonNoBg'

const loadingSelector = (state: any) => state.auth.loading
const listGroupSelector = (state: any) => state.home.groups

export default function Home({ navigation }: any) {
    const dispatch = useDispatch()
    // const loading = useSelector(loadingSelector)
    const listGroup = useSelector(listGroupSelector)

    useEffect(() => {
        dispatch(getGroup())
    }, [])

    const handleOnChangeGroup = (id: string) => {
        navigation.navigate('DetailCommunities', id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentBody}>
                <View>
                    <FlatList
                        data={listGroup}
                        renderItem={({ item }) => (
                            <ListView
                                onPress={() => handleOnChangeGroup(item.id)}
                                item={item}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={HeaderFlatList}
                        ListFooterComponent={FooterFlatList}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    contentBody: {
        marginHorizontal: 24,
    },
})
