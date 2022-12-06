import React, { ReactComponentElement, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import sunIcon from "../assets/01d.png";
import cloudIcon from "../assets/02d.png";

const WeatherIcon = ({ weatherId }: any) => {
  function testeo(src: any) {
    if (src === "01d.png") {
      return sunIcon;
    } else {
      return cloudIcon;
    }
  }

  return (
    <View>
      <Image source={testeo(weatherId)} />
    </View>
  );
};

export default WeatherIcon;
