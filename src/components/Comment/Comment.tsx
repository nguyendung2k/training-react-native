import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@theme";
import { IconDotTime } from "@components/Svg";

interface commentProps {
  name?: string;
  time?: string;
  description?: string;
  avatar?: string;
  item: { avatar: string; body: string; id: string; name: string };
}

const Comment = ({ time, item }: commentProps) => {
  console.log("item: ", item);

  return (
    <View style={styles.comment}>
      <View style={styles.commentContainer}>
        <View style={styles.image}>
          <Image source={{ uri: item?.avatar }} style={styles.imageAvatar} />
        </View>
        <View>
          <View style={styles.commentHeader}>
            <Text style={styles.commentName}>{item?.name}</Text>
            <View>
              <IconDotTime fill={COLORS.Neutral4} />
            </View>
            <Text style={styles.commentDate}>{time}</Text>
          </View>
          <View style={styles.commentDescription}>
            <Text style={styles.commentTxt}>{item?.body}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  comment: {
    backgroundColor: COLORS.Neutral1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Neutral2,
    // flex: 1,
  },
  commentContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: 33,
    marginBottom: 20,
  },
  image: {
    marginRight: 10,
  },
  imageAvatar: {
    width: 32,
    height: 32,
    borderWidth: 3,
    borderColor: COLORS.Semantic2,
    borderRadius: 100,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  commentName: {
    color: COLORS.Neutral10,
    fontWeight: "600",
    fontSize: SIZES.medium,
    marginRight: 8,
  },
  commentDate: {
    fontWeight: "500",
    color: COLORS.Neutral4,
    marginLeft: 8,
  },
  commentDescription: {
    width: 318,
    marginTop: 15,
  },
  commentTxt: {
    lineHeight: 20,
    color: COLORS.Neutral8,
    fontSize: SIZES.medium,
  },
});
