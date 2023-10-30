import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "@theme";
import { Header } from "@components/Header";
import { IConBack } from "@components/Svg";
import { CardBlockList } from "@components/Card";

const dataBlockUser = [
  {
    id: 1,
    name: "Annette Black",
  },
  {
    id: 2,
    name: "Jenny Wilson",
  },
  {
    id: 3,
    name: "Annette Black",
  },
  {
    id: 4,
    name: "Annette Black",
  },
];

const BlockListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          Icon={() => <IConBack stroke={COLORS.Neutral10} />}
          showTextHeader
          showRightIcon
          title="Update Profile"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {dataBlockUser.map((item) => {
          return <CardBlockList key={item.id} name={item.name} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlockListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  header: {
    marginHorizontal: 24,
  },
  content: {
    marginHorizontal: 24,
  },
});
