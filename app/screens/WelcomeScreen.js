import React from "react";
import { ImageBackground, StyleSheet, View, Text, Button } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <AppText>Know your spending habits.</AppText>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("Tapped")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonsContainer: {
    padding: 15,
    width: "100%",
  },
});

export default WelcomeScreen;
