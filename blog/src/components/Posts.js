import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
// Context
import { UserContext } from "../../App";
import { PostContext } from "../../App";
// Components
import Comments from "./Comments";

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { ID, setID, userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);

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

  const renderPosts = ({ item }) => {
    if (item.userId === parseInt(ID)) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.post}>{item.body}</Text>
          <Text style={styles.text}>{item.userId}</Text>
          <TouchableOpacity>
            <Text>Comments</Text>
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
});

export default Posts;
