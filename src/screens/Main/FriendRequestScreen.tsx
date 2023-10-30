import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "@theme";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { IConBack } from "@components/Svg";
import { WaitingFormRequest } from "@components/FormRequest";

const FriendRequestScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header
          Icon={() => <IConBack stroke={COLORS.Neutral10} />}
          showTextHeader
          showRightIcon
          title="Waiting for approval"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View>
          <WaitingFormRequest
            name="Annette Black"
            dateRequest="2 days ago"
            quantityFollow="2050"
            secondary
          />
          <WaitingFormRequest
            name="Jenny Wilson"
            dateRequest="Last week"
            quantityFollow="1234"
            secondary
          />
          <WaitingFormRequest
            name="Cody Fisher"
            dateRequest="Last month"
            quantityFollow="1234"
            secondary
          />
          <WaitingFormRequest
            name="Cody Fisher"
            dateRequest="Last month"
            quantityFollow="1234"
            secondary
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FriendRequestScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
  },
  header: {
    marginBottom: 25,
    marginHorizontal: 24,
  },
  content: {
    backgroundColor: COLORS.White,
    marginHorizontal: 24,
    marginTop: 10,
    marginBottom: 40,
  },
});
