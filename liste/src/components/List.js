import React, { useState, useEffect } from "react";
// React Native
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const List = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCountries(res);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const renderCountry = ({ item }) => {
    return (
      <View style={styles.list}>
        <Image style={styles.flag} source={{ uri: item.flag }}></Image>
        <Text>Country: {item.name}</Text>
        <Text>Capital: {item.capital}</Text>
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
