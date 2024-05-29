import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import ErrorItems from "./src/components/ErrorItems";

const App = () => {
  const [error, weather, loading] = useGetWeather();
  console.log(error, weather, loading);

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  if (error) {
    return (
      <ErrorItems />
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue"></ActivityIndicator>
      <Text style={styles.errStyle}>Taking your location!</Text>
      <Text style={styles.errStyle}>Please wait</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  errStyle: {
    alignSelf: "center",
    fontSize: 25,
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  }
});

export default App;
