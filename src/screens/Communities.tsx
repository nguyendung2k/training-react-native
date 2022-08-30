import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import InputSearch from '../components/Input/InputSearch'
import IconSearch from '../assets/icons/IconSearch.svg'
import { GROUPS } from '../assets/constants/groups'
import { renderListView } from '../components/ListView/ListView'

const Communities = () => {
    const [textInput, setTextInput] = useState<string>('')
    const [groupData, setGroupData] = useState(GROUPS)

    let searchData: any[] = []

    const handleSearch = () => {
        const filteredData = GROUPS.filter((item) => {
            return item.title.includes(textInput)
        })
        setGroupData(filteredData)
        // console.log(textInput)
    }

    return (
        <View style={styles.container}>
            <Header title="Communities" showTextHeader={true} />
            <View>
                <InputSearch
                    placeholder="Find a community"
                    Icon={() => <IconSearch />}
                    value={textInput}
                    onChangeText={setTextInput}
                    onPress={handleSearch}
                />
            </View>

            <View style={styles.content}>
                <FlatList data={groupData} renderItem={renderListView} />
            </View>
        </View>
    )
}

export default Communities

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    content: {},
})
