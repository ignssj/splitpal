import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PropsNavigationStack = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  Tab: undefined;
  CreateSplit: undefined;
  MySplits: undefined;
  SplitDetails: { splitId: string };
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
