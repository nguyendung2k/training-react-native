import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
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

interface detailProps {
    status?: boolean
}

const DetailCommunities = ({ navigation }: any) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(false)

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleChangeStatus = () => {
        // console.log('status', status)
        setStatus(!status)
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
                    onPress={handleChangeStatus}
                />

                <HeaderSlide title="Members" />
                <InputSearch
                    Icon={() => <IconSearch />}
                    placeholder="Search by Name"
                    secondary
                    onPress={handleOpenModal}
                />
                <View style={styles.content}>
                    <View style={styles.modal}>
                        {openModal && <ConditionModal />}
                    </View>
                    <View style={styles.listMember}>
                        <ListMember />
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
