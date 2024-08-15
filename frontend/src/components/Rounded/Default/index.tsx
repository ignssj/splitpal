import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IRoundedDefault } from "../types";
import { TouchableOpacity } from "react-native";
import stylesheet from "../styles";
import useThemedStyles from "../../../hooks/useThemedStyles";

const RoundedDefault: React.FC<IRoundedDefault> = ({ icon, action }) => {
  const styles = useThemedStyles(stylesheet);
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <Ionicons name={icon} size={20} color={styles.icon.color} />
    </TouchableOpacity>
  );
};

export default RoundedDefault;
