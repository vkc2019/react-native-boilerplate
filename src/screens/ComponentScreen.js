import React from 'react'
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {

    const title = <Text style={ss.title}>Getting Started with react native</Text>;
    const description = <Text style={ss.description}>My name is Stephen</Text>;

    return <View>
        {title}
        {description}
    </View>
};


const ss = StyleSheet.create({
    title: {
        fontSize: 45,
        color: 'orange'
    },
    description: {
        fontSize: 30,
        color: 'black'
    }
});

export default ComponentScreen;