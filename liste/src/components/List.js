import React, { useState } from "react";
// React Native
import { View, Text, FlatList, StyleSheet } from "react-native";

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
  getCountries();
  console.log(countries);

  const renderCountry = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text>Country: {item.name}</Text>
        <Text>Capital: {item.capital}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={countries}
      renderItem={renderCountry}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 20,
  },
});

export default List;
