import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess, modalHandle } from '../../redux/slices/authSlice'
import { hideModal } from '../../redux/slices/homeSlice'
import { ButtonHaft, TitleModal } from '@components'
import { BORDER, COLORS } from '@theme'
import { RootState } from '@redux'

interface baseModalProps {
    onPress?: () => void
    primary?: boolean
    title?: string
    label?: string
}

const showModalSelector = (state: RootState) => state.auth.showModal

const BaseModal = ({ primary, title, label }: baseModalProps) => {
    const dispatch = useDispatch()

    const showModal = useSelector(showModalSelector)

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
                    <ButtonHaft
                        label={label}
                        primary
                        onPress={handelConfirmLogout}
                    />
                    <View style={{ width: '10%' }}></View>
                    <ButtonHaft
                        tertiary
                        label="Cancel"
                        onPress={handelCancelLogout}
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
        justifyContent: 'space-between',
        marginHorizontal: 24,
    },
    btnLogout: {
        alignItems: 'center',
        backgroundColor: COLORS.Primary,
        width: '45%',
        borderRadius: BORDER.base,
    },
    btnLogoutTxt: {
        paddingVertical: 16,
        color: COLORS.Neutral0,
        fontWeight: '600',
    },
    btnCancel: {
        alignItems: 'center',
        backgroundColor: COLORS.Neutral0,
        width: '45%',
    },
    btnCancelTxt: {
        paddingVertical: 16,

        fontWeight: '600',
    },
})
