import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useHistory } from "react-router-native";
// Components
import AddPost from "../views/AddPost";
import Profile from "../views/Profile";
import Button from "./Button";

const Navbar = () => {
  const history = useHistory();

  const handlePress = () => {
    switch (children) {
      case "Home":
        history.push("/home");
        console.log("clicked Home");
        break;
      case "New Post":
        console.log("clicked Add post");
        return <AddPost />;
      case "Profile":
        console.log("clicked Profile");
        return <Profile />;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Button onPress={handlePress}>Home</Button>
        <Button onPress={handlePress}>New Post</Button>
        <Button onPress={handlePress}>Profile</Button>
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
