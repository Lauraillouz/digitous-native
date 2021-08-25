import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
// Context
import { LoginContext } from "../../App";

const Home = () => {
  const logState = useContext(LoginContext);

  const handlePress = () => {
    logState.setAuth();
  };
  console.log("isLoggedIn in Home", logState.isLoggedIn);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link to="/" style={styles.btnLogout} onPress={handlePress}>
        <Text>Logout</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    margin: 32,
    color: "lightpink",
  },
  btnLogout: {
    padding: 16,
    backgroundColor: "lightgrey",
    borderRadius: 15,
  },
});

export default Home;
