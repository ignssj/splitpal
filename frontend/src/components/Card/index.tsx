import { View } from "react-native";
import stylesheet from "./styles";
import React from "react";
import useThemedStyles from "../../hooks/useThemedStyles";
import { ICard } from "./types";
import Spaced from "../Spaced";

const Card: React.FC<ICard> = ({ children }) => {
  const styles = useThemedStyles(stylesheet);
  return (
    <View style={styles.card}>
      <Spaced gap={10}>{children}</Spaced>
    </View>
  );
};

export default Card;
