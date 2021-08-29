import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
// Context
import { NewPostContext } from "../components/Home";
import { NavContext, UserContext, PostContext } from "../../App";

const AddPost = () => {
  const { posts } = useContext(PostContext);
  const {
    newPostTitle,
    setNewPostTitle,
    newPostBody,
    setNewPostBody,
    setNewPostAdded,
    newPostAdded,
  } = useContext(NewPostContext);
  const { nav, setNav } = useContext(NavContext);
  const { ID } = useContext(UserContext);

  const handleChangeTitle = (val) => {
    setNewPostTitle(val);
  };

  const handleChangeBody = (val) => {
    setNewPostBody(val);
  };

  useEffect(() => {
    setNewPostAdded(false);
  }, []);

  const addPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${ID}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: newPostTitle,
        body: newPostBody,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        posts.unshift(res);
      });
  };

  const handlePress = () => {
    if (newPostTitle.length >= 5 && newPostBody.length > 10) {
      addPost();
      setNewPostAdded(true);
      setNav("timeline");
      console.log("posts in AddPost", newPostAdded);
    } else if (newPostTitle.length < 5) {
      Alert.alert(
        "The title of your post needs to contain at least 5 characters"
      );
    } else if (newPostBody < 10) {
      Alert.alert(
        "The body of your new post needs to contain at least 10 characters"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Add a new post</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.inputTitle} onChangeText={handleChangeTitle} />
      <Text style={styles.label}>Your post:</Text>
      <TextInput
        multiline={true}
        numberOfLines={8}
        style={styles.inputPost}
        onChangeText={handleChangeBody}
      />
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 32,
  },
  inputPost: {
    margin: 16,
    width: 300,
    borderWidth: 2,
    padding: 12,
    borderRadius: 20,
    borderColor: "#EE769F",
    color: "white",
    height: 200,
  },
  inputTitle: {
    marginTop: 16,
    marginBottom: 32,
    width: 300,
    borderWidth: 2,
    padding: 12,
    borderRadius: 15,
    borderColor: "#EE769F",
    color: "white",
  },
  headline: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 100,
  },
  btn: {
    backgroundColor: "#E1F5AF",
    borderRadius: 15,
    padding: 12,
  },
  label: {
    color: "white",
    left: 0,
    alignSelf: "flex-start",
    marginLeft: 40,
  },
});

export default AddPost;
