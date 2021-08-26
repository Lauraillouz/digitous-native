import React from "react";
import { StyleSheet, View, Text } from "react-native";
// Component
import Posts from "../components/Posts";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Your Timeline</Text>
      <Posts />
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
