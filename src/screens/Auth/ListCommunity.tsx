import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonForm, HeaderAuth, ListCommunityView } from '@components'
import { useNavigation } from '@react-navigation/native'
import { stackScreenProp } from '@navigation/type'

const ListCommunity = () => {
    const navigation = useNavigation<stackScreenProp>()
    return (
        <SafeAreaView style={styles.container}>
            <HeaderAuth
                title="Getting started"
                description="Join your communities"
                number="2"
                txtContent="Choose communities you prefer"
                txtEnd="(Up to 3 communities - 0/3)"
            />
            <ScrollView
                contentContainerStyle={styles.listView}
                showsVerticalScrollIndicator={false}
            >
                <ListCommunityView
                    showBox={true}
                    title="Movies"
                    number="20335"
                    members="members"
                />
            </ScrollView>

            <View style={styles.btn}>
                <View style={styles.content}>
                    <ButtonForm
                        label="Next"
                        // disabled={true}
                        disable
                        onPress={() => navigation.navigate('RegisterEnd')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ListCommunity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    },
    listView: {
        zIndex: 100,
    },
    btn: {
        zIndex: 1,
        paddingTop: 32,
        paddingBottom: 72,
        width: '100%',
    },
    content: {
        marginHorizontal: 24,
    },
})
