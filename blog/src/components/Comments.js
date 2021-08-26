import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
// Context
import { UserContext } from "../../App";
import { PostContext } from "../../App";

const Comments = () => {
  const { ID, setID } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);

  const [comments, setComments] = useState([]);
  /*   console.log("post id is", posts.id); */

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts${ID}/comments`)
      .then((res) => res.json())
      .then((res) => {
        /* console.log(res); */
        setComments(res);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  const renderComments = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Name: </Text>
        <Text>{item.name}</Text>
        <Text style={styles.label}>Email: </Text>
        <Text>{item.email}</Text>
        <Text style={styles.label}>Comment: </Text>
        <Text>{item.body}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={comments}
      renderItem={renderComments}
      ketExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    padding: 24,
    margin: 12,
  },
  label: {
    fontWeight: "bold",
  },
});

export default Comments;
