import { BORDER, COLORS, SIZES } from "@theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CommunitiesScreenProp } from "@navigation/type";
import { ButtonComponent } from "@components/Button";
import {
  IconCaretRight,
  IconCoin,
  IconFacebook,
  IconTwitter,
} from "@components/Svg";

const FooterFlatList = () => {
  const navigation =
    useNavigation<
      CommunitiesScreenProp<"CommunitiesStackScreen">["navigation"]
    >();
  const handleSeeAllGroup = () => {
    navigation.navigate("CommunitiesStackScreen" as never);
  };
  return (
    <View>
      <ButtonComponent
        label="See all"
        onPress={handleSeeAllGroup}
        Icon={<IconCaretRight stroke={COLORS.Primary} />}
        styleBtn={styles.btnSeeAll}
        styleText={styles.txtSeeAll}
      />

      <View style={styles.btnGroup}>
        <ButtonComponent
          opacity={0.7}
          label="Purchase TomoCoins"
          IconRight={<IconCoin width={32} height={32} stroke={"#FEA827"} />}
          styleBtn={styles.btnHome}
          styleText={styles.txtBtnHome}
        />
        <ButtonComponent
          opacity={0.7}
          styleBtn={styles.btnHome}
          styleText={styles.txtBtnHome}
          label="Introduce via Twitter"
          IconRight={<IconTwitter stroke={"#406FF1"} />}
        />
        <ButtonComponent
          opacity={0.7}
          styleText={styles.txtBtnHome}
          styleBtn={styles.btnHome}
          label="Introduce via Facebook"
          IconRight={<IconFacebook stroke={"#642AE3"} />}
        />
      </View>
    </View>
  );
};

export default FooterFlatList;

const styles = StyleSheet.create({
  btn: {
    marginBottom: 42,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnGroup: {
    marginBottom: 40,
  },
  btnHome: {
    backgroundColor: COLORS.Neutral1,
    borderRadius: BORDER.base,
    paddingVertical: 21,
    paddingLeft: 20,
    marginBottom: 12,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  btnSeeAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 42,
  },
  txtBtnHome: {
    marginLeft: 20,
    fontSize: SIZES.small,
    fontWeight: "500",
    color: COLORS.Neutral10,
  },
  txtSeeAll: {
    color: COLORS.Primary,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
});
