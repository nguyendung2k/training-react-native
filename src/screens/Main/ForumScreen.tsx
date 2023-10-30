import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "@redux/store";
import { COLORS } from "@theme";
import { CommentScreenProp } from "@navigation/type";
import { likePostById } from "@redux";
import { Header } from "@components/Header";
import { IConBack } from "@components/Svg";
import { ListPost } from "@components/ListView";

const likePostSelector = (state: RootState) => state.forum.like;
const dataLikePostSelector = (state: RootState) => state.forum.likes;
const postsSelector = (state: RootState) => state.forum.posts;
const dataCommentSelector = (state: RootState) => state.forum.comments;

const ForumScreen = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<CommentScreenProp<"ForumScreen">["navigation"]>();
  const checkLikePost = useSelector(likePostSelector);

  const dataPosts = useSelector(postsSelector);
  const dataComment = useSelector(dataCommentSelector);
  const dataLike = useSelector(dataLikePostSelector);
  // useEffect(() => {
  //   checkPost()
  // }, [])

  // console.log('dataComment: ', dataComment)

  // const checkPost = () => {
  //     const postById = dataPosts.
  // }

  // console.log('forum Post: ', dataPosts)

  // console.log('dataPosts: ', dataPosts)

  // const [posts, setPosts] = useState<any>([])
  // const [pagePost, setPagePost] = useState(1)
  // const [loading, setLoading] = useState<boolean>(false)

  // useEffect(() => {
  //     const getData = async () => {
  //         const urlApi = `https://631ff913e3bdd81d8eefe904.mockapi.io/posts/?page=1&limit=5`
  //         const response = await axios.get(urlApi)
  //         const result: [] = response.status === 200 ? response.data : []
  //         // setLoading(false)
  //         if (dataPosts.title !== '' && dataPosts.body !== '') {
  //             setPosts(posts.concat(dataPosts))
  //             console.log('post--:', posts)
  //         } else {
  //             setPosts(result)
  //         }
  //         // dispatch(getPost(posts.concat(result)))
  //     }
  //     getData()
  // }, [])

  // const handleAddPost = () => {
  //     if (dataPosts.title !== '' && dataPosts.body !== '') {
  //         setPosts(posts.unshift(dataPosts))
  //         console.log('post--:', posts)
  //     }
  // }

  // console.log('add post: ', posts.concat(dataPosts))
  const handleAmountReply = (index: string) => {
    const amountReply = dataComment.find(
      (comment) => comment.post_id === index
    );
    return amountReply ? amountReply?.data.length : 0;
  };

  const handleAmountLike = (id: string) => {
    const amountLike = dataLike.find((like) => like.id === id);
    return amountLike ? amountLike?.data.length : 0;
  };

  const handlePressPost = (id: string) => {
    navigation.navigate("CommentForumScreen", id);
  };
  const handlePressComment = (id: string) => {
    navigation.navigate("CommentForumScreen", id);
  };

  const handlePressImage = (id: string) => {
    navigation.navigate("CommentForumScreen", id);
  };

  // const handleLoadMorePost = () => {
  //     // setPagePost(pagePost + 1)
  //     setPosts(posts)
  //     // setLoading(true)
  // }

  // console.log('dataPost: ', dataPosts)

  const handleOnLikePost = (id: string) => {
    dispatch(likePostById(id));
    // if (checkLikePost.includes(id)) {
    //     // dispatch(onChangeUnlikePost())
    //     dispatch(onChangeLikePost())
    // } else {
    //     dataLike.find((item) => {
    //         // return item.id.includes(
    //         //     dataLike.filter((item) => {
    //         //         return item.post_id
    //         //     })
    //         // )
    //     })

    //     // console.log('12312: ', checkLikePost)
    // }
  };

  console.log("dataPost: ", dataPosts);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          title="Forum"
          showTextHeader
          showIconAdd
          showIcon
          Icon={() => <IConBack stroke={COLORS.Neutral10} />}
          onPress={() => navigation.goBack()}
          onDirection={() => navigation.navigate("NewPostScreen")}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentPost}>
          <FlatList
            data={dataPosts}
            renderItem={({ item }) => {
              return (
                <ListPost
                  quantityLike={handleAmountLike(item.id)}
                  quantityComment={handleAmountReply(item.id)}
                  primary
                  onPress={() => handlePressPost(item.id)}
                  onLikePost={() => handleOnLikePost(item.id)}
                  item={item}
                  onComment={() => handlePressComment(item.id)}
                  onPressImage={() => handlePressImage(item.id)}
                />
              );
            }}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            // onEndReached={handleLoadMorePost}
            // onEndReachedThreshold={0}
            // ListFooterComponent={loading ? Loading : null}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  header: {
    marginHorizontal: 24,
    marginBottom: 28,
  },
  content: {
    flex: 1,
  },
  contentPost: {
    marginHorizontal: 24,
  },
});
