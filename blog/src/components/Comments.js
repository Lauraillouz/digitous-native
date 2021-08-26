import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Touchable,
} from "react-native";
// Context
import { UserContext } from "../../App";
import { PostIdContext } from "../views/Timeline";

const Comments = () => {
  const { ID } = useContext(UserContext);
  const { postId } = useContext(PostIdContext);

  const [comments, setComments] = useState([]);

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts${postId}/comments`)
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  /*   const renderComments = ({ item }) => {
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
  }; */

  return (
    <View>
      <Text>Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    margin: 32,
  },
  label: {
    fontWeight: "bold",
  },
});

export default Comments;

{
  /* <FlatList
      data={comments}
      renderItem={renderComments}
      ketExtractor={(item, index) => index}
    /> */
}
