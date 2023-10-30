import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loadingAction, RootState } from "@redux";
import { COLORS } from "@theme";
import { HomeScreenProps } from "@navigation/type";
import { Loading } from "@components/Loading";
import { ListCommunityView } from "@components/ListView";
import { HeaderFlatList } from "@components/Header";
import { FooterFlatList } from "@components/Footer";

const listGroupSelector = (state: RootState) => state.group.groups;
const loadingSelector = (state: RootState) => state.home.loading;

export default function HomeScreen() {
  const dispatch = useDispatch();
  console.log("test");

  const navigation =
    useNavigation<HomeScreenProps<"HomeScreen">["navigation"]>();
  const [groupNotJoin, setGroupNotJoin] = useState<
    {
      title: string;
      image: string;
      id: string;
      total_members: number;
      joinGr: boolean;
    }[]
  >([]);
  const listGroup = useSelector(listGroupSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    filterGroupNotJoin();
  }, [listGroup]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadingAction(false));
    }, 1500);
  }, []);

  const handleOnChangeGroup = (id: string) => {
    navigation.navigate("DetailCommunities", id);
  };

  const filterGroupNotJoin = () => {
    const filterGroup = listGroup.filter((item) => {
      return item.joinGr === false;
    });
    setGroupNotJoin(filterGroup);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={COLORS.Neutral0}
      />
      {loading ? (
        <View style={styles.loading}>
          <Loading />
        </View>
      ) : (
        <View style={styles.contentBody}>
          <FlatList
            data={groupNotJoin}
            renderItem={({ item }) => (
              <ListCommunityView onPress={handleOnChangeGroup} item={item} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={HeaderFlatList}
            ListFooterComponent={FooterFlatList}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  contentBody: {
    marginHorizontal: 24,
  },
});
