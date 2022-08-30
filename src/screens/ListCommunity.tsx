import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderAuth from '../components/Header/HeaderAuth'
import { ListView } from '../components/ListView/ListView'
import ButtonForm from '../components/Button/ButtonForm'
import ArrowRightDisable from '../assets/icons/ArrowRightDisable.svg'

const ListCommunity = ({ navigation }: any) => {
    return (
        <>
            <View style={styles.container}>
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
                    <ListView
                        showBox={true}
                        title="Movies"
                        number="20335"
                        members="members"
                    />
                </ScrollView>
            </View>
            <View style={styles.btn}>
                <View style={styles.content}>
                    <ButtonForm
                        label="Next"
                        // disabled={true}
                        disable
                        Icon={() => <ArrowRightDisable />}
                        onPress={() => navigation.navigate('RegisterEnd')}
                    />
                </View>
            </View>
        </>
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
