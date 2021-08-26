import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
// Context
import { PostContext } from "../../App";
import { UserContext } from "../../App";

const Home = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { ID, setID } = useContext(UserContext);

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

export default Home;
