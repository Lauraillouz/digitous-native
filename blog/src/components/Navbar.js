import React from "react";
import { StyleSheet, View, Text } from "react-native";
// Components
import Button from "./Button";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Button>Home</Button>
        <Button>New Post</Button>
        <Button>Profile</Button>
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
    borderRadius: 32,
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
