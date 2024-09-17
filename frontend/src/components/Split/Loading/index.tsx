import React from "react";
import Skeleton from "../../../../../components/Skeleton";
import styles from "../styles";
import { View } from "react-native";

const SplitLoading = () => {
  return (
    <View style={styles.loadingContainer}>
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
