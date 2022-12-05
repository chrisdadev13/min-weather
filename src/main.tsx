import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";

const Main: React.FC = () => {
  const KEY = "d4917a86ad00c8f97c306ecfa4544840";

  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`
    ).then((response) => response.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      })
  },[city])

  const getWeather = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data.weather[0].main))
    }

  return (
    <View>
      <Text>Main</Text>
      <TextInput
        value={city}
        onChangeText={(newText) => setCity(newText)}
        returnKeyType="go"
        onSubmitEditing={getWeather}
        placeholder="Enter the city name..."
      />
      <Text>{weather}</Text>
    </View>
  );
};

export default Main;
