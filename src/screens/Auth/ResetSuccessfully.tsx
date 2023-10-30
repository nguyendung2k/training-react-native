import { ButtonComponent } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { BORDER, COLORS, SIZES } from "@theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResetSuccessfully = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View>
        <View></View>
      </View>
      <View style={styles.header_Description}>
        <Text style={{ color: COLORS.Neutral6 }}>Your password has been</Text>
        <Text style={{ color: COLORS.Neutral6 }}>reset successfully!</Text>
      </View>
      <View style={styles.footer}>
        <ButtonComponent
          label="Back to login"
          onPress={() => navigation.goBack()}
          styleBtn={styles.btnBackToLogin}
          styleText={styles.txtBackToLogin}
        />
      </View>
    </View>
  );
};

export default ResetSuccessfully;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 211,
    marginLeft: 24,
    marginRight: 24,
  },

  header_Description: {
    fontSize: SIZES.font,
    color: COLORS.Neutral6,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 48,
    marginTop: 31.31,
  },
  footer: {
    flex: 1,
    width: "100%",
  },
  btnBackToLogin: {
    fontWeight: "600",
    fontSize: SIZES.medium,
    paddingVertical: 17,
    borderRadius: BORDER.base,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.White,
    color: COLORS.Neutral8,
    borderColor: COLORS.Neutral8,
    borderWidth: 1,
  },
  txtBackToLogin: {
    fontSize: SIZES.large,
    fontWeight: "600",
    marginRight: 10,
    color: COLORS.Neutral8,
  },
});
