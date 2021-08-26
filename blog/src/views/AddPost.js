import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
// Context
/* import { NewPostContext } from "./Timeline"; */

const AddPost = () => {
  /*   const { setNewPostTitle, setNewPostBody } = useContext(NewPostContext);
   */
  /*   const handleChangeTitle = (val) => {
    setNewPostTitle(val);
  };
  const handleChangeBody = (val) => {
    setNewPostBody(val);
  }; */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new post</Text>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.inputTitle} /* onChangeText={handleChangeTitle} */
      />
      <Text style={styles.label}>Your post:</Text>
      <TextInput
        multiline={true}
        numberOfLines={8}
        style={styles.inputPost}
        /* onChangeText={handleChangeBody} */
      />
      <TouchableOpacity style={styles.btn}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputPost: {
    margin: 16,
    width: 300,
    borderWidth: 2,
    padding: 24,
    borderRadius: 15,
    borderColor: "lightblue",
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
    borderColor: "lightblue",
    color: "white",
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 100,
  },
  btn: {
    backgroundColor: "lightblue",
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
