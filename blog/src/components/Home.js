import React, { useContext, createContext, useState } from "react";

// Component
import AddPost from "../views/AddPost";
import Profile from "../views/Profile";
import Timeline from "../views/Timeline";
// Contexts
import { NavContext } from "../../App";
export const NewPostContext = createContext();

const Home = () => {
  const { nav } = useContext(NavContext);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  return (
    <NewPostContext.Provider
      value={{ newPostTitle, setNewPostTitle, newPostBody, setNewPostBody }}
    >
      {nav === "post" ? (
        <AddPost />
      ) : nav === "profile" ? (
        <Profile />
      ) : nav === "timeline" ? (
        <Timeline />
      ) : null}
    </NewPostContext.Provider>
  );
};

export default Home;
