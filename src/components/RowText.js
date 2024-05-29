import React from "react";
import { View, Text,  } from "react-native";

const RowText = (props) => {
    const{message1, message2, containerStyles, fMessageStyles, sMessageStyles} = props;
    return(
        <View style={containerStyles}>
          <Text style={fMessageStyles}>{message1} </Text>
          <Text style={sMessageStyles}>{message2}</Text>
        </View>
    )
}

export default RowText;