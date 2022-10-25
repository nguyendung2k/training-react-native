import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { BORDER, COLORS, SIZES } from '@theme'
import { logoutSuccess, modalHandle, RootState } from '@redux'

import { ButtonComponent } from '@components/Button'
import TitleModal from './TitleModal'

interface baseModalProps {
    onPress?: () => void
    primary?: boolean
    title?: string
    label: string
}

const BaseModal = ({ primary, title, label }: baseModalProps) => {
    const dispatch = useDispatch()

    const handelConfirmLogout = () => {
        dispatch(modalHandle(false))
        dispatch(logoutSuccess())
    }

    const handelCancelLogout = () => {
        dispatch(modalHandle(false))
    }

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <TitleModal title={title} />
            </View>
            <View style={styles.content}>
                <View style={styles.btn}>
                    <ButtonComponent
                        label={label}
                        onPress={handelConfirmLogout}
                        styleBtn={styles.btnConfirm}
                        styleText={styles.txtBtnConfirm}
                    />
                    <ButtonComponent
                        label="Cancel"
                        onPress={handelCancelLogout}
                        styleBtn={styles.btnCancel}
                        styleText={styles.txtBtnCancel}
                    />
                </View>
            </View>
        </View>
    )
}

export default BaseModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Neutral0,
        borderRadius: BORDER.base,
        width: 300,
        height: 251,
    },
    content: {
        marginTop: 38,
    },
    text: {
        marginTop: 67,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 24,
        marginTop: 26,
    },
    btnCancel: {
        borderWidth: 1,
        borderColor: COLORS.Neutral6,
        backgroundColor: COLORS.Neutral0,
        alignItems: 'center',
        borderRadius: BORDER.base,
        paddingVertical: 16,
        paddingHorizontal: 26,
    },
    txtBtnCancel: {
        color: COLORS.Neutral6,
        fontSize: SIZES.medium,
        fontWeight: '600',
        textAlign: 'center',
    },
    btnCancelTxt: {
        paddingVertical: 16,
        fontWeight: '600',
    },
    btnConfirm: {
        paddingVertical: 16,
        borderRadius: BORDER.base,
        backgroundColor: COLORS.Primary,
        paddingHorizontal: 26,
    },
    txtBtnConfirm: {
        color: COLORS.Neutral0,
        fontSize: SIZES.medium,
        fontWeight: '600',
        textAlign: 'center',
    },
})
