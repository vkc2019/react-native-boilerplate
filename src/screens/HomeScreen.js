import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Button
      styles={styles.text}
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Components')}
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button
      onPress={() => navigation.navigate('ImageList')}
      title="Go to Image Demo"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
