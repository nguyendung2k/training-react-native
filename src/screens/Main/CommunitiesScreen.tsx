import { FlatList, StyleSheet, View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, IconSearch, InputSearch, ListCommunityView } from '@components'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'
import { RootState, searchGroupByValue } from '@redux'
import { CommunitiesScreenProp } from '@navigation/type'

const dataGroupSelector = (state: RootState) => state.group.groups

const CommunitiesScreen = () => {
    const dispatch = useDispatch()
    const navigation =
        useNavigation<
            CommunitiesScreenProp<'CommunitiesStackScreen'>['navigation']
        >()
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

                {dataGroup.length > 0 ? (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dataGroup}
                        renderItem={({ item }) => (
                            <ListCommunityView
                                onPress={handleOnChangeGroup}
                                item={item}
                            />
                        )}
                    />
                ) : (
                    <View
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ color: 'red' }}>Data Not Found!!!</Text>
                    </View>
                )}
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
