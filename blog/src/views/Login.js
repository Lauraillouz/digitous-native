import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useHistory } from "react-router-native";
// Context
import { LoginContext } from "../../App";
import { NavContext } from "../../App";

const Login = () => {
  const logState = useContext(LoginContext);
  const navState = useContext(NavContext);

  const [isIDValid, setIsIDValid] = useState(false);

  const history = useHistory();

  const checkID = (val) => {
    let value = parseInt(val);
    console.log(typeof value);
    if (value >= 1 && value <= 10) {
      setIsIDValid(true);
    } else {
      setIsIDValid(false);
    }
  };

  const handlePress = () => {
    if (isIDValid) {
      history.push("/home");
      logState.setIsLoggedIn(true);
    } else {
      Alert.alert("Your ID needs to be a number between 1 and 10");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput style={styles.input} onChangeText={checkID} />
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
    color: "white",
    textAlign: "center",
  },
  btn: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 100,
    marginLeft: 100,
  },
  btnText: {
    textAlign: "center",
    color: "#1A1A18",
  },
  input: {
    margin: 16,
    width: 300,
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
    borderColor: "white",
    color: "white",
  },
});

export default Login;
