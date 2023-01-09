import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./screens/Homepage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import DataProvider from "./context/Data";
import UserPage from "./screens/UserPage";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <DataProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="homepage" component={Homepage} />
            <Stack.Screen name="sign in" component={SignIn} />
            <Stack.Screen name="sign up" component={SignUp} />
            <Stack.Screen name="user page" component={UserPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
