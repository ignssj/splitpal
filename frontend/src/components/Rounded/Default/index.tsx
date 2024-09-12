import React from "react";
import stylesheet from "../styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import { Ionicons } from "@expo/vector-icons";
import { IRoundedDefault } from "../types";
import { TouchableOpacity } from "react-native";

const RoundedDefault: React.FC<IRoundedDefault> = ({ icon, action }) => {
  const styles = useThemedStyles(stylesheet);
  return (
    <TouchableOpacity testID='RoundedDefault' onPress={action} style={styles.container}>
      <Ionicons name={icon} size={20} color={styles.icon.color} />
    </TouchableOpacity>
  );
};

export default RoundedDefault;
