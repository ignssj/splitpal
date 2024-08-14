import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { ISplitList } from "./types";
import SplitItem from "./SplitItem";
import { Split } from "../../../../services/splits/types";
import styles from "./styles";

const SplitList: React.FC<ISplitList> = ({ list }) => {
  const RenderItem = useCallback(({ item }: { item: Split }) => <SplitItem split={item} />, [list]);

  return <FlatList data={list} keyExtractor={(item) => item.id} renderItem={RenderItem} contentContainerStyle={styles.listContent} />;
};

export default SplitList;
