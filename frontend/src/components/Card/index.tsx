import { View } from "react-native";
import stylesheet from "./styles";
import React from "react";
import useThemedStyles from "../../hooks/useThemedStyles";
import { ICard } from "./types";
import Spaced from "../Spaced";

const Card: React.FC<ICard> = ({ children, style }) => {
  const styles = useThemedStyles(stylesheet);
  return (
    <View style={[styles.card, style]}>
      <Spaced gap={10}>{children}</Spaced>
    </View>
  );
};

export default Card;
