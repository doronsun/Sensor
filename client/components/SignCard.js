import { StyleSheet, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
const SignCard = ({ text, onPress, children }) => {
  const [pickersSelected, setPickerSelected] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [timeLapse, setTimeLapse] = useState("");

  const handlePress = async () => {
    onPress(username, password, timeLapse);
  };

  return (
    <View style={styles.container}>
      {children}
      <Input onChange={setUsername} placeholder={"username"} />
      <Input onChange={setPassword} placeholder={"password"} />
      {text === "sign up" && (
        <>
          <Input keyboardType={"number-pad"} onChange={setTimeLapse} placeholder={"time lapse length"} />
          <View style={styles.picker_container}>
            <Picker
              dropdownIconColor={"black"}
              selectedValue={pickersSelected}
              onValueChange={(value) => {
                setPickerSelected(value);
              }}
            >
              <Picker.Item label="seconds" value={4} />
              <Picker.Item label="minuets" value={240} />
              <Picker.Item label="hours" value={14400} />
              <Picker.Item label="days" value={345600} />
            </Picker>
          </View>
        </>
      )}
      <Button onPress={handlePress} text={text} />
    </View>
  );
};

export default SignCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 500,
    width: 300,
    backgroundColor: "red",
    borderRadius: 10,
  },
  picker_container: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    width: 130,
  },
});
