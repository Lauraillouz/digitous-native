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
import { NewPostContext } from "../components/Home";

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { ID } = useContext(UserContext);
  const { setShowComments, numberOfComments } = useContext(CommentsContext);
  const { setPostId } = useContext(PostIdContext);
  const { newPostTitle, newPostBody } = useContext(NewPostContext);

  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${ID}/posts`)
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

  const renderPosts = ({ item }) => {
    if (item.userId === ID) {
      return (
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
            <TouchableOpacity
              onPress={() => handlePress(item.id)}
              style={styles.btnComments}
            >
              <Text style={styles.text}>Comments ({numberOfComments})</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View>
      {newPostTitle && newPostBody ? (
        <View style={styles.postsContainer}>
          <Text style={styles.lastPost}>Your new post!</Text>
          <Text style={styles.title}>{newPostTitle}</Text>
          <Text>{newPostBody}</Text>
        </View>
      ) : null}
      <FlatList
        data={posts}
        renderItem={renderPosts}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 200,
  },
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
  postsContainer: {
    margin: 32,
    backgroundColor: "white",
    padding: 24,
    borderRadius: 20,
  },
  lastPost: {
    fontSize: 12,
    marginBottom: 12,
    fontStyle: "italic",
    color: "grey",
  },
});

export default Posts;
