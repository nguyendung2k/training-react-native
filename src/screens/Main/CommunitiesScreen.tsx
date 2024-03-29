import { Header } from "@components/Header";
import { InputComponent } from "@components/Input";
import { ListCommunityView } from "@components/ListView";
import { IconSearch } from "@components/Svg";
import { CommunitiesScreenProp } from "@navigation/type";
import { useNavigation } from "@react-navigation/native";
import { RootState, searchGroupByValue } from "@redux";
import { COLORS } from "@theme";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const dataGroupSelector = (state: RootState) => state.group.groups;

const CommunitiesScreen = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<
      CommunitiesScreenProp<"CommunitiesStackScreen">["navigation"]
    >();
  const dataGroup = useSelector(dataGroupSelector);
  const [textInput, setTextInput] = useState("");

  const handleSearchByTitle = (value: string) => {
    setTextInput(value);
    dispatch(searchGroupByValue(value));
  };

  const handleOnChangeGroup = (id: string) => {
    navigation.navigate("DetailCommunities", id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBody}>
        <Header title="Communities" showTextHeader={true} primary />
        <InputComponent
          placeholder="Find a community"
          IconSearch={<IconSearch />}
          inputSearch
          style={styles.search}
          styleSearchInput={styles.iconSearch}
          value={textInput}
          onChangeText={handleSearchByTitle}
        />
        {dataGroup.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataGroup}
            renderItem={({ item }) => (
              <ListCommunityView onPress={handleOnChangeGroup} item={item} />
            )}
          />
        ) : (
          <View
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "red" }}>Data Not Found!!!</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CommunitiesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    flex: 1,
  },
  containerBody: {
    paddingHorizontal: 20,
    flex: 1,
  },
  search: {
    width: "100%",
    paddingLeft: 61,
    paddingBottom: 16,
    paddingTop: 20,
    height: 58,
  },
  iconSearch: {
    position: "absolute",
    zIndex: 100,
    paddingTop: 35,
    paddingLeft: 17,
  },
});
