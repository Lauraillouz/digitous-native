import React, { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/views/Home";
import Navbar from "./src/components/Navbar";

export const PostContext = createContext();
export const LoginContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <PostContext.Provider>
          <NativeRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </NativeRouter>
          {isLoggedIn ? <Navbar /> : null}
        </PostContext.Provider>
      </LoginContext.Provider>
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
