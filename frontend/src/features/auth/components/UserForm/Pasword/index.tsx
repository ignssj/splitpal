import React from "react";
import Input from "../../../../../components/Input";
import styles from "../styles";
import { IUserFormInput } from "../types";

const UserPassword: React.FC<IUserFormInput> = ({ value, onChange }) => {
  return <Input style={styles.input} label="Senha" value={value} onChangeText={onChange} />;
};

export default UserPassword;
