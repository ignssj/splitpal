import { View } from "react-native";
import stylesheet from "./styles";
import React from "react";
import useThemedStyles from "../../hooks/useThemedStyles";
import { ICard } from "./types";

const Card: React.FC<ICard> = ({ children }) => {
  const styles = useThemedStyles(stylesheet);
  return <View style={styles.card}>{children}</View>;
};

export default Card;
