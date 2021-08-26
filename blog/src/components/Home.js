import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
// Component
import AddPost from "../views/AddPost";
import Profile from "../views/Profile";
import Timeline from "../views/Timeline";
// Contexts
import { NavContext } from "../../App";

const Home = () => {
  const { nav } = useContext(NavContext);

  return (
    <View>
      {nav === "post" ? (
        <AddPost />
      ) : nav === "profile" ? (
        <Profile />
      ) : nav === "timeline" ? (
        <Timeline />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Home;
