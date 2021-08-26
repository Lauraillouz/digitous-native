import React, { useState, createContext } from "react";
import { StyleSheet } from "react-native";
// Component
import Posts from "../components/Posts";
import Comments from "../components/Comments";

export const CommentsContext = createContext();

const Timeline = () => {
  const [showComments, setShowComments] = useState(false);

  return (
    <CommentsContext.Provider value={{ showComments, setShowComments }}>
      {showComments ? <Comments /> : <Posts />}
    </CommentsContext.Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Timeline;
