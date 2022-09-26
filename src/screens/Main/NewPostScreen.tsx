import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { Header, IConBack, NewPost } from '@components'
import { RootState } from '@redux/store'
import { useNavigation } from '@react-navigation/native'
import { stackScreenProp } from '@navigation/type'
import { COLORS } from '@theme'
import { addPost } from '@redux/slices/homeSlice'

const dataUserSelector = (state: RootState) => state.auth.user
const userUpdateSelector = (state: RootState) => state.home.user

const NewPostScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<stackScreenProp>()
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [images, setImages] = useState<any[]>([])

    const handlePickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            if (images.every((element) => element.assetId !== result.assetId)) {
                setImages([result].concat(images))
            }
        }
    }

    const handleRemoveImage = (index: number) => {
        setImages([...images.slice(0, index), ...images.slice(index + 1)])
    }

    const handlePost = () => {
        if (title && description && dataUser.image) {
            dispatch(
                addPost({
                    title: title,
                    body: description,
                    image: dataUser.image,
                    name: dataUser.first_name,
                })
            )
            navigation.navigate('ForumScreen')
        }
    }

    return (
        <SafeAreaView style={styles.newPost}>
            <View style={styles.header}>
                <Header
                    title="New post"
                    showTextHeader
                    showIconAdd
                    post
                    Icon={() => <IConBack stroke={COLORS.Neutral10} />}
                    onPress={() => navigation.navigate('ForumScreen')}
                    onPost={handlePost}
                />
            </View>
            <View style={styles.newPostContainer}>
                <NewPost
                    first_name={dataUser.first_name}
                    last_name={dataUser.last_name}
                    avatar={
                        userUpdate.image ? userUpdate.image : dataUser.image
                    }
                    valueTitle={title}
                    valueDescription={description}
                    OnChangeTextTitle={(value: string) => setTitle(value)}
                    OnChangeTextDescription={(value: string) =>
                        setDescription(value)
                    }
                    onCloseImage={handleRemoveImage}
                    onPickImage={handlePickImage}
                    imagePost={images}
                />
            </View>
        </SafeAreaView>
    )
}

export default NewPostScreen

const styles = StyleSheet.create({
    newPost: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    header: {
        marginHorizontal: 24,
        marginBottom: 28,
    },
    newPostContainer: {
        marginHorizontal: 24,
        borderTopWidth: 1,
        borderTopColor: COLORS.Neutral2,
    },
})
