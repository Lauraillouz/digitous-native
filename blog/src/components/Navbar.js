import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
// Components
import Button from "./Button";
// Context
import { NavContext } from "../../App";

const Navbar = () => {
  const navState = useContext(NavContext);

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Button onPress={() => navState.setNav("timeline")}>Home</Button>
        <Button onPress={() => navState.setNav("post")}>New Post</Button>
        <Button onPress={() => navState.setNav("profile")}>Profile</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "lightblue",
    height: 100,
  },
  display: {
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
  },
});

export default Navbar;
