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
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppDispatch, RootState } from '@redux/store'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import {
    filterMemberByCondition,
    getDataMember,
    searchMemberByTitle,
    showModal,
} from '@redux/slices/homeSlice'
import { changeAttendGroup, changeLeavingGroup } from '@redux/slices/groupSlice'

const dataMemberSelector = (state: RootState) => state.home.members
const showConditionModal = (state: RootState) => state.home.modal
const dataGroupSelector = (state: RootState) => state.group.groups
// const statusJoinGroup = (state: RootState) => state.group.joinGroupStatus

const DetailCommunities = () => {
    const dispatch = useDispatch<AppDispatch>()
    const idParamDetail = useRoute().params
    const navigation = useNavigation<stackScreenProp>()
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

    const handleLeavingGroup = (id: any) => {
        const copyDataGroup = [...dataGroup]
        copyDataGroup.forEach((item, index) => {
            if (item.id == id) {
                copyDataGroup[index] = {
                    ...copyDataGroup[index],
                    joinGr: false,
                }
            }
        })
        dispatch(changeLeavingGroup({ copyDataGroup, id }))
    }

    const handleParticipateGroup = (id: any) => {
        const copyDataGroup = [...dataGroup]
        copyDataGroup.forEach((item, index) => {
            if (item.id == id) {
                copyDataGroup[index] = {
                    ...copyDataGroup[index],
                    joinGr: true,
                }
            }
        })
        dispatch(changeAttendGroup({ copyDataGroup, id }))
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
                <View style={styles.header}>
                    <Header
                        onPress={() => navigation.navigate('HomeScreen')}
                        Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.body}
                >
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
    header: {
        marginHorizontal: 10,
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
