import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, BORDER } from "@theme";
import { IconX } from "@components/Svg";

interface imageProps {
  onClose?: (index: number) => void;
  imagePost: any[];
}

const ImagePost = ({ onClose, imagePost = [] }: imageProps) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {imagePost.map((item, index) => {
        return (
          <View style={styles.content} key={index}>
            <TouchableOpacity
              onPress={() => onClose && onClose(index)}
              style={styles.btnCancel}
            >
              <IconX stroke={COLORS.White} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Image
                key={item}
                source={{ uri: item.uri }}
                style={styles.image}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ImagePost;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row",
  },
  content: {
    marginBottom: 20,
    marginRight: 10,
  },
  btnCancel: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.63)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 8,
    top: 10,
    zIndex: 100,
  },
  image: {
    width: 146,
    height: 183,
    borderRadius: BORDER.base,
    position: "relative",
  },
});
