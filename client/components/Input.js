import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({ placeholder, onChange,keyboardType }) => {
  return (
    <View style={styles.container}>
      <TextInput keyboardType={keyboardType} onChangeText={onChange} style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    textAlign: "center",
    width: 170,
    height: 40,
  },
});
