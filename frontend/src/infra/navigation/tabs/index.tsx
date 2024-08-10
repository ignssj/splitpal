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
  const colorOnFocus = isDark ? darkTheme.colors.tertiary : lightTheme.colors.tertiary;
  const colorOnBlur = isDark ? darkTheme.colors.outline : lightTheme.colors.secondary;
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
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={24} color={focused ? colorOnFocus : colorOnBlur} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='search' size={24} color={focused ? colorOnFocus : colorOnBlur} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='person' size={24} color={focused ? colorOnFocus : colorOnBlur} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='settings' size={24} color={focused ? colorOnFocus : colorOnBlur} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
