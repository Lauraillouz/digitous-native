import React from "react";
// React Native
import { View, Text, StyleSheet } from "react-native";

const Texts = () => {
  return (
    <View>
      <Text style={styles.text1}>Hello World</Text>
      <Text style={styles.text2}>Hello World</Text>
      <Text style={styles.text3}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
  },
  text2: {
    marginTop: 80,
    marginBottom: 80,
    textAlign: "center",
  },
  text3: {
    marginTop: 80,
    marginBottom: 80,
    fontWeight: "bold",
  },
});

export default Texts;
