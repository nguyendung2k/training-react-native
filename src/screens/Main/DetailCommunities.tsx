import { StyleSheet, Text, View, ScrollView } from 'react-native'
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

import { MEMBERS } from '../../assets/constants/members'
import { GROUPS } from '../../assets/constants/groups'

interface detailProps {
    status?: boolean
    checkBox?: boolean
}

const DetailCommunities = ({ navigation }: any) => {
    let dataSearch

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(false)
    const [valueInput, setValueInput] = useState<string>('')
    const [showResultByCondition, setShowResultByCondition] = useState(false)
    const [searchUserByCondition, setSearchUserByCondition] = useState(MEMBERS)

    useEffect(() => {}, [])

    const handleApplyCondition = (
        valueAgeMin: string,
        valueAgeMax: string,
        valueGender: string
    ) => {
        const resultCondition = {
            valueAgeMax: valueAgeMax,
            valueAgeMin: valueAgeMin,
            valueGender: valueGender,
        }
        const resultCheckCondition = MEMBERS.filter((item) => {
            return (
                item.gender === resultCondition.valueGender &&
                item.age >= resultCondition.valueAgeMin &&
                item.age <= resultCondition.valueAgeMax
            )
        })

        console.log(resultCheckCondition)
        console.log(showResultByCondition)
        setShowResultByCondition(true)
        // setOpenModal(false)
        setSearchUserByCondition(resultCheckCondition)
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleChangeStatus = () => {
        setStatus(!status)
    }

    const handleChangeValueInputSearch = (value: string) => {
        setValueInput(value)
    }

    {
        valueInput === ''
            ? (dataSearch = MEMBERS)
            : (dataSearch = MEMBERS.filter((data) => {
                  return data.name.includes(valueInput)
              }))
    }

    return (
        <SafeAreaView style={styles.container}>
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
                    value={valueInput}
                    onPress={() => {
                        handleOpenModal()
                    }}
                    onChangeText={handleChangeValueInputSearch}
                />

                <View style={styles.content}>
                    <View style={styles.modal}>
                        {openModal && (
                            <ConditionModal onPress={handleApplyCondition} />
                        )}
                    </View>

                    <View style={styles.listMember}>
                        {dataSearch.map((item, index) => (
                            <ListMember data={item} key={index} />
                        ))}
                    </View>
                </View>
            </ScrollView>
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
    listMember: {},
})
