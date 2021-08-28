import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
// Context
import { UserContext, PostContext } from "../../App";

const Profile = () => {
  const { ID, userInfo } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  const [numberOfPosts, setNumberOfPosts] = useState(0);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  const renderUser = ({ item }) => {
    if (parseInt(ID) === item.id) {
      setNumberOfPosts(posts.length);
    }
    if (parseInt(ID) === item.id) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Username: {item.username}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
          <Text style={styles.text}>You posted {numberOfPosts} articles</Text>
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
    marginTop: 200,
    flex: 1,
    padding: 24,
    borderRadius: 20,
    width: 300,
  },
  headline: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 48,
  },
  text: {
    margin: 6,
  },
});

export default Profile;
