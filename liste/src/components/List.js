import React, { useState, useEffect } from "react";
// React Native
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const List = () => {
  const [countries, setCountries] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState("");

  const getCountries = () => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const clearState = () => {
    setSelected("");
    setIsClicked(false);
  };
  const updateState = (item) => {
    setSelected(item.name);
    setIsClicked(true);
  };

  const handlePress = (item) => {
    if (selected.toString() !== item.name.toString()) {
      updateState(item);
    } else {
      clearState();
    }
    /* if (selected !== item.numericCode) {
      setClick(true);
    } else if (selected === item.numericCode && click === true) {
      setClick(false);
    } else if (selected === item.numericCode && click === false) {
      setClick(true);
    } */
  };
  console.log(isClicked, selected);

  const renderCountry = ({ item }) => {
    /* console.log(item.numericCode);
    console.log("selected:", selected); */
    return (
      <View style={styles.list}>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Image style={styles.flag} source={{ uri: item.flag }}></Image>
        </TouchableOpacity>
        {isClicked && item.name.toString() === selected.toString() ? (
          <Text>Capital: {item.capital}</Text>
        ) : null}
      </View>
    );
  };

  return (
    <FlatList
      data={countries}
      renderItem={renderCountry}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 20,
  },
  flag: {
    height: 100,
    width: 200,
  },
});

export default List;
