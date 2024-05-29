import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

const ErrorItems = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.message}>Sorry, somthing went wrong!</Text>
            <Text><Icon name={"frown"} size={100} color="white" /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    message:{
        fontSize: 30,
        color: "white",
        marginHorizontal: 10,
        textAlign: "center"
    }
})

export default ErrorItems;