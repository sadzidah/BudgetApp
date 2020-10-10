import React from "react";
import { View, StyleSheet, Text, Card } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

function HomeScreeen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.wholeAmount}>
        <Text style={styles.text}>Your money amount: </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Category1"
          color="black"
          onPress={() => console.log("Tapped")}
        ></AppButton>
        <AppButton
          title="Category2"
          color="black"
          onPress={() => console.log("Tapped")}
        ></AppButton>
        <AppButton
          title="Category3"
          color="black"
          onPress={() => console.log("Tapped")}
        ></AppButton>
        <AppButton
          title="Add new category"
          color="black"
          onPress={() => console.log("Tapped")}
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  buttonContainer: {
    width: "100%",
    padding: 15,
  },

  wholeAmount: {
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

export default HomeScreeen;
