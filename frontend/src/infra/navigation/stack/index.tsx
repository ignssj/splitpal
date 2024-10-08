import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../models";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../../features/auth/LoginScreen";
import RegisterScreen from "../../../features/auth/RegisterScreen";
import TabRoutes from "../tabs";
import CreateSplit from "../../../features/split/CreateSplit";
import SplitDetails from "../../../features/split/SplitDetails";
import Feed from "../../../features/account/Feed";

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
        <Stack.Screen name='Feed' component={Feed} />
        <Stack.Screen name='SplitDetails' component={SplitDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
