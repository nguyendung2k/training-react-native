import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { Header, IConBack, NewPost } from '@components'
import { RootState } from '@redux/store'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@theme'
import { RootStackScreenProps } from '@navigation/type'
import { addPost } from '@redux/slices/forumSlice'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const dataUserSelector = (state: RootState) => state.user.userDetail
const userUpdateSelector = (state: RootState) => state.user.userUpdate
const dataPostsSelector = (state: RootState) => state.forum.posts

const NewPostScreen = () => {
    const dispatch = useDispatch()
    const navigation =
        useNavigation<RootStackScreenProps<'NewPostScreen'>['navigation']>()
    const dataUser = useSelector(dataUserSelector)
    const userUpdate = useSelector(userUpdateSelector)
    const dataPost = useSelector(dataPostsSelector)
    const [title, setTitle] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [images, setImages] = useState<
        {
            assetId: string | null | undefined
            cancelled: boolean
            fileName: string
            fileSize: number
            height: number
            width: number
            type: image | video | undefined
            uri: string
        }[]
    >([])

    const handlePickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            setImage(result.uri)

            if (images.every((element) => element.assetId !== result.assetId)) {
                setImages([result].concat(images))
                console.log('image: ', images)
            }
        }
    }

    const handleRemoveImage = (index: number) => {
        setImages([...images.slice(0, index), ...images.slice(index + 1)])
    }

    // console.log('image: ', image)

    // console.log('dataPost:--- ', dataPost)

    const handlePost = () => {
        if (title !== '' && description !== '' && image) {
            let data
            let today: any = new Date()
            const dd = String(today.getDate()).padStart(2, '0')
            const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
            const yyyy = today.getFullYear()
            today = mm + '/' + dd + '/' + yyyy

            data = [
                {
                    body: description,
                    createdAt: today,
                    id: Math.floor(Math.random() * 100),
                    image: image,
                    name: dataUser.full_name,
                    reply: 0,
                    title: title,
                },
                ...dataPost,
            ]

            dispatch(addPost(data))
            navigation.navigate('ForumScreen')
        }
    }

    return (
        <SafeAreaView style={styles.newPost}>
            <KeyboardAwareScrollView>
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
            </KeyboardAwareScrollView>
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
