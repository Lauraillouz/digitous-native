import React, { useState, createContext, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// Component
import Posts from "../components/Posts";
import Comments from "../components/Comments";
// Context
export const CommentsContext = createContext();
export const PostIdContext = createContext();

const Timeline = () => {
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState();
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [comments, setComments] = useState([]);

  const handlePress = () => {
    setShowComments(false);
  };

  return (
    <PostIdContext.Provider value={{ postId, setPostId }}>
      <CommentsContext.Provider
        value={{
          showComments,
          setShowComments,
          numberOfComments,
          setNumberOfComments,
          comments,
          setComments,
        }}
      >
        {showComments ? (
          <View style={styles.container}>
            <Text style={styles.headline}>Comments</Text>
            <TouchableOpacity style={styles.btnReturn} onPress={handlePress}>
              <Text style={styles.btnText}>Back to Posts</Text>
            </TouchableOpacity>
            <View style={styles.commentsContainer}>
              <Comments />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.headline}>Your Timeline</Text>
            <Posts />
          </View>
        )}
      </CommentsContext.Provider>
    </PostIdContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
  },
  headline: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 48,
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  btnReturn: {
    alignSelf: "flex-start",
    backgroundColor: "lightblue",
    borderRadius: 15,
    padding: 12,
    marginTop: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  btnText: {
    color: "#1D1D1D",
  },
  commentsContainer: {
    marginTop: 64,
  },
});

export default Timeline;
