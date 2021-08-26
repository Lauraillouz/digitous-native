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
import { UserContext, PostContext } from "../../App";
import { CommentsContext } from "../views/Timeline";

const Comments = () => {
  const { ID, setID } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const { showComments, setShowComments } = useContext(CommentsContext);

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

  /*   const renderComments = ({ item }) => {
    return (
      <View>
        <TouchableOpacity style={styles.btnReturn}>
          <Text style={styles.btnText}>Back to Posts</Text>
        </TouchableOpacity>
      </View>
    );
  }; */

  const handlePress = () => {
    setShowComments(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnReturn} onPress={handlePress}>
        <Text style={styles.btnText}>Back to Posts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    padding: 24,
    margin: 32,
  },
  label: {
    fontWeight: "bold",
  },
  btnReturn: {
    backgroundColor: "#1D1D1D",
    borderRadius: 15,
    padding: 12,
  },
  btnText: {
    color: "white",
  },
});

export default Comments;
{
  /* <View style={styles.container}>
        <Text style={styles.label}>Name: </Text>
        <Text>{item.name}</Text>
        <Text style={styles.label}>Email: </Text>
        <Text>{item.email}</Text>
        <Text style={styles.label}>Comment: </Text>
        <Text>{item.body}</Text>
      </View> */
}

{
  /* <FlatList
      data={comments}
      renderItem={renderComments}
      ketExtractor={(item, index) => index}
    /> */
}
