import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const Form = () => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [inputColorEmail, setInputColorEmail] = useState("black");
  const [inputColorPassword, setInputColorPassword] = useState("black");

  const emailValidation = (val) => {
    console.log(val);
    if (emailReg.test(val)) {
      setEmailIsValid(true);
      setInputColorEmail("white");
    } else if (!emailReg.test(val) && val !== undefined) {
      setInputColorEmail("lightpink");
      setEmailIsValid(false);
      return;
    } else if (val === undefined || val === null || val === "") {
      setInputColorPassword("black");
      setEmailIsValid(false);
    }
  };

  const passwordValidation = (val) => {
    if (val.length >= 6) {
      setPasswordIsValid(true);
      setInputColorPassword("white");
    } else if (val.length > 0 && val.length <= 5) {
      setInputColorPassword("lightpink");
      setPasswordIsValid(false);
    } else {
      setInputColorPassword("black");
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
        style={[styles.input, { borderColor: inputColorEmail }]}
        onChangeText={emailValidation}
      />
      <Text style={styles.label}>Enter your password</Text>
      <TextInput
        style={styles.input}
        onChangeText={passwordValidation}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={(styles.text, { borderColor: inputColorPassword })}>
          Send
        </Text>
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
