import React, { useState } from "react";
// React Native
import {
  View,
  TouchableOpacity,
  Alert,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const Button = (props) => {
  const [showLoading, setShowLoading] = useState(props);

  const handlePress = () => {
    Alert.alert("You clicked!");
    setShowLoading((prevState) => !prevState);
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      {showLoading ? <ActivityIndicator /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginRight: 75,
    marginBottom: 20,
    marginLeft: 75,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#3482C0",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Button;
