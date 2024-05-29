import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import IconText from "../IconText";
import moment from "moment";

const City = ({weatherData}) => {
    const {container, cityName, cityText, countryName, popWrapper, popText, riseText, riseWrapper, bg, rowLayout} = styles;
    const {name, country, population, sunrise, sunset} = weatherData
    console.log("City: " + weatherData)
    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../../assets/city_bg.jpg")} style={bg}>
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={popWrapper}>
                    <Text><Icon name="user" size={70} color="red"/></Text>
                    <Text style={popText}>Population:</Text>
                    <Text style={popText}>{population}</Text>
                </View>
                <View style={[riseWrapper, rowLayout]}>
                    <IconText iconName={"sunrise"} iconColor={"white"} bodyText={moment(sunrise).format("h:mm:ss a")} bodyTextStyles={riseText}/>
                    <IconText iconName={"sunset"} iconColor={"white"} bodyText={moment(sunset).format("h:mm:ss a")} bodyTextStyles={riseText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg:{
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
    },
    popWrapper: {
        justifyContent: "center",
        marginTop: 30,
        flexDirection: "column",
        alignItems: "center",
    },
    popText: {
        fontSize: 25,
        marginLeft: 5,
        color: "red",
        fontWeight: "bold",
    },
    riseWrapper: {
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseText: {
        fontSize: 20,
        color: "white",
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
    }
})
export default City;