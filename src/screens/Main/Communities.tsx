import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import InputSearch from '../../components/Input/InputSearch'
import { GROUPS } from '../../assets/constants/groups'
import ListView from '../../components/ListView/ListView'
import { COLORS } from '../../assets/constants/theme'

const Communities = ({ navigation }: any) => {
    const [textInput, setTextInput] = useState<string>('')
    const [groupData, setGroupData] = useState(GROUPS)

    const handleSearch = () => {
        const filteredData = GROUPS.filter((item) => {
            return item.title.includes(textInput)
        })
        setGroupData(filteredData)
        // console.log(textInput)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerBody}>
                <Header title="Communities" showTextHeader={true} />
                <View>
                    <InputSearch
                        placeholder="Find a community"
                        value={textInput}
                        onChangeText={setTextInput}
                        onPress={handleSearch}
                    />
                </View>

                <View style={styles.content}>
                    <FlatList
                        data={groupData}
                        renderItem={({ item }) => (
                            <ListView
                                onPress={() =>
                                    navigation.navigate('DetailCommunities')
                                }
                                item={item}
                            />
                        )}
                    />
                </View>
            </View>
        </View>
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
    content: {},
})
