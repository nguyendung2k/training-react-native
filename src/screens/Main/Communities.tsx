import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import InputSearch from '../../components/Input/InputSearch'
import { GROUPS } from '../../assets/constants/groups'
import ListView from '../../components/ListView/ListView'
import { COLORS } from '../../assets/constants/theme'
import { IconSearch } from '../../components/Svg/Icon'
import { SafeAreaView } from 'react-native-safe-area-context'

const Communities = ({ navigation }: any) => {
    const [textInput, setTextInput] = useState('')
    const [groupData, setGroupData] = useState(GROUPS)
    const [showResultFilter, setShowResultFilter] = useState(true)

    useEffect(() => {
        console.log('textInput: ', textInput)
        const filteredData = GROUPS.filter((item) => {
            return item.title.includes(textInput)
        })
        setGroupData(filteredData)
        setShowResultFilter(true)
    }, [textInput])

    const handleSearchByTitle = (value: string) => {
        setTextInput(value)
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
                        data={showResultFilter ? groupData : GROUPS}
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
