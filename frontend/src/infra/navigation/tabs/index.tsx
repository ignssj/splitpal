import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreateSplit from "../../../features/split/CreateSplit";
import MySplits from "../../../features/split/MySplits";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        name='Inicio'
        component={MySplits}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='home' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
      <Tab.Screen
        name='Novo'
        component={CreateSplit}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='add' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={CreateSplit}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='person' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
      <Tab.Screen
        name='Configurações'
        component={CreateSplit}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='settings' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
    </Tab.Navigator>
  );
}
