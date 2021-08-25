import React from "react";
// React Native
import { View, Image, StyleSheet } from "react-native";

const ProfilePic = () => {
  return (
    <View>
      <Image style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderRadius: 80,
    padding: 80,
    margin: 24,
    borderColor: "lightgrey",
  },
});

export default ProfilePic;
