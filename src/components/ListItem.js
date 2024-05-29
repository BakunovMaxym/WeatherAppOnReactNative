import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { weatherType } from "./utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp, dateTextWrapper } = styles;
    return (
        <View style={item}>
            <Text><Icon name={weatherType[condition].Icon} size={30} color="white" /></Text>
            <View style={styles.dateTextWrapper}>
                {/* <Text style={date}>{moment(dt_txt).format("dddd")}</Text> */}
                <Text style={date}>{moment(dt_txt).format("h:mm a")}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "grey",
        borderRadius: 50,
        opacity: 0.8,
    },
    temp: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    date: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    dateTextWrapper: {
        flexDirection: "column",
    }
})
export default ListItem;