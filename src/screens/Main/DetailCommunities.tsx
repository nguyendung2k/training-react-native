import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { IConBack, IconInfo, IconSearch } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import Banner from '../../components/Banner/Banner'
import { SafeAreaView } from 'react-native-safe-area-context'
import BannerForum from '../../components/Banner/BannerForum'
import HeaderSlide from '../../components/Header/HeaderSlide'
import InputSearch from '../../components/Input/InputSearch'
import ConditionModal from '../../components/Modal/ConditionModal'
import ListMember from '../../components/ListView/ListMember'

import { useDispatch, useSelector } from 'react-redux'
import {
    changeStatusJoinGroup,
    filterMemberByCondition,
    getDataMember,
    searchMemberByTitle,
    showModal,
} from '../../redux/slices/homeSlice'

const dataMemberSelector = (state: any) => state.home.members
const showConditionModal = (state: any) => state.home.modal
const statusJoinGroup = (state: any) => state.home.joinGroupStatus

const DetailCommunities = ({ navigation }: any) => {
    const dispatch = useDispatch()
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
        minHeight: 650,
    },
})
