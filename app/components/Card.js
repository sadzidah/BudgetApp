import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

function Card([cardName]) {
  return (
    <View style={styles.card}>
      <Text>{[cardName]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    backgroundColor: colors.black,
    height: 150,
    position: "absolute",
    top: 60,
    width: 350,
  },

  text: {
    color: colors.white,
    fontSize: 26,
    textAlign: "left",
    position: "absolute",
    top: 10,
    left: 10,
  },
});

export default Card;
