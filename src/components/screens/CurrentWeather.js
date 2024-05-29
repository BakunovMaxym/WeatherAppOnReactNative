import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import RowText from "../RowText";
import { weatherType } from "../utilities/weatherType";

const CurrenWeather = ({weatherData}) => {
  const{wrapper, container, tempStyle, feels, highLowWrapper, highLow, bodyWrapper, description, message, bg, transp} = styles;
  const { main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData;

  const weatherCondition = /*"Thunderstorm"*/weather[0].main;

  // console.log("Current weather: " + weatherType[weatherCondition].imageBackground)
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <ImageBackground source={`${weatherType[weatherCondition].imageBackground}`} style={bg}>
        <View style={transp}>

        </View>
      <View style={container}>
        <Text><Icon name={weatherType[weatherCondition].Icon} size={120} color="white" /></Text>
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText message1={`High: ${temp_max}°`} message2={`Low: ${temp_min}°`} containerStyles={highLowWrapper} fMessageStyles={highLow} sMessageStyles={highLow} />
      </View>
      <RowText message1={weather[0].description} message2={weatherType[weatherCondition].message} containerStyles={bodyWrapper} fMessageStyles={description} sMessageStyles={message} />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bg:{
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 150,
    // backgroundColor: "grey",
    // opacity: 0.2,
  },
  tempStyle: {
    color: "white",
    fontSize: 55,
  },
  feels: {
    color: "white",
    fontSize: 35,
  },
  highLow: {
    color: "white",
    fontSize: 27,
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    // spaceBetween:
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 48,
  },
  description: {
    fontSize: 48,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  message: {
    fontSize: 30,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 7,
  },
  transp: {
    flex: 1,
    backgroundColor: "grey",
    opacity: 0.3,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  }
})
export default CurrenWeather;