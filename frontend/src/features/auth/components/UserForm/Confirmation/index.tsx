import React from "react";
import Input from "../../../../../components/Input";
import { IUserFormPassword } from "../types";
import { TextInput } from "react-native-paper";

const UserPasswordConfirmation: React.FC<IUserFormPassword> = ({ value, visible, onChange, toggleVisibility }) => {
  return (
    <Input
      label='Confirme a senha'
      value={value}
      onChangeText={onChange}
      secureTextEntry={!visible}
      right={<TextInput.Icon icon={visible ? "eye" : "eye-off"} size={24} onPress={toggleVisibility} />}
    />
  );
};

export default UserPasswordConfirmation;
