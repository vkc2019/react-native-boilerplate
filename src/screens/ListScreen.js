import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import ImageDetail from '../Components/ImageDetail';


const ListScreen = () => {

    const friends = [
        { name: "Friend #1", age: '10' },
        { name: "Friend #2", age: '2' },
        { name: "Friend #3", age: '3' },
        { name: "Friend #4", age: '4' },
        { name: "Friend #5", age: '5' },
        { name: "Friend #6", age: '6' },
        { name: "Friend #7", age: '7' },
    ];

    return <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={friends => friends.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text > {item.name} </Text>
        }}
    />
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;