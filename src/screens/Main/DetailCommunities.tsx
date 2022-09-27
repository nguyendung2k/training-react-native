import {
    StyleSheet,
    View,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    Banner,
    BannerForum,
    ConditionModal,
    Header,
    HeaderSlide,
    IConBack,
    IconInfo,
    IconSearch,
    InputSearch,
    ListMember,
} from '@components'
import { useNavigation } from '@react-navigation/native'
import { AppDispatch, RootState } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import {
    changeStatusJoinGroup,
    filterMemberByCondition,
    getDataMember,
    searchMemberByTitle,
    showModal,
} from '@redux/slices/homeSlice'

const dataMemberSelector = (state: RootState) => state.home.members
const showConditionModal = (state: RootState) => state.home.modal
const statusJoinGroup = (state: RootState) => state.home.joinGroupStatus

const DetailCommunities = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<stackScreenProp>()
    const statusJoin = useSelector(statusJoinGroup)

    const [textValue, setTextValue] = useState('')

    useEffect(() => {
        dispatch(getDataMember())
    }, [])

    const member = useSelector(dataMemberSelector)

    const modal = useSelector(showConditionModal)

    const handleShowOrHideModalCondition = () => {
        dispatch(showModal({ showModal: !modal.showModal }))
    }

    const handleChangeStatus = () => {
        dispatch(changeStatusJoinGroup(!statusJoin))
    }

    const handleChangeValueInputSearch = (value: string) => {
        setTextValue(value)
        dispatch(searchMemberByTitle(value))
    }

    const handleFilter = (
        ageMin: string,
        ageMax: string,
        statusGender: boolean
    ) => {
        if (!ageMin && !ageMax && !statusGender) return
        dispatch(filterMemberByCondition({ ageMin, ageMax, statusGender }))
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                // keyboardVerticalOffset={10}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.body}
                >
                    <Header
                        onPress={() => navigation.navigate('Home')}
                        Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    />
                    <Banner status={statusJoin} onPress={handleChangeStatus} />

                    <BannerForum
                        title="Real-time Forum"
                        des="Join now to give real-time PR about yourself"
                        Icon={() => <IconInfo stroke={COLORS.Primary} />}
                        status={statusJoin}
                        onPress={() => {
                            handleChangeStatus()
                        }}
                        onDirection={() => navigation.navigate('ForumScreen')}
                    />

                    <HeaderSlide title="Members" />

                    <InputSearch
                        Icon={() => <IconSearch />}
                        placeholder="Search by Name"
                        secondary
                        value={textValue}
                        onPress={handleShowOrHideModalCondition}
                        onChangeText={handleChangeValueInputSearch}
                    />

                    <View style={styles.content}>
                        <View style={styles.modal}>
                            {modal.showModal && (
                                <ConditionModal onPress={handleFilter} />
                            )}
                        </View>

                        <View style={styles.listMember}>
                            {member.map((item: any, index: any) => (
                                <ListMember data={item} key={index} />
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default DetailCommunities

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Neutral0,
    },
    body: {
        marginHorizontal: 24,
    },
    content: {
        position: 'relative',
    },
    modal: {
        position: 'absolute',
        zIndex: 100,
    },
    listMember: {
        marginBottom: 60,
        marginTop: 24,
        minHeight: 650,
    },
})
