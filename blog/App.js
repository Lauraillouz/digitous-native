import React, { createContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
// Components
import Login from "./src/views/Login";
import Home from "./src/components/Home";

// Contexts
export const LoginContext = createContext();
export const NavContext = createContext();
export const PostContext = createContext();
export const UserContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nav, setNav] = useState("timeline");
  const [posts, setPosts] = useState([]);
  const [ID, setID] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((res) => {
        setUserInfo(res);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <PostContext.Provider value={{ posts, setPosts }}>
        <NavContext.Provider value={{ nav, setNav }}>
          <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <UserContext.Provider value={{ ID, setID, userInfo, setUserInfo }}>
              <NativeRouter>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
              </NativeRouter>
            </UserContext.Provider>
          </LoginContext.Provider>
        </NavContext.Provider>
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
