import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ text, onPress,style }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container }>
        <Text style={styles.button_text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {},
  button_text: {
    padding: 10,
    backgroundColor: "black",
    color: "white",
    width : 100,
    textAlign : 'center',
    borderRadius: 10,
  },


});
