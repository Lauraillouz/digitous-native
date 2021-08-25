import React from "react";
// React Native
import { StyleSheet, Text, View } from "react-native";
// Components
import ProfilePic from "./components/ProfilePic";
// Image Picker
import * as ImagePicker from "expo-image-picker";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Your profile pic</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
