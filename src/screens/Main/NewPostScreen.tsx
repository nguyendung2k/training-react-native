import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { RootState } from "@redux/store";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "@theme";
import { RootStackScreenProps } from "@navigation/type";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { addPost } from "@redux";
import { Header } from "@components/Header";
import { IConBack } from "@components/Svg";
import { NewPost } from "@components/NewPost";

const userDetailSelector = (state: RootState) => state.user.userDetail;

// const userUpdateSelector = (state: RootState) => state.user.userUpdate
const dataPostsSelector = (state: RootState) => state.forum.posts;

const NewPostScreen = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<RootStackScreenProps<"NewPostScreen">["navigation"]>();
  const userDetail = useSelector(userDetailSelector);

  // const userUpdate = useSelector(userUpdateSelector)
  const dataPost = useSelector(dataPostsSelector);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [images, setImages] = useState<
    // {
    //     assetId: string | null | undefined
    //     cancelled: boolean
    //     fileName: string
    //     fileSize: number
    //     height: number
    //     width: number
    //     type: undefined
    //     uri: string
    // }
    any[]
  >([]);

  const handlePickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);

      if (images.every((element) => element.assetId !== result.assetId)) {
        setImages([result].concat(images));
        console.log("image: ", images);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  // console.log('image: ', image)

  // console.log('dataPost:--- ', dataPost)

  const handlePost = () => {
    if (title !== "" && description !== "" && image) {
      let data;
      let today: any = new Date();
      console.log("type date: ", typeof today);

      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;

      data = [
        {
          body: description,
          createdAt: today,
          id: Math.floor(Math.random() * 100),
          image: image,
          name: userDetail.full_name,
          reply: 0,
          title: title,
        },
        ...dataPost,
      ];

      dispatch(addPost(data));
      navigation.navigate("ForumScreen");
    }
  };

  return (
    <SafeAreaView style={styles.newPost}>
      <View style={styles.header}>
        <Header
          title="New post"
          showTextHeader
          showIconAdd
          post
          Icon={() => <IConBack stroke={COLORS.Neutral10} />}
          onPress={() => navigation.navigate("ForumScreen")}
          onPost={handlePost}
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.newPostContainer}>
          <NewPost
            full_name={userDetail.full_name}
            avatar={userDetail.image}
            valueTitle={title}
            valueDescription={description}
            OnChangeTextTitle={(value: string) => setTitle(value)}
            OnChangeTextDescription={(value: string) => setDescription(value)}
            onCloseImage={handleRemoveImage}
            onPickImage={handlePickImage}
            imagePost={images}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default NewPostScreen;

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
});
