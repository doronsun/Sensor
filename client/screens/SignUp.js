import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import SignCard from "../components/SignCard";
import { useDataProvider } from "../context/Data";
const SignUp = ({ navigation }) => {
  const { addUser } = useDataProvider();
  const addUserFunc = async (username,password,timeLapse) => {
    const addedUser = {
      username,
      password,
      timeLapse: Number(timeLapse),
      decibelHistory: [],
    };
    if (!username || !password || !timeLapse) return console.log("err");
    const user = await addUser(addedUser);
    if (!user) return alert("user exist");
    navigation.navigate("sign in");
  };
  return (
    <Card>
      <SignCard onPress={addUserFunc} text={"sign up"}>
        <Text style={styles.text}>sign up</Text>
      </SignCard>
    </Card>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
