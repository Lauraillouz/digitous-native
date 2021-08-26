import React from "react";
import { StyleSheet } from "react-native";
// Context
import { CommentsContext } from "../views/Timeline";

const BackButton = () => {
  const { setShowComments } = useContext(CommentsContext);

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
  btnReturn: {
    alignSelf: "flex-start",
    backgroundColor: "lightblue",
    borderRadius: 15,
    padding: 12,
  },
  btnText: {
    color: "#1D1D1D",
  },
});

export default BackButton;
