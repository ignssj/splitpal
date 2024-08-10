import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PropsNavigationStack = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  Tab: undefined;
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
