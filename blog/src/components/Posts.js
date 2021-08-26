import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
// Context
import { UserContext, PostContext } from "../../App";
import { CommentsContext } from "../views/Timeline";

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { ID } = useContext(UserContext);
  const { showComments, setShowComments } = useContext(CommentsContext);

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

  const handlePress = () => {
    setShowComments(true);
  };

  const renderPosts = ({ item }) => {
    if (item.userId === parseInt(ID)) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Your Timeline</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.post}>{item.body}</Text>
          <TouchableOpacity onPress={handlePress} style={styles.btnComments}>
            <Text style={styles.text}>Comments</Text>
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
  welcome: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
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
