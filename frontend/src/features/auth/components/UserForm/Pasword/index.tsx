import React from "react";
import Input from "../../../../../components/Input";
import styles from "../styles";
import { IUserFormInput } from "../types";
import { TextInput } from "react-native-paper";

const UserPassword: React.FC<IUserFormInput> = ({ value, onChange }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Input
      style={styles.input}
      label='Senha'
      value={value}
      onChangeText={onChange}
      secureTextEntry={visible}
      right={<TextInput.Icon icon='eye' size={24} onPress={togglePasswordVisibility} />}
    />
  );
};

export default UserPassword;
