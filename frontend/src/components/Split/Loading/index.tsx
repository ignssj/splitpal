import React from "react";
import styles from "../styles";
import Skeleton from "../../Skeleton";
import { View } from "react-native";

const SplitLoading = () => {
  return (
    <View testID='SplitLoading' style={styles.loadingContainer}>
      <Skeleton width={"50%"} height={25} />
      <Skeleton width={"90%"} height={100} />
      <Skeleton width={"90%"} height={100} />
      <Skeleton width={"50%"} height={25} />
      <Skeleton width={"90%"} height={100} />
      <Skeleton width={"90%"} height={100} />
      <Skeleton width={"90%"} height={100} />
    </View>
  );
};

export default SplitLoading;
