import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import CardInfo from '../../components/Card/Card'
import { COLORS } from '../../assets/constants/theme'
import ButtonAccountMenu from '../../components/Button/ButtonAccountMenu'
import {
    IconLockKeyOpen,
    IconProhibit,
    IconSignOut,
    IconUserCircle,
    IconWarning,
} from '../../components/Svg/Icon'
import ButtonForm from '../../components/Button/ButtonForm'
import BaseModal from '../../components/Modal/BaseModal'

const Account = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Header title="Account" showTextHeader primary />
                </View>
                <View>
                    <CardInfo />
                </View>
                <View style={styles.btn}>
                    <ButtonAccountMenu
                        label="Your profile"
                        Icon={() => (
                            <IconUserCircle stroke={COLORS.Neutral10} />
                        )}
                        onPress={() => navigation.navigate('YourProfileScreen')}
                    />
                    <ButtonAccountMenu
                        label="Block List"
                        Icon={() => <IconProhibit stroke={COLORS.Neutral10} />}
                    />
                    <ButtonAccountMenu
                        label="Change password"
                        Icon={() => (
                            <IconLockKeyOpen stroke={COLORS.Neutral10} />
                        )}
                    />
                    <ButtonAccountMenu
                        label="Log out"
                        Icon={() => <IconSignOut stroke={COLORS.Neutral10} />}
                    />
                </View>

                <View style={styles.btnCancel}>
                    <ButtonForm
                        label="Cancel account"
                        quinary
                        Icon={() => <IconWarning stroke={COLORS.Semantic4} />}
                        onPress={() => console.log('click')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral0,
    },
    content: {
        marginHorizontal: 24,
    },
    btn: {
        marginBottom: 142,
    },
    btnCancel: {
        marginBottom: 55,
    },
})
