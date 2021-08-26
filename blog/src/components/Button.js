import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ children }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 16,
    padding: 12,
    backgroundColor: "#1D1D1D",
    borderRadius: 20,
    width: 100,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default Button;
