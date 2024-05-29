import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const IconText = (pros) => {
    const {iconName, iconColor, bodyText, bodyTextStyles} = pros;
    const {container, textTheme} = styles;
    return(
        <View style={styles.container}>
            <Text><Icon name={iconName} size={50} color={iconColor}/></Text>
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme : {
        fontWeight: "bold",
    },
    container: {
        alignItems: "center",
    }
})
export default IconText;