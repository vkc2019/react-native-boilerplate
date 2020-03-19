import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const ImageDetail = ({ title, src, score }) => {

    return <View>
        <Image source={src} />
        <Text>{title}</Text>
        <Text>Image Score - {score}</Text>
    </View>
};

const style = StyleSheet.create({

});

export default ImageDetail;
