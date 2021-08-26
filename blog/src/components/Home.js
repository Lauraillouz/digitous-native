import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
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

export default Home;
