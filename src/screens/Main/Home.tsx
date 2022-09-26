import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getGroup, getGroupById } from '../../redux/slices/homeSlice'

import { useNavigation } from '@react-navigation/native'
import ListCommunityView from '../../components/ListView/ListCommunityView'
import { FooterFlatList, HeaderFlatList } from '@components'
import { COLORS } from '@assets/constants'
import { RootState } from '@redux/store'
import { stackScreenProp } from '@navigation/type'

const loadingSelector = (state: RootState) => state.auth.loading
const listGroupSelector = (state: RootState) => state.home.groups

export default function Home() {
    const dispatch = useDispatch()
    // const loading = useSelector(loadingSelector)
    const navigation = useNavigation<stackScreenProp>()
    const listGroup = useSelector(listGroupSelector)

    useEffect(() => {
        dispatch(getGroup())
    }, [])

    const handleOnChangeGroup = (id: { id: string }) => {
        navigation.navigate('DetailCommunities', id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentBody}>
                <View>
                    <FlatList
                        data={listGroup}
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
