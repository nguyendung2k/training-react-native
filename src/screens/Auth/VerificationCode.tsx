import { ButtonComponent } from "@components/Button";
import { IconCheck } from "@components/Svg";
import { VerifyCode } from "@components/VerifyCode";
import { RegisterScreenProp } from "@navigation/type";
import { useNavigation } from "@react-navigation/native";
import { BORDER, COLORS, SIZES } from "@theme";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const VerificationCode = () => {
  const navigation =
    useNavigation<RegisterScreenProp<"VerificationCode">["navigation"]>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        style={styles.contentBody}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          ></TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.content_title}>Verification Code</Text>
          <Text style={styles.content_description}>
            Enter the OTP code from the phone we just sent you.
          </Text>

          <VerifyCode />

          <View style={styles.footer}>
            <ButtonComponent
              label="Verify"
              onPress={() => navigation.navigate("PersonalIntroduction")}
              Icon={<IconCheck stroke={COLORS.White} />}
              styleText={styles.btnText}
              styleBtn={styles.btn}
            />
            <View style={styles.footer_des}>
              <Text style={styles.textFooter}>Didn’t receive OTP code?</Text>
              <ButtonComponent
                label="Resend"
                styleBtn={styles.btnResend}
                styleText={styles.textBtnResend}
                onPress={() => console.log("Resend")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerificationCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  contentBody: {
    marginRight: 23,
    marginLeft: 24,
  },

  header: {
    marginTop: 81,
  },
  content: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginTop: 129.25,
  },
  content_title: {
    fontSize: SIZES.extraLarge,
    color: COLORS.Neutral10,
    marginBottom: 6,
    fontWeight: "600",
  },
  content_description: {
    fontSize: SIZES.small,
    color: COLORS.Neutral3,
    fontWeight: "500",
    lineHeight: 22.4,
  },
  btn: {
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
  btnText: {
    color: COLORS.White,
    fontWeight: "600",
    fontSize: SIZES.large,
  },
  footer: {
    flex: 1,
    width: "100%",
    marginTop: 48,
  },
  footer_des: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
  },
  textFooter: {
    color: COLORS.Neutral8,
    fontSize: SIZES.small,
    marginRight: 5,
    textAlign: "center",
    fontWeight: "500",
  },
  textFooter_primary: {
    color: COLORS.Primary,
    alignItems: "center",
  },
  btnResend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnResend: {
    color: COLORS.Primary,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
});
