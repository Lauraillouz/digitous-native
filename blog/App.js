import React, { createContext } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/views/Home";
import Navbar from "./src/components/Navbar";

const PostContext = createContext();

const App = () => {
  return (
    <View style={styles.container}>
      <PostContext.Provider>
        <NativeRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </NativeRouter>
        <Navbar />
      </PostContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
