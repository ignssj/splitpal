import React, { useCallback } from "react";
import SplitItem from "../Item";
import styles from "../styles";
import { FlatList, TouchableOpacity } from "react-native";
import { ISplitList } from "../types";
import { Split } from "../../../../../services/splits/types";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../../infra/navigation/models";

const SplitList: React.FC<ISplitList> = ({ data }) => {
  const navigation = useNavigation<PropsStack>();

  const handlePress = (split: Split) => {
    navigation.navigate("SplitDetails", { split });
  };

  const RenderItem = useCallback(
    ({ item }: { item: Split }) => (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <SplitItem split={item} />
      </TouchableOpacity>
    ),
    [data]
  );

  return <FlatList data={data} keyExtractor={(item) => item.id} renderItem={RenderItem} contentContainerStyle={styles.listContent} />;
};

export default SplitList;
