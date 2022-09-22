import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import InputSearch from '../../components/Input/InputSearch'
import { GROUPS } from '../../assets/constants/groups'
import ListView from '../../components/ListView/ListView'
import { COLORS } from '../../assets/constants/theme'
import { IconSearch } from '../../components/Svg/Icon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { getGroup, searchGroupByTitle } from '../../redux/slices/homeSlice'

const listGroupSelector = (state: any) => state.home.groups

const Communities = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const listGroup = useSelector(listGroupSelector)

    useEffect(() => {
        dispatch(getGroup())
    }, [])

    const [textInput, setTextInput] = useState('')

    const handleSearchByTitle = (value: string) => {
        setTextInput(value)
        dispatch(searchGroupByTitle(value))
    }

    const handleOnChangeGroup = (id: any) => {
        dispatch(getGroup(id))
        navigation.navigate('DetailCommunities')
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
                            <ListView
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
        marginBottom: 410,
    },
})
