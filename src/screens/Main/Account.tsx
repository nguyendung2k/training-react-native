import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React, { useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../redux/slices/homeSlice'

const showModalConfirm = (state: any) => state.home.modal.showModal

const Account = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const modal = useSelector(showModalConfirm)

    const handleShowModal = () => {
        dispatch(showModal({ showModal: true }))
    }

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
                    <CardInfo primary />
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
                        onPress={() => navigation.navigate('BlockListScreen')}
                    />
                    <ButtonAccountMenu
                        label="Change password"
                        Icon={() => (
                            <IconLockKeyOpen stroke={COLORS.Neutral10} />
                        )}
                        onPress={() =>
                            navigation.navigate('ChangePasswordScreen')
                        }
                    />
                    <ButtonAccountMenu
                        label="Log out"
                        Icon={() => <IconSignOut stroke={COLORS.Neutral10} />}
                        onPress={handleShowModal}
                    />
                </View>

                <View style={styles.btnCancel}>
                    <ButtonForm
                        label="Cancel account"
                        quinary
                        Icon={() => <IconWarning stroke={COLORS.Semantic4} />}
                    />
                </View>

                {modal ? (
                    <View style={styles.showModal}>
                        <BaseModal
                            title="Do you want to Log out?"
                            label="Log out"
                        />
                    </View>
                ) : null}
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
        position: 'relative',
    },
    btn: {
        marginBottom: 90,
    },
    btnCancel: {
        marginBottom: 55,
    },
    showModal: {
        position: 'absolute',
        top: '37%',
        left: '10%',
    },
})
