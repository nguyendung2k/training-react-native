import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'

import ListView from '../../components/ListView/ListView'

import { COLORS } from '../../assets/constants/theme'
import { GROUPS } from '../../assets/constants/groups'

import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderFlatList from '../../components/Header/HeaderFlatList'
import FooterFlatList from '../../components/Footer/FooterFlatList'

export default function Home({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentBody}>
                <View>
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
