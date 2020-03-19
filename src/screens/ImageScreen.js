import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'
import ImageDetail from '../Components/ImageDetail';


const ImageScreen = () => {
    const locations = [
        { title: "Forest", score: 9, src: require('../../assets/img/forest.jpg') },
        { title: "Beach", score: 9, src: require('../../assets/img/beach.jpg') },
        { title: "Mountain", score: 9, src: require('../../assets/img/mountain.jpg') }
    ];
    return <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={locations => locations.title}
        data={locations}
        renderItem={({ item }) => {
            return <ImageDetail title={item.title} score={item.score} src={item.src} />
        }}
    />
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ImageScreen;