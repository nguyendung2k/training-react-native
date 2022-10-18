import {
    StyleSheet,
    View,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppDispatch, RootState } from '@redux/store'
import { COLORS } from '@theme'
import { DetailCommunityScreenProp } from '@navigation/type'
import {
    changeAttendGroup,
    changeLeavingGroup,
    filterMemberByCondition,
    getDataMember,
    searchMemberByTitle,
    showModal,
} from '@redux'
import { InputSearch } from '@components/Input'
import { ConditionModal } from '@components/Modal'
import { Header, HeaderSlide } from '@components/Header'
import { IConBack, IconInfo, IconSearch } from '@components/Svg'
import { Banner, BannerForum } from '@components/Banner'
import { ListMember } from '@components/ListView'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'

const dataMemberSelector = (state: RootState) => state.member.members
const showConditionModal = (state: RootState) => state.home.modal
const dataGroupSelector = (state: RootState) => state.group.groups

interface dataUser {
    id?: string
    first_name?: string
    last_name?: string
    full_name?: string
    age?: number
    gender?: boolean
    description?: string
    introduction?: string
    introduce_code?: number
    image?: string
    total_follow?: number
}

const DetailCommunities = () => {
    const dispatch = useDispatch<AppDispatch>()
    const idParamDetail = useRoute().params

    const navigation =
        useNavigation<DetailCommunityScreenProp<'HomeScreen'>['navigation']>()
    const dataGroup = useSelector(dataGroupSelector)
    const member = useSelector(dataMemberSelector)
    const modal = useSelector(showConditionModal)
    const [textValue, setTextValue] = useState<string>('')

    useEffect(() => {
        dispatch(getDataMember())
    }, [])

    const handleShowOrHideModalCondition = () => {
        dispatch(showModal({ showModal: !modal.showModal }))
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

    const HeaderFlatList = () => {
        const handleLeavingGroup = (id: any) => {
            const newDataGroup = [...dataGroup]
            newDataGroup.forEach((item, index) => {
                if (item.id == id) {
                    newDataGroup[index] = {
                        ...newDataGroup[index],
                        joinGr: false,
                        total_members: newDataGroup[index].total_members - 1,
                    }
                }
            })
            dispatch(changeLeavingGroup({ newDataGroup, id }))
        }

        const handleParticipateGroup = (id: any) => {
            const newDataGroup = [...dataGroup]
            newDataGroup.forEach((item, index) => {
                if (item.id == id) {
                    newDataGroup[index] = {
                        ...newDataGroup[index],
                        joinGr: true,
                        total_members: newDataGroup[index].total_members + 1,
                    }
                }
            })
            dispatch(changeAttendGroup({ newDataGroup, id }))
        }
        return (
            <>
                <Banner
                    onPressLeaving={() => handleLeavingGroup(idParamDetail)}
                    onPressParticipate={() =>
                        handleParticipateGroup(idParamDetail)
                    }
                />
                <BannerForum
                    title="Real-time Forum"
                    des="Join now to give real-time PR about yourself"
                    Icon={() => <IconInfo stroke={COLORS.Primary} />}
                    onDirection={() => navigation.navigate('ForumScreen')}
                />

                <HeaderSlide title="Members" />

                <View style={styles.input}>
                    <InputSearch
                        Icon={() => <IconSearch />}
                        placeholder="Search by Name"
                        secondary
                        value={textValue}
                        onPress={handleShowOrHideModalCondition}
                        onChangeText={handleChangeValueInputSearch}
                    />
                    <View style={styles.modal}>
                        {modal.showModal && (
                            <ConditionModal onPress={handleFilter} />
                        )}
                    </View>
                </View>
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.listMember}>
                    <View style={styles.header}>
                        <Header
                            onPress={() => navigation.goBack()}
                            Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                        />
                    </View>
                    <KeyboardAwareFlatList
                        showsVerticalScrollIndicator={false}
                        data={member}
                        renderItem={({ item }: any) => (
                            <ListMember item={item} />
                        )}
                        ListHeaderComponent={HeaderFlatList}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default DetailCommunities

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Neutral0,
    },
    header: {
        marginTop: -20,
    },
    content: {
        marginHorizontal: 24,
    },
    input: {
        marginBottom: 15,
    },
    modal: {
        marginTop: 10,
    },
    listMember: {
        marginTop: 30,
        zIndex: 1,
        minHeight: 650,
    },
})
