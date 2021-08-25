import React, { useState } from "react";
// React Native
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// Image Picker
import * as ImagePicker from "expo-image-picker";

const ProfilePic = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          style={styles.image}
        />
      </View>

      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
        <Text style={styles.btnText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 24,
  },
  image: {
    borderWidth: 1,
    borderRadius: 200,
    padding: 80,
    margin: 24,
    borderColor: "lightgrey",
  },
  instructions: {
    margin: 32,
  },
  btn: {
    backgroundColor: "lightgrey",
    marginLeft: 64,
    marginRight: 64,
    borderRadius: 25,
    padding: 15,
  },
  btnText: {
    textAlign: "center",
  },
  thumbnail: {
    borderWidth: 1,
    borderRadius: 200,
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderColor: "lightgrey",
    margin: 24,
  },
});

export default ProfilePic;
