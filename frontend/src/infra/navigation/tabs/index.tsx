import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreateSplit from "../../../features/split/CreateSplit";
import MySplits from "../../../features/split/MySplits";
import LoginScreen from "../../../features/auth/LoginScreen";
import MyData from "../../../features/account/MyData";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Alert, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../../theme";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/slices/usersSlice";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const colorOnFocus = isDark ? darkTheme.colors.tertiary : lightTheme.colors.tertiary;
  const colorOnBlur = isDark ? darkTheme.colors.outline : lightTheme.colors.secondary;
  const dispatch = useAppDispatch();

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
          tabBarIcon: ({ focused }) => <Ionicons name='add-circle-sharp' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
      <Tab.Screen
        name='Meus dados'
        component={MyData}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='person' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
      <Tab.Screen
        name='Logout'
        component={LoginScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert("Sair da conta", "Deseja realmente sair da conta?", [
              {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel",
              },
              {
                text: "Sair",
                onPress: () => {
                  dispatch(logout());
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "LoginScreen" }],
                  });
                },
                style: "destructive",
              },
            ]);
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name='log-out' size={24} color={focused ? colorOnFocus : colorOnBlur} />,
        }}
      />
    </Tab.Navigator>
  );
}
