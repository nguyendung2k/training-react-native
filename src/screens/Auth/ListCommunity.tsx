import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React, { useState } from 'react'
import { ButtonForm, HeaderAuth, ListCommunityView } from '@components'
import { useNavigation } from '@react-navigation/native'
import { RootState } from '@redux'
import { useSelector } from 'react-redux'

const listGroupSelector = (state: RootState) => state.group.groups

export const Header = () => {
    return (
        <SafeAreaView>
            <HeaderAuth
                title="Getting started"
                description="Join your communities"
                number="2"
                txtContent="Choose communities you prefer"
                txtEnd="(Up to 3 communities - 0/3)"
            />
        </SafeAreaView>
    )
}

export const Footer = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={styles.btn}>
            <ButtonForm
                label="Next"
                // disabled={true}
                disable
                onPress={() => navigation.navigate('RegisterEnd')}
            />
        </View>
    )
}

const ListCommunity = () => {
    const listGroup = useSelector(listGroupSelector)
    const [checkBox, setCheckBox] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listGroup}
                renderItem={({ item }) => (
                    <ListCommunityView
                        onPress={() => setCheckBox(!checkBox)}
                        item={item}
                        showBox={true}
                        check={checkBox}
                    />
                )}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default ListCommunity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    },
    btn: {
        marginTop: 'auto',
        marginBottom: 30,
    },
})
