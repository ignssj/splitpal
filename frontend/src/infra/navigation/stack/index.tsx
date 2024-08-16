import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../models";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../../features/auth/LoginScreen";
import RegisterScreen from "../../../features/auth/RegisterScreen";
import TabRoutes from "../tabs";
import CreateSplit from "../../../features/split/CreateSplit";
import MySplits from "../../../features/split/MySplits";
import SplitDetails from "../../../features/split/SplitDetails";

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
        <Stack.Screen name='CreateSplit' component={CreateSplit} />
        <Stack.Screen name='MySplits' component={MySplits} />
        <Stack.Screen name='SplitDetails' component={SplitDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
