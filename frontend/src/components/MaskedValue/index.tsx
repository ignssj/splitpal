import React from "react";
import Input from "../Input";
import { TextInputMask } from "react-native-masked-text";
import { IMaskedInput } from "./types";

const MaskedValue: React.FC<IMaskedInput> = ({ masked, onChangeText }) => {
  return (
    <TextInputMask
      type='money'
      value={masked}
      onChangeText={onChangeText}
      keyboardType='decimal-pad'
      customTextInput={Input}
      customTextInputProps={{ label: "Valor" }}
      includeRawValueInChangeText
      options={{
        precision: 2,
        separator: ",",
        delimiter: ".",
        unit: "R$",
        suffixUnit: "",
      }}
    />
  );
};

export default MaskedValue;
