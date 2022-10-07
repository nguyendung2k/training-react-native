import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SIZES } from '@theme'
import Input from '../Input/Input'
import { ImagePost } from '@components/ImagePost'
import { ButtonPickImage } from '@components/Button'
interface newPostProps {
    avatar?: string
    full_name?: string
    valueTitle?: string
    valueDescription?: string
    imagePost: any[]
    OnChangeTextTitle?: (value: string) => void
    OnChangeTextDescription?: (value: string) => void
    onPress?: () => void
    onPickImage?: () => void
    onCloseImage?: (index: number) => void
}

const NewPost = ({
    avatar,
    full_name,
    valueTitle,
    valueDescription,
    imagePost,
    OnChangeTextTitle,
    OnChangeTextDescription,
    onPickImage,
    onCloseImage,
}: newPostProps) => {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.content}
                contentContainerStyle={{ flexDirection: 'row' }}
            >
                <View>
                    <Image
                        source={{ uri: avatar }}
                        style={styles.imageAvatar}
                    />
                </View>
                <View>
                    <Text style={styles.name}>{full_name}</Text>
                    <View style={styles.inputTitle}>
                        <Input
                            placeholder="Title"
                            quinary
                            value={valueTitle}
                            onChangeText={OnChangeTextTitle}
                        />
                    </View>
                    <View>
                        <Input
                            senary
                            placeholder="What do you want to share?"
                            value={valueDescription}
                            onChangeText={OnChangeTextDescription}
                        />
                    </View>
                    <View>
                        <ImagePost
                            onClose={onCloseImage}
                            imagePost={imagePost}
                        />
                        <ButtonPickImage onPress={onPickImage} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default NewPost

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
    },
    imageAvatar: {
        width: 48,
        height: 48,
        borderRadius: 100,
        marginRight: 16,
    },
    content: {
        paddingTop: 20,
    },
    name: {
        fontWeight: '600',
        fontSize: SIZES.medium,
        marginTop: 5,
    },
    inputTitle: {
        marginTop: 21,
        marginBottom: 16,
    },
})
