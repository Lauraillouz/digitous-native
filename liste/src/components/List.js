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

const API_KEY = "671d055643a6eb59b7142a143bfc725d";

const List = () => {
  const [countries, setCountries] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState("");
  const [weather, setWeather] = useState([]);

  const getCountries = () => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  };

  const getWeather = (capital) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather([res.main.temp, res.weather[0].main]);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getWeather(selected);
    console.log(weather);
  }, [selected]);

  const clearState = () => {
    setSelected("");
    setIsClicked(false);
  };
  const updateState = (item) => {
    setSelected(item.capital);
    setIsClicked(true);
  };

  const handlePress = (item) => {
    if (selected.toString() !== item.capital.toString()) {
      updateState(item);
    } else {
      clearState();
    }
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
        {isClicked && item.capital.toString() === selected.toString() ? (
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
