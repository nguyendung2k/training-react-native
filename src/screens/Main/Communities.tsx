import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, IconSearch, InputSearch, ListCommunityView } from '@components'
import { useNavigation } from '@react-navigation/native'
import { RootState } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import { getGroup, searchGroupByTitle } from '@redux/slices/homeSlice'

const Communities = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const listGroup = useSelector((state: RootState) => state.home.groups)

    useEffect(() => {
        dispatch(getGroup())
    }, [])

    const [textInput, setTextInput] = useState('')

    const handleSearchByTitle = (value: string) => {
        setTextInput(value)
        dispatch(searchGroupByTitle(value))
    }

    const handleOnChangeGroup = (id: { id: string }) => {
        dispatch(getGroup(id))
        navigation.navigate('DetailCommunities', id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerBody}>
                <Header title="Communities" showTextHeader={true} primary />
                <View>
                    <InputSearch
                        placeholder="Find a community"
                        value={textInput}
                        onChangeText={handleSearchByTitle}
                        Icon={() => <IconSearch />}
                    />
                </View>

                <View style={styles.content}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={listGroup}
                        renderItem={({ item }) => (
                            <ListCommunityView
                                onPress={() => handleOnChangeGroup(item.id)}
                                item={item}
                            />
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Communities

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
    },
    containerBody: {
        paddingHorizontal: 20,
    },
    content: {
        // marginBottom: 410,
    },
})
