import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 30,
    height: 70,
    justifyContent: "center",
    margin: 1,
    width: "100%",
  },

  text: {
    color: colors.pinkWhite,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
