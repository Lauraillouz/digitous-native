import React from "react";
import { StyleSheet, View, Image } from "react-native";
// Images
import imgKonexio from "../../assets/konexio-logo_1.png";

const Logos = () => {
  return (
    <View style={styles.center}>
      <Image style={styles.logo} source={imgKonexio}></Image>
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 124,
    margin: 10,
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Logos;
