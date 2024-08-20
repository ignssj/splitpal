import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { ISplitList } from "./types";
import { Split } from "../../../../services/splits/types";
import SplitItem from "./SplitItem";
import styles from "./styles";

const SplitList: React.FC<ISplitList> = ({ data }) => {
  const RenderItem = useCallback(({ item }: { item: Split }) => <SplitItem split={item} />, [data]);

  return <FlatList data={data} keyExtractor={(item) => item.id} renderItem={RenderItem} contentContainerStyle={styles.listContent} />;
};

export default SplitList;
