import React from "react"
import { SafeAreaView, StyleSheet, Text, SectionList, StatusBar, ImageBackground, View } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import ListItem from "../ListItem";
import moment from "moment";


const UpcomingWeather = ({weatherData}) => {
    
    const grouppingByDay = (data) => {
        const sections = data.reduce((accumulate, item) =>{
            const date = item.dt_txt.split(" ")[0];
            if(!accumulate[date]){
                accumulate[date] = {title: date, data: []};
            }
            accumulate[date].data.push(item);
            return accumulate;
        }, {});
        return Object.values(sections);
    };
    
    const sections = grouppingByDay(weatherData);

    const renderItem = ({ item }) => (
        <ListItem
            style={days}
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    const renderSectionHeader = ({ section: {title} }) => (
        <Text style={styles.dayName}>{moment(title).format("dddd")}</Text>
    )

    const {container, image, days} = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../../assets/bg.jpg")} style={image}>
                <SectionList
                    sections={sections}
                    // data={weatherData}
                    renderItem={renderItem} keyExtractor={(item) => item.dt_txt}
                    renderSectionHeader={renderSectionHeader} 
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#1B1919",
    },
    image: {
        flex: 1
    },
    dayName:{
        backgroundColor: "#212020",
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
    },
    days: {
        flexDirection: "row",
    }
})
export default UpcomingWeather