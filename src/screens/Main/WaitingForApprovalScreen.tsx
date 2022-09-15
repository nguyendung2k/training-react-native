import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import {
    IConBack,
    IconCheckCircle,
    IconMinusCircle,
} from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'

import NotificationModal from '../../components/Modal/NotificationModal'
import WaitingFormRequest from '../../components/FormRequest/WaitingFormRequest'

const WaitingForApprovalScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notificationRequest}>
                <NotificationModal
                    name=" Jenny Wilson Official "
                    ICon={() => <IconCheckCircle fill={COLORS.Primary} />}
                />
                <NotificationModal
                    name=" Jenny Wilson Official "
                    ICon={() => <IconMinusCircle fill={COLORS.Neutral4} />}
                />
            </View>
            <View style={styles.header}>
                <Header
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    showTextHeader
                    showRightIcon
                    title="Waiting for approval"
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
            >
                <View>
                    <WaitingFormRequest
                        name="Annette Black"
                        dateRequest="2 days ago"
                        quantityFollow="2050"
                        primary
                    />
                    <WaitingFormRequest
                        name="Jenny Wilson"
                        dateRequest="Last week"
                        quantityFollow="1234"
                        primary
                    />
                    <WaitingFormRequest
                        name="Cody Fisher"
                        dateRequest="Last month"
                        quantityFollow="1234"
                        primary
                    />
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
    },
    notificationRequest: {
        position: 'absolute',
        top: 15,
        left: 18,
        zIndex: 100,
    },
})
