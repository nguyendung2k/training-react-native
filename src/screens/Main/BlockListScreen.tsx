import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/constants/theme'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import CardBlockList from '../../components/Card/CardBlockList'

const dataBlockUser = [
    {
        id: 1,
        name: 'Annette Black',
    },
    {
        id: 2,
        name: 'Jenny Wilson',
    },
    {
        id: 3,
        name: 'Annette Black',
    },
    {
        id: 4,
        name: 'Annette Black',
    },
]

const BlockListScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    showTextHeader
                    showRightIcon
                    title="Update Profile"
                    onPress={() => navigation.navigate('Account')}
                />
            </View>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <CardBlockList name="Jerome Bell" />
                <CardBlockList name="Ronald Richards" />
                <CardBlockList name="Ralph Edwards" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default BlockListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        marginHorizontal: 24,
    },
    content: {
        marginHorizontal: 24,
    },
})
