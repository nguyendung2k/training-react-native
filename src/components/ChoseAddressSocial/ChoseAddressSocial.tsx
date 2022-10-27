import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { InputComponent, InputDropLogo } from '@components/Input'

interface props {
    valueAddress?: string
    nameAddress?: string
    logo?: string
}

const socialNetwork = [
    {
        label: (
            <Image source={require('../../assets/images/LogoFacebook.png')} />
        ),
        value: 'Facebook',
    },
    {
        label: (
            <Image
                source={require('../../assets/images/LogoInstagram.png')}
                style={{ width: 24, height: 24 }}
            />
        ),
        value: 'Instagram',
    },
    {
        label: (
            <Image source={require('../../assets/images/logos_twitter.png')} />
        ),
        value: 'Twitter',
    },
    {
        label: (
            <Image
                source={require('../../assets/images/logos_youtube-icon.png')}
            />
        ),
        value: 'Youtube',
    },
]

const ChoseAddressSocial = ({ valueAddress, nameAddress }: props) => {
    const [valueLogo, setValueLogo] = useState<any>(nameAddress)
    const [itemsLogo, setItemsLogo] = useState<any[]>(socialNetwork)

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputPickSocial}>
                    <View style={styles.inputItem}>
                        <View style={styles.inputLogo}>
                            <InputDropLogo
                                setItems={setItemsLogo}
                                value={valueLogo}
                                setValue={setValueLogo}
                                items={itemsLogo}
                            />
                        </View>
                        <View style={{ marginHorizontal: 10 }} />
                        <View style={styles.inputValue}>
                            <InputComponent
                                style={styles.inputAddress}
                                value={valueAddress}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChoseAddressSocial

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentUpdateProfile: {
        marginHorizontal: 24,
    },

    inputDrop: {
        flexDirection: 'row',
    },
    inputItemGender: {
        flex: 1,
    },
    inputItemBirth: {
        flex: 1,
    },
    inputPickSocial: {
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    inputLogo: {
        flex: 1,
        marginTop: 36,
        zIndex: 1000,
    },
    inputValue: {
        flex: 3,
    },

    inputItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputAddress: {
        width: '100%',
    },
})
