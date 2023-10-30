import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { changeGroupByToJoin, RootState } from "@redux";
import { useDispatch, useSelector } from "react-redux";
import { BORDER, COLORS, SIZES } from "@theme";
import { HeaderAuth } from "@components/Header";
import { ListCommunityView } from "@components/ListView";
import { ButtonComponent } from "@components/Button";
import { RegisterScreenProp } from "@navigation/type";

interface community {
  id: string;
}

const listGroupSelector = (state: RootState) => state.group.groups;
const dataChooseGroup = (state: RootState) => state.group.groupChoose;

const ListCommunity = ({ id }: community) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<RegisterScreenProp<"ListCommunity">["navigation"]>();
  const listGroup = useSelector(listGroupSelector);
  const checkJoinGroup = useSelector(dataChooseGroup);
  const isCheck = checkJoinGroup.includes(id);

  const handleChooseGroup = (id: string) => {
    dispatch(changeGroupByToJoin(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 24 }}>
        <HeaderAuth
          title="Getting started"
          description="Join your communities"
          number="2"
          txtContent="Choose communities you prefer"
          txtEnd="(Up to 3 communities - 0/3)"
          primary
        />
        <FlatList
          data={listGroup}
          renderItem={({ item }) => (
            <ListCommunityView
              onPress={handleChooseGroup}
              item={item}
              showBox={true}
              check={isCheck}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.btn}>
          <ButtonComponent
            label="Next"
            disabled={checkJoinGroup.length < 3}
            onPress={() => navigation.navigate("RegisterEnd")}
            styleBtn={
              checkJoinGroup.length < 3 ? styles.disable : styles.enable
            }
            styleText={
              checkJoinGroup.length < 3 ? styles.disableTxt : styles.enableTxt
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListCommunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.Neutral0,
  },
  btn: {
    marginTop: "auto",
    marginBottom: 30,
    paddingTop: 32,
  },
  disable: {
    fontWeight: "600",
    fontSize: SIZES.medium,
    borderRadius: BORDER.base,
    backgroundColor: COLORS.White,
    borderColor: COLORS.Neutral4,
    borderWidth: 1,
    paddingVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  enable: {
    fontWeight: "600",
    fontSize: SIZES.medium,
    paddingVertical: 17,
    borderRadius: BORDER.base,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Primary,
    color: COLORS.White,
  },
  disableTxt: {
    fontSize: SIZES.large,
    color: COLORS.Neutral3,
    fontWeight: "600",
    marginRight: 10,
  },
  enableTxt: {
    color: COLORS.Neutral0,
    fontWeight: "600",
    fontSize: SIZES.large,
    marginRight: 10,
  },
});
