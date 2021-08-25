import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link to="/login" style={styles.btnLogin}>
        <Text>Login</Text>
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
  btnLogin: {
    padding: 16,
    backgroundColor: "lightgrey",
    borderRadius: 15,
  },
});

export default Home;
