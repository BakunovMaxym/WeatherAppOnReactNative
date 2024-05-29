import React from "react";
import CurrenWeather from "./screens/CurrentWeather";
import UpcomingWeather from "./screens/UpcomingWeather";
import City from "./screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  // console.log(weather);
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "grey",
      tabBarStyle: {
        backgroundColor: "#1B1919",
      },
      headerStyle: {
        backgroundColor: "#1B1919",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 40,
        color: "tomato",
        textShadowColor: 'tomato',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
      },
      headerTitleAlign: "center"
    }}>
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="cloudo"
              size={30}
              color={focused ? "tomato" : "grey"} />
          )
        }}
      >
        {() => <CurrenWeather weatherData={weather.list[0]} />}
      </Tab.Screen>

      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="clockcircleo"
              size={30}
              color={focused ? "tomato" : "grey"} />)
        }}>
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home"
              size={30}
              color={focused ? "tomato" : "grey"} />)
        }} >
        {() => <City weatherData={weather.city} />}
        </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs;