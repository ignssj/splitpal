import React from "react";
import { IScreen } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyle from "./styles";
import useThemedStyles from "../../hooks/useThemedStyles";
import View from "../View";

const Screen: React.FC<IScreen> = ({ children }) => {
  const styles = useThemedStyles(createStyle);
  return (
    <View>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

export default Screen;
