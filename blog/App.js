import React, { createContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/views/Home";
import Navbar from "./src/components/Navbar";
import AddPost from "./src/views/AddPost";
import Profile from "./src/views/Profile";

export const LoginContext = createContext();
export const NavContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nav, setNav] = useState("");

  return (
    <View style={styles.container}>
      <NavContext.Provider value={{ nav, setNav }}>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <NativeRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </NativeRouter>
          {nav === "post" ? (
            <AddPost />
          ) : nav === "profile" ? (
            <Profile />
          ) : null}
          {isLoggedIn ? <Navbar nav={{ nav, setNav }} /> : null}
        </LoginContext.Provider>
      </NavContext.Provider>
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
