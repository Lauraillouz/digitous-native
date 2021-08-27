import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
// Context
import { PostIdContext, CommentsContext } from "../views/Timeline";

const Comments = () => {
  const { postId } = useContext(PostIdContext);
  const { numberOfComments, setNumberOfComments } = useContext(CommentsContext);

  const [comments, setComments] = useState([]);

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      });
  };

  useEffect(() => {
    getComments();
  }, []);
  console.log("postid is", postId);

  useEffect(() => {
    setNumberOfComments(comments.length);
  }, [comments]);

  const renderComments = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Name: </Text>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.label}>Email: </Text>
        <Text style={styles.text}>{item.email}</Text>
        <Text style={styles.label}>Comment: </Text>
        <Text style={styles.text}>{item.body}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={comments}
      renderItem={renderComments}
      ketExtractor={(item, index) => index.toString()}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 200,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "lightblue",
    marginTop: 50,
    marginLeft: 32,
    marginRight: 32,
    borderRadius: 20,
  },
  label: {
    fontWeight: "bold",
  },
  text: {
    marginBottom: 12,
  },
});

export default Comments;
