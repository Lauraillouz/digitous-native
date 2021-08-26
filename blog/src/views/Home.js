import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default Home;
