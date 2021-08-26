import React from "react";
import { StyleSheet, View, Text } from "react-native";
// Component
import Posts from "../components/Posts";
import Comments from "../components/Comments";

const Timeline = () => {
  return (
    <View>
      <Text style={styles.title}>Your Timeline</Text>
      <Posts />
      <Comments />
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

export default Timeline;
