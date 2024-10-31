import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginScreen";
import RegisterPage from "./src/screens/RegisterScreen";
import ForgetPasswordScreen from "./src/screens/ForgotPasswordScreen";
import { Colors } from "./src/theme/Colors";
import { Image, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("./src/assets/images/chevron-forward-outline.png")} // İkonun dosya yolu
                  style={{ width: 24, height: 24, marginLeft: 16 }} // İkon boyutları ve stil
                />
              </TouchableOpacity>
            ),
            headerTitle: "Forget Password",
            headerTitleStyle: {
              color: "white", // Başlık rengi
              fontSize: 18, // Başlık font boyutu
            },
            headerStyle: {
              backgroundColor: "#1F274A", // Arka plan rengi
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
