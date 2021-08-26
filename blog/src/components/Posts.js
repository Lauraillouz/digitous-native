import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
// Context
import { UserContext, PostContext } from "../../App";
import { CommentsContext, PostIdContext } from "../views/Timeline";

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { ID } = useContext(UserContext);
  const { comments, setShowComments, numberOfComments } =
    useContext(CommentsContext);
  const { setPostId } = useContext(PostIdContext);

  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handlePress = (itemId) => {
    setShowComments(true);
    setPostId(itemId);
  };
  console.log(comments);

  const renderPosts = ({ item }) => {
    if (item.userId === parseInt(ID)) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.post}>{item.body}</Text>
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={styles.btnComments}
          >
            <Text style={styles.text}>Comments ({numberOfComments})</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderPosts}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
    backgroundColor: "white",
    padding: 24,
    borderRadius: 20,
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    marginBottom: 12,
  },
  btnComments: {
    backgroundColor: "lightblue",
    borderRadius: 15,
    padding: 12,
    marginTop: 12,
  },
  text: {
    textAlign: "center",
  },
});

export default Posts;
