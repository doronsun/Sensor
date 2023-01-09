import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

import { useDataProvider } from "../context/Data";

const UserPage = () => {
  const {
    subscription2,
    _subscribe,
    _unsubscribe,
    _slow,
    _fast,
    x,
    y,
    z,
    setData,
    toggleListener,
    pressure,
    relativeAltitude,
    subscription,
    user,
    start,
    createAudioPermissionAndRecord,
    isStart,
    stop,
  } = useDataProvider();
  console.log(pressure);

  useEffect(() => {
    // createAudioPermissionAndRecord();
  }, [user]);
  return (
    <Card>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>has decibel history ?</Text>
          <Pressable onPress={isStart ? stop : start}>
            <View style={styles.button}>
              <Text style={styles.button_text}>
                {!isStart ? "start" : "pause"}
              </Text>
            </View>
          </Pressable>
          <Text style={styles.text}>current</Text>
          {/* <Pressable onPress={clickHandler}>
            <View style={styles.test}>
              <Text>test</Text>
            </View>
          </Pressable> */}
          <Text style={styles.text}>0</Text>
          <View style={styles.container_decibel}>
            <Text style={styles.text}>min</Text>
            <Text style={styles.text}>max</Text>
          </View>
          <View style={styles.container_decibel}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>0</Text>
          </View>
        </View>
        <View style={styles.decibel_graph_container}></View>
        {/* Barometer*/}

        <View style={styles.wrapper}>
          <Text style={styles.wrapper}>
            Barometer: Listener {subscription ? "ACTIVE" : "INACTIVE"}
          </Text>
          <Text style={styles.wrapper}>Pressure: {pressure} hPa</Text>
          <Text style={styles.wrapper}>
            Relative Altitude:{" "}
            {Platform.OS === "ios"
              ? `${relativeAltitude} m`
              : `Only available on iOS`}
          </Text>
          <TouchableOpacity onPress={toggleListener} style={styles.button}>
            <Text>Toggle listener</Text>
          </TouchableOpacity>
        </View>
        { /*Accelerometer*/}

        <View style={styles.container}>
          <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
          <Text style={styles.text}>x: {x}</Text>
          <Text style={styles.text}>y: {y}</Text>
          <Text style={styles.text}>z: {z}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={subscription2 ? _unsubscribe : _subscribe} style={styles.button}>
              <Text>{subscription2 ? 'On' : 'Off'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
              <Text>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_fast} style={styles.button}>
              <Text>Fast</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </Card>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 400,
    width: 300,
    backgroundColor: "black",
    borderRadius: 10,
  },
  text: {
    color: "red",
    fontSize: 16,
  },
  container_decibel: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  decibel_graph_container: {
    backgroundColor: "red",
    width: 350,
    height: 250,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 5,
    width: 90,
    height: 40,
    textAlign: "center",
    borderRadius: 10,
  },
  button_text: {
    color: "white",
    textAlign: "center",
  },
  test: {
    width: 150,
    height: 40,
    backgroundColor: "white",
  },

  wrapper: {
    flex: 1,
    color: "white",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
