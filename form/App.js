import React, { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/views/Home";
``;

// Context
export const LoginContext = createContext();
export const UserContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const setAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <NativeRouter>
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
          <LoginContext.Provider value={{ isLoggedIn, setAuth }}>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </LoginContext.Provider>
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
