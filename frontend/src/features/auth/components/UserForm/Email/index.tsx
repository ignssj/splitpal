import React from "react";
import Input from "../../../../../components/Input";
import { IUserFormInput } from "../types";

const UserEmail: React.FC<IUserFormInput> = ({ value, onChange }) => {
  return <Input label='Email' value={value} onChangeText={onChange} />;
};

export default UserEmail;
