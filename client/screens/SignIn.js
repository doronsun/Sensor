import { Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import SignCard from "../components/SignCard";
import { useDataProvider } from "../context/Data";

const SignIn = ({ navigation }) => {
  const { selectedUser,setUser } = useDataProvider();

  const userCheck = async (username, password) => {
    if (!username || !password) return console.log("err");
    const userToFetch = { username, password };
    const user = await selectedUser(userToFetch);
    if (!user) return alert("not exist");
    setUser(user)
    navigation.navigate("user page");
  };
  return (
    <Card>
      <SignCard text={"sign in"} onPress={userCheck}>
        <Text style={styles.text}>sign in</Text>
      </SignCard>
    </Card>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
