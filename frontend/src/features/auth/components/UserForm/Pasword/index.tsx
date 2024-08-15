import React from "react";
import Input from "../../../../../components/Input";
import { IUserFormInput } from "../types";
import { TextInput } from "react-native-paper";

const UserPassword: React.FC<IUserFormInput> = ({ value, onChange }) => {
  const [hide, setHide] = React.useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setHide((prev) => !prev);
  };

  return (
    <Input
      label='Senha'
      value={value}
      onChangeText={onChange}
      secureTextEntry={hide}
      right={<TextInput.Icon icon='eye' size={24} onPress={togglePasswordVisibility} />}
    />
  );
};

export default UserPassword;
