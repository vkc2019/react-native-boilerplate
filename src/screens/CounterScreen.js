import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'


const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button
            title="Increase"
            style={style.item}
            onPress={() => { setCounter(counter + 1) }}
        />
        <Button
            title="Descrease"
            style={style.item}
            onPress={() => { setCounter(counter - 1) }}
        />
        <Text>Current Score: {counter}</Text>
    </View >
};

const style = StyleSheet.create({
    item: {
        backgroundColor: 'red',
        color: 'blue'
    }
});

export default CounterScreen;