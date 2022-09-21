import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/constants/theme'
import Header from '../../components/Header/Header'
import { IConBack } from '../../components/Svg/Icon'
import NewPost from '../../components/NewPost/NewPost'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { addPost } from '../../redux/slices/homeSlice'

const dataUserSelector = (state: any) => state.auth.user

const NewPostScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const dataUser = useSelector(dataUserSelector)
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
        // console.log('array1', images.slice(0, index))
        // console.log('array2', images.slice(index + 1))
    }

    const handlePost = () => {
        dispatch(
            addPost({
                title: title,
                body: description,
                image: dataUser.image,
            })
        )
        navigation.navigate('ForumScreen')
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
                    avatar={dataUser.image}
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
