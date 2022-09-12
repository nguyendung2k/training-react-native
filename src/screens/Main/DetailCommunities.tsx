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
    // handleFilterByCondition,
    hideModal,
    setFilter,
    showModal,
} from '../../redux/slices/homeSlice'
import { membersRemainingSelector } from '../../redux/selectors'
import { searchFilterChange } from '../../redux/slices/filterSlice'

const showConditionModal = (state: any) => state.home.modal.showModal
const dataMembers = (state: any) => state.home.members

const valueAgeMinSelector = (state: any) => state.home.filter.valueAgeMin
const valueAgeMaxSelector = (state: any) => state.home.filter.valueAgeMax
const valueGenderSelector = (state: any) => state.home.filter.valueGender

const DetailCommunities = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const memberList = useSelector(membersRemainingSelector)
    const modal = useSelector(showConditionModal)

    const ageMin = useSelector(valueAgeMinSelector)
    const ageMax = useSelector(valueAgeMaxSelector)
    const gender = useSelector(valueGenderSelector)

    const [textValue, setTextValue] = useState('')
    const [status, setStatus] = useState<boolean>(false)

    // console.log('re-render')

    const handleShowOrHideModalCondition = () => {
        dispatch(showModal({ showModal: !modal }))
    }

    const handleChangeStatus = () => {
        setStatus(!status)
    }

    const handleChangeValueInputSearch = (value: string) => {
        setTextValue(value)
        dispatch(searchFilterChange(value))
    }

    // console.log('valueInput', filter.searchValue)

    const handleFilter = (
        ageMin: string,
        ageMax: string,
        valueGender: string
    ) => {
        // dispatch(handleFilterByCondition({}))
        dispatch(
            setFilter({
                valueAgeMin: ageMin,
                valueAgeMax: ageMax,
                valueGender: valueGender,
            })
        )
        // dispatch(hideModal())
    }

    // console.log(filter.searchValue)

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
                            {modal && <ConditionModal onPress={handleFilter} />}
                        </View>

                        <View style={styles.listMember}>
                            {memberList.map((item: any, index: any) => (
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
        height: 650,
    },
})
