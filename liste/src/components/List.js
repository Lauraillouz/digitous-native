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
  const [click, setClick] = useState(false);
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

  const handlePress = (item) => {
    selected === item.numericCode || selected === ""
      ? setClick((prevState) => !prevState)
      : null;
    setSelected(item.numericCode);
    console.log(click, selected);
  };

  const renderCountry = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Image style={styles.flag} source={{ uri: item.flag }}></Image>
        </TouchableOpacity>
        {click && item.numericCode === selected ? (
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
