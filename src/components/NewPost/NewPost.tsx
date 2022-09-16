import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Input from '../Input/Input'
import { SIZES } from '../../assets/constants/theme'
import ButtonPickImage from '../Button/ButtonPickImage'
import ImagePost from '../ImagePost/ImagePost'

const NewPost = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Image
                        source={require('../../assets/images/Avatar1.png')}
                        style={styles.imageAvatar}
                    />
                </View>
                <View>
                    <Text style={styles.name}>Matsuura Yuki</Text>
                    <View style={styles.inputTitle}>
                        <Input placeholder="Title" quinary />
                    </View>
                    <View>
                        <Input
                            senary
                            placeholder="What do you want to share?"
                        />
                    </View>
                    <View>
                        <ImagePost />
                        <ButtonPickImage />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NewPost

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    imageAvatar: {
        width: 48,
        height: 48,
        borderRadius: 100,
        marginRight: 16,
    },
    content: {
        flexDirection: 'row',
    },
    name: {
        fontWeight: '600',
        fontSize: SIZES.medium,
    },
    inputTitle: {
        marginTop: 21,
        marginBottom: 16,
    },
})
