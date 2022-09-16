import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/constants/theme'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import CardBlockList from '../../components/Card/CardBlockList'

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
