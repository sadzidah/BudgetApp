import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.pinkWhite,
    position: "absolute",
    top: 100,
  },
});

export default AppText;
