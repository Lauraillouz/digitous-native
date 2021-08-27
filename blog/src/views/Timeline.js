import React, { useState, createContext, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// Component
import Posts from "../components/Posts";
import Comments from "../components/Comments";
// Context
export const CommentsContext = createContext();
export const PostIdContext = createContext();
import { NewPostContext } from "../components/Home";

const Timeline = () => {
  const { newPostTitle, newPostBody } = useContext(NewPostContext);
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState("");
  const [numberOfComments, setNumberOfComments] = useState(0);

  const handlePress = () => {
    setShowComments(false);
  };

  console.log(newPostTitle, newPostBody);

  return (
    <PostIdContext.Provider value={{ postId, setPostId }}>
      <CommentsContext.Provider
        value={{
          showComments,
          setShowComments,
          numberOfComments,
          setNumberOfComments,
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
            {newPostTitle && newPostBody ? (
              <View style={styles.postsContainer}>
                <Text style={styles.titlePost}>{newPostTitle}</Text>
                <Text>{newPostBody}</Text>
              </View>
            ) : null}

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
  postsContainer: {
    margin: 32,
    backgroundColor: "white",
    padding: 24,
    borderRadius: 20,
  },
  titlePost: {
    color: "blue",
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default Timeline;
