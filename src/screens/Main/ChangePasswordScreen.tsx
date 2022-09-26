import React from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import { Header, IConBack, Input } from '@components'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'
import { accountScreenProp } from '@navigation/Main/AccountStack'

const ChangePasswordScreen = () => {
    const navigation = useNavigation<accountScreenProp>()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    showTextHeader
                    showRightIcon
                    title="Update Profile"
                    onPress={() => navigation.navigate('AccountScreen')}
                />
            </View>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputBlock}>
                    <Input
                        title="Current password"
                        primary
                        secureTextEntry
                        value="12345"
                        isPassword
                    />
                    <Input
                        title="New password"
                        primary
                        secureTextEntry
                        value="12345"
                        isPassword
                    />
                    <Input
                        title="Confirm new password"
                        primary
                        secureTextEntry
                        value="12345"
                        isPassword
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePasswordScreen

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
    inputBlock: {
        marginTop: 48,
    },
})
