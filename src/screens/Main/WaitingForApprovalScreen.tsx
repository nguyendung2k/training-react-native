import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    Header,
    IConBack,
    IconCheckCircle,
    IconMinusCircle,
    NotificationModal,
    WaitingFormRequest,
} from '@components'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'

const requests = [
    {
        id: 1,
        name: 'Annette Black',
        dataRequest: 'last week',
        quantityFollow: '1',
    },
    {
        id: 2,
        name: 'Jenny Wilson',
        dataRequest: '7 days ago',
        quantityFollow: '2',
    },
    {
        id: 3,
        name: 'Cody Fisher',
        dataRequest: '7 days ago',
        quantityFollow: '3',
    },
    {
        id: 4,
        name: 'Cody Fisher',
        dataRequest: '7 days ago',
        quantityFollow: '4',
    },
]

const notice = [
    {
        id: 1,
        notice: '',
    },
]

const WaitingForApprovalScreen = () => {
    const navigation = useNavigation()
    const [showNoticeAccept, setShowNoticeAccept] = useState<boolean>(false)
    const [showNoticeReject, setShowNoticeReject] = useState(false)
    const [dataRequests, setDataRequests] = useState<any[]>(requests)
    const [noticesAccept, setNoticesAccept] = useState<any[]>(notice)
    const [noticesReject, setNoticesReject] = useState<any[]>(notice)

    useEffect(() => {
        setTimeout(() => {
            setShowNoticeAccept(false)
        }, 5000)
    }, [showNoticeAccept])

    useEffect(() => {
        setTimeout(() => {
            setShowNoticeReject(false)
        }, 5000)
    }, [showNoticeReject])

    const handleAcceptRequest = (item: any) => {
        let index = dataRequests.indexOf(item)
        setDataRequests([
            ...dataRequests.slice(0, index),
            ...dataRequests.slice(index + 1),
        ])
        setShowNoticeAccept(true)
        setNoticesAccept(
            noticesAccept.concat([
                {
                    id: Math.random(),
                    notice: (
                        <NotificationModal
                            name="Jenny Wilson"
                            ICon={() => (
                                <IconCheckCircle fill={COLORS.Primary} />
                            )}
                            onPress={() => setShowNoticeAccept(false)}
                        />
                    ),
                },
            ])
        )
    }

    const handleRejectRequest = (item: any) => {
        let index = dataRequests.indexOf(item)
        setDataRequests([
            ...dataRequests.slice(0, index),
            ...dataRequests.slice(index + 1),
        ])
        setShowNoticeReject(true)
        setNoticesReject(
            noticesReject.concat([
                {
                    id: Math.random(),
                    notice: (
                        <NotificationModal
                            name=" Jenny Wilson Official "
                            ICon={() => (
                                <IconMinusCircle fill={COLORS.Neutral4} />
                            )}
                            onPress={() => setShowNoticeReject(false)}
                        />
                    ),
                },
            ])
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notificationRequest}>
                {showNoticeAccept && (
                    <View>
                        {noticesAccept.map((item) => {
                            return <View key={item.id}>{item.notice}</View>
                        })}
                    </View>
                )}

                {showNoticeReject && (
                    <View>
                        {noticesReject.map((item) => {
                            return <View key={item.id}>{item.notice}</View>
                        })}
                    </View>
                )}
            </View>
            <View style={styles.header}>
                <Header
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    showTextHeader
                    showRightIcon
                    title="Waiting for approval"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
            >
                <View>
                    {dataRequests.map((item) => {
                        return (
                            <WaitingFormRequest
                                key={item.id}
                                name={item?.name}
                                dateRequest={item?.dateRequest}
                                quantityFollow={item?.quantityFollow}
                                primary
                                onAccept={() => handleAcceptRequest(item)}
                                onReject={() => handleRejectRequest(item)}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WaitingForApprovalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    content: {
        marginHorizontal: 24,
    },
    header: {
        marginBottom: 37,
        marginHorizontal: 20,
    },
    notificationRequest: {
        position: 'absolute',
        top: 15,
        left: 18,
        zIndex: 100,
    },
})
