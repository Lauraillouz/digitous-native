import React, { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/views/Home";
``;

// Context
export const UserContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <NativeRouter>
        <UserContext.Provider
          value={{ isLoggedIn: isLoggedIn, setAuth: setAuth }}
        >
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </UserContext.Provider>
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
