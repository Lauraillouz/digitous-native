import React, { useState } from "react";
// React Native
import { StyleSheet, View, ScrollView } from "react-native";
// Components
import Texts from "./src/components/Texts";
import Logos from "./src/components/Logos";
import Button from "./src/components/Button";

const App = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Texts />
        <Logos />
        <Button showLoading={(showLoading, setShowLoading)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#B6EBEC",
  },
  textContainer: {
    backgroundColor: "white",
    padding: 30,
  },
});

export default App;
