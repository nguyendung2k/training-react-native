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
    filterMemberByCondition,
    getDataMember,
    hideModal,
    searchMemberByTitle,
    showModal,
} from '../../redux/slices/homeSlice'
import { apiMember } from '../../services/members'

const dataMemberSelector = (state: any) => state.home.members
const showConditionModal = (state: any) => state.home.modal
// const dataFilterSelector = (state: any) => state.home.memberFilter

const valueAgeMinSelector = (state: any) => state.filters.age.from
const valueAgeMaxSelector = (state: any) => state.filters.age.to
const valueStatusGender = (state: any) => state.filters.statusGender

const DetailCommunities = ({ navigation }: any) => {
    console.log({ navigation })
    const dispatch = useDispatch()

    const [textValue, setTextValue] = useState('')
    const [status, setStatus] = useState<boolean>(false)

    const ageMin = useSelector(valueAgeMinSelector)
    const ageMax = useSelector(valueAgeMaxSelector)
    const statusGender = useSelector(valueStatusGender)
    // const dataFilter = useSelector(dataFilterSelector)

    useEffect(() => {
        dispatch(getDataMember())
    }, [])

    const member = useSelector(dataMemberSelector)

    // console.log('memberGoc', member)
    // console.log('memberFilter', member)

    const modal = useSelector(showConditionModal)

    const handleShowOrHideModalCondition = () => {
        dispatch(showModal({ showModal: !modal.showModal }))
    }

    const handleChangeStatus = () => {
        setStatus(!status)
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
                    <Banner status={status} onPress={handleChangeStatus} />

                    <BannerForum
                        title="Real-time Forum"
                        des="Join now to give real-time PR about yourself"
                        Icon={() => <IconInfo stroke={COLORS.Primary} />}
                        status={status}
                        onPress={() => {
                            handleChangeStatus()
                        }}
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
