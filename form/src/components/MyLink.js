import React from "react";
import { ToucheableOpacity, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

const MyLink = ({ children, to }) => {
  const history = useHistory();

  const handlePress = () => {
    history.push(to);
  };

  return (
    <ToucheableOpacity onPress={handlePress} style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </ToucheableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    backgroundColor: "lightgrey",
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default MyLink;
