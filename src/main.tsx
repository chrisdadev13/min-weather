import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import WeatherIcon from "./utils/weather-icon";

const Main: React.FC = () => {
  const KEY = "d4917a86ad00c8f97c306ecfa4544840";

  const [city, setCity] = useState<string>("");
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");

  const [weather, setWeather] = useState<string>("");
  const [icon, setIcon] = useState<string>("");

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      });
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.weather[0].main));
  };

  return (
    <View>
      <TextInput
        value={city}
        onChangeText={(newText) => setCity(newText)}
        returnKeyType="go"
        onSubmitEditing={getWeather}
        placeholder="Enter the city name..."
      />
      <Text>{weather}</Text>
      <WeatherIcon weatherId={"01d.png"} />
    </View>
  );
};

export default Main;
