import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Split } from "../../services/splits/types";

export type PropsNavigationStack = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  Tab: undefined;
  CreateSplit: undefined;
  MySplits: undefined;
  SplitDetails: { split: Split };
  MyData: undefined;
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
