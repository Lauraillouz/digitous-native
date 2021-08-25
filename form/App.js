import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/views/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2429",
  },
});
