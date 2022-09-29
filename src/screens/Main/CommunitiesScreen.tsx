import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, IconSearch, InputSearch, ListCommunityView } from '@components'
import { useNavigation } from '@react-navigation/native'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import { RootState } from '@redux'
import { searchGroupByValue } from '@redux/slices/groupSlice'

const dataGroupSelector = (state: RootState) => state.group.groups

const CommunitiesScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const dataGroup = useSelector(dataGroupSelector)
    const [textInput, setTextInput] = useState('')

    const handleSearchByTitle = (value: string) => {
        setTextInput(value)
        dispatch(searchGroupByValue(value))
    }

    const handleOnChangeGroup = (id: { id: string }) => {
        navigation.navigate('DetailCommunities', id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerBody}>
                <Header title="Communities" showTextHeader={true} primary />
                <InputSearch
                    placeholder="Find a community"
                    value={textInput}
                    onChangeText={handleSearchByTitle}
                    Icon={() => <IconSearch />}
                />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataGroup}
                    renderItem={({ item }) => (
                        <ListCommunityView
                            onPress={() => handleOnChangeGroup(item.id)}
                            item={item}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default CommunitiesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
        flex: 1,
    },
    containerBody: {
        paddingHorizontal: 20,
        flex: 1,
    },
})
