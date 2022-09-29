import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
    FooterFlatList,
    HeaderFlatList,
    HeaderSlide,
    ListCommunityView,
} from '@components'
import { RootState } from '@redux'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import { getGroup } from '@redux/slices/homeSlice'

const loadingSelector = (state: RootState) => state.auth.loading
const listGroupSelector = (state: RootState) => state.home.groups

export default function HomeScreen() {
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
                    <HeaderSlide title="Others" />

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
