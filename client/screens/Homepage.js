import { StyleSheet, View, PermissionsAndroid } from "react-native";
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { useEffect } from "react";
const Homepage = ({ navigation }) => {
  const navigationFunc = (navigationName) => {
    navigation.navigate(navigationName);
  };

  const requestMicrophonePermission = async () => {
    const granted = await PermissionsAndroid.request("android.permission.RECORD_AUDIO");
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("you have permission");
    }
  };

  useEffect(() => {
    requestMicrophonePermission();
  }, []);
  return (
    <Card>
      <View style={styles.container}>
        <Button onPress={navigationFunc.bind(this, "sign in")} text={"sign in"}></Button>
        <Button onPress={navigationFunc.bind(this, "sign up")} text={"sign up"}></Button>
      </View>
    </Card>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 300,
    height: 450,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
