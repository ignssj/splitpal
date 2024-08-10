import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../models";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../../features/auth/LoginScreen";
import RegisterScreen from "../../../features/auth/RegisterScreen";
import HomeScreen from "../../../features/home/HomeScreen";
import TabRoutes from "../tabs";

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='Tab' component={TabRoutes} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
