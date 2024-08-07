import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../models";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../../features/auth/LoginScreen";
import RegisterScreen from "../../../features/auth/RegisterScreen";

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
