import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import Input from '../components/Input/Input'

import Plus from '../assets/icons/Plus.svg'
import ArrowRight from '../assets/icons/ArrowRight.svg'
import { BORDER, COLORS, SIZES } from '../assets/constants/theme'
const PersonalIntroduction = ({ navigation }: any) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../assets/images/LogoBlue.png')} />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>Getting started</Text>
                <Text style={styles.description}>Personal Introduction</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.number}>
                    <Text style={styles.txtNumber}>1</Text>
                </View>
                <Text style={styles.txtCenter}>SNS accounts</Text>
                <Text style={styles.txtEnd}>(Up to 5 accounts)</Text>
            </View>
            <View style={styles.block}>
                <View style={styles.blockDrop}>
                    <Input value="Drop" />
                </View>
                <View style={styles.blockName}>
                    <Input value="@Yuki.Matsuura" />
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity>
                    <View style={styles.btnContent}>
                        <Plus />
                        <Text style={styles.txtBtn}>Add New Address </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.btnNext}
                    onPress={() => navigation.navigate('Home')}
                >
                    <View style={styles.btnContent}>
                        <Text style={styles.txtBtnNext}>Next</Text>
                        <ArrowRight width={20} height={20} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default PersonalIntroduction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginTop: 84,
    },
    image: {
        marginBottom: 32,
    },
    header: {},
    title: {
        fontSize: SIZES.font,
        color: COLORS.Neutral6,
        marginBottom: 5,
        fontWeight: '500',
    },
    description: {
        fontSize: SIZES.extraLarge,
        color: COLORS.Neutral10,
        fontWeight: '600',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 36,
    },
    number: {
        borderColor: COLORS.Neutral8,
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: COLORS.Neutral8,
        justifyContent: 'center',
        marginRight: 12,
    },
    txtNumber: {
        fontSize: SIZES.font,
        color: COLORS.White,
        textAlign: 'center',
    },
    txtCenter: {
        fontSize: SIZES.font,
        color: COLORS.Neutral10,
        fontWeight: '600',
        marginRight: 15,
    },
    txtEnd: {
        fontSize: SIZES.small,
        color: COLORS.Neutral4,
        textAlign: 'center',
    },
    block: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
    },
    blockDrop: {
        flex: 1,
        marginRight: 16,
    },
    blockName: {
        flex: 3,
    },
    btn: {
        fontWeight: '600',
        fontSize: 16,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: COLORS.Neutral4,
        marginBottom: 200,
    },
    btnContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    txtBtn: {
        color: COLORS.Neutral4,
        marginLeft: 11,
    },
    btnNext: {
        fontWeight: '600',
        alignItems: 'center',
        fontSize: 16,
        paddingVertical: 17,
        borderRadius: BORDER.base,
        borderColor: COLORS.Primary,
        borderWidth: 2,
    },
    txtBtnNext: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        color: COLORS.Primary,
        marginRight: 10,
    },
})
