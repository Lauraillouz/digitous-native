import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const Form = () => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [inputColor, setInputColor] = useState("black");

  const emailValidation = (val) => {
    if (val === /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) {
      setEmailIsValid(true);
      setInputColor("white");
    } else if (
      val !== /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ &&
      val !== undefined
    ) {
      setInputColor("lightpink");
      setEmailIsValid(false);
      return;
    } else {
      setInputColor("black");
      setEmailIsValid(false);
    }
  };

  const passwordValidation = (val) => {
    if (val.length > 6) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const handlePress = () => {
    if (emailIsValid && passwordIsValid) {
      Alert.alert("Thank you for logging in!");
    } else if (!passwordIsValid && !emailIsValid) {
      Alert.alert(
        "Please enter a valid email and a password that contains at least 6 characters"
      );
    } else if (!emailIsValid && passwordIsValid) {
      Alert.alert("There is an issue with your email.");
    } else if (!passwordIsValid && emailIsValid) {
      Alert.alert("Your password needs to contain at least 6 characters.");
    }
    console.log("you clicked");
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Form</Text>
      <Text style={styles.label}>Enter your email</Text>
      <TextInput
        style={[styles.input, { borderColor: inputColor }]}
        onChange={emailValidation}
      />
      <Text style={styles.label}>Enter your password</Text>
      <TextInput
        style={styles.input}
        onChange={passwordValidation}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 24,
    margin: 32,
    color: "lightpink",
  },
  input: {
    margin: 16,
    width: 300,
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
    color: "white",
  },
  label: {
    color: "lightgrey",
    marginTop: 32,
  },
  btn: {
    backgroundColor: "lightgrey",
    padding: 12,
    borderRadius: 15,
    margin: 12,
  },
  text: {
    marginLeft: 24,
    marginRight: 24,
  },
});

export default Form;
