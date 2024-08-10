import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../../features/home/HomeScreen";
import React from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../theme";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            backgroundColor: isDark ? darkTheme.colors.background : lightTheme.colors.background,
            borderColor: isDark ? darkTheme.colors.surface : lightTheme.colors.surface,
          },
        ],
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Search' component={HomeScreen} />
      <Tab.Screen name='Profile' component={HomeScreen} />
      <Tab.Screen name='Settings' component={HomeScreen} />
    </Tab.Navigator>
  );
}
