import React from "react";
import Input from "../../../../../components/Input";
import { IUserFormPassword } from "../types";
import { TextInput } from "react-native-paper";

const UserPassword: React.FC<IUserFormPassword> = ({ value, visible, toggleVisibility, onChange }) => {
  return (
    <Input
      label='Senha'
      value={value}
      onChangeText={onChange}
      secureTextEntry={!visible}
      right={<TextInput.Icon testID='VisibilityButton' icon={visible ? "eye" : "eye-off"} size={24} onPress={toggleVisibility} />}
    />
  );
};

export default UserPassword;
