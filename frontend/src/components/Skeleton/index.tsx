import React from "react";
import { Skeleton as MotiSkeleton } from "moti/skeleton";
import { useColorScheme } from "react-native";
import { ISkeleton } from "./types";

const Skeleton: React.FC<ISkeleton> = (props) => {
  const theme = useColorScheme();
  if (!theme) return;

  return <MotiSkeleton {...props} colorMode={theme} />;
};

export default Skeleton;
