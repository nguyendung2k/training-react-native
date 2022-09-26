import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { ButtonPickImage, ImagePost, Input } from '@components'
import { SIZES } from '@theme'

interface newPostProps {
    avatar?: string
    first_name?: string
    last_name?: string
    OnChangeTextTitle?: (value: string) => void
    OnChangeTextDescription?: (value: string) => void
    valueTitle?: string
    valueDescription?: string
    onPress?: () => void
    onPickImage?: () => void
    onCloseImage?: (index: number) => void
    imagePost: any[]
}

const NewPost = ({
    avatar,
    first_name,
    last_name,
    OnChangeTextTitle,
    OnChangeTextDescription,
    valueTitle,
    valueDescription,
    onPickImage,
    onCloseImage,
    imagePost,
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
                    <Text style={styles.name}>
                        {first_name}
                        <Text> </Text>
                        {last_name}
                    </Text>
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
    },
    inputTitle: {
        marginTop: 21,
        marginBottom: 16,
    },
})
