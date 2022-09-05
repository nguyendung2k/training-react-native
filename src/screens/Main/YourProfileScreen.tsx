import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import { COLORS } from '../../assets/constants/theme'
import CardInfo from '../../components/Card/Card'

const YourProfileScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <ImageBackground
                        style={styles.imageBg}
                        source={require('../../assets/images/Background3.png')}
                    >
                        <View style={styles.contentHeader}>
                            <Header
                                title="Your profile"
                                showTextHeader
                                showRightIcon
                                secondary
                                Icon={() => (
                                    <IConBack stroke={COLORS.Neutral0} />
                                )}
                            />
                        </View>
                    </ImageBackground>
                    <View>
                        <CardInfo secondary />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default YourProfileScreen

const styles = StyleSheet.create({
    header: {},
    imageBg: {
        height: 212,
    },
    contentHeader: {
        marginHorizontal: 24,
    },
})
