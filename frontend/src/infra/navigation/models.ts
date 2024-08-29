import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Split } from "../../services/splits/types";
import { User } from "../../services/users/types";

export type PropsNavigationStack = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  Tab: undefined;
  CreateSplit: undefined;
  MySplits: undefined;
  SplitDetails: { split: Split };
  MyData: undefined;
  AttachPayment: undefined;
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
