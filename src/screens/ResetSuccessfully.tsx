import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import CheckCircle from '../assets/icons/CheckCircle.svg'
import ButtonForm from '../components/Button/ButtonForm'
import { COLORS, SIZES } from '../assets/constants/theme'

const ResetSuccessfully = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <CheckCircle />
                </View>
            </View>
            <View style={styles.header_Description}>
                <Text style={{ color: COLORS.Neutral6 }}>
                    Your password has been
                </Text>
                <Text style={{ color: COLORS.Neutral6 }}>
                    reset successfully!
                </Text>
            </View>

            <View style={styles.footer}>
                <ButtonForm
                    label="Back to login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}

export default ResetSuccessfully

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 211,
        marginLeft: 24,
        marginRight: 24,
    },

    header_Description: {
        fontSize: SIZES.font,
        color: COLORS.Neutral6,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 48,
        marginTop: 31.31,
    },
    footer: {
        flex: 1,
        width: '100%',
    },
})
