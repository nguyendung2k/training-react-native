import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { FooterFlatList, HeaderFlatList, ListCommunityView } from '@components'
import { RootState } from '@redux'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'

const listGroupSelector = (state: RootState) => state.group.groups

export default function HomeScreen() {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const [groupNotJoin, setGroupNotJoin] = useState<any[]>([])
    const listGroup = useSelector(listGroupSelector)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        filterGroupNotJoin()
    }, [listGroup])

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
        }, 2000)
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

    // console.log('listGrNotJoin  : ', groupNotJoin)

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={COLORS.Primary} />
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
