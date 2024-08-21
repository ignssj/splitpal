import { View } from "react-native";
import stylesheet from "./styles";
import React from "react";
import useThemedStyles from "../../hooks/useThemedStyles";
import { ICard } from "./types";
import Spaced from "../Spaced";
import Title from "../Title";

const Card: React.FC<ICard> = ({ children, title, style }) => {
  const styles = useThemedStyles(stylesheet);
  return (
    <View style={[styles.card, style]}>
      <Spaced gap={10}>
        {title && <Title>{title}</Title>}
        {children}
      </Spaced>
    </View>
  );
};

export default Card;
