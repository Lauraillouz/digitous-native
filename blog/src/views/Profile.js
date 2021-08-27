import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
// Context
import { UserContext, PostContext } from "../../App";

const Profile = () => {
  const { ID, userInfo } = useContext(UserContext);
  const { posts } = useContext(PostContext);

  const numberOfPosts = () => {
    if (parseInt(ID) === userInfo.id) {
      let numberOfPosts = posts.length;
      return numberOfPosts;
    }
  };

  const renderUser = ({ item }) => {
    if (parseInt(ID) === item.id) {
      return (
        <View style={styles.container}>
          <Text>Name: {item.name}</Text>
          <Text>Username: {item.username}</Text>
          <Text>Email: {item.email}</Text>
          <Text>You posted {numberOfPosts} articles</Text>
        </View>
      );
    }
  };

  return (
    <View>
      <Text style={styles.headline}>Profile</Text>
      <FlatList
        data={userInfo}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 100,
    flex: 1,
    padding: 24,
    borderRadius: 20,
  },
  headline: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 48,
  },
});

export default Profile;
