import React from "react";
import Input from "../../../../../components/Input";
import styles from "../styles";
import useThemedStyles from "../../../../../hooks/useThemedStyles";
import { IUserFormInput } from "../types";

const UserEmail: React.FC<IUserFormInput> = ({ value, onChange }) => {
  return <Input style={styles.input} label="Email" value={value} onChangeText={onChange} />;
};

export default UserEmail;
