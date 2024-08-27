import React, { useCallback } from "react";
import SplitItem from "../Item";
import styles from "../styles";
import { FlatList, TouchableOpacity } from "react-native";
import { ISplitList } from "../types";
import { Split } from "../../../../../services/splits/types";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../../infra/navigation/models";
import { Text } from "react-native-paper";
import Title from "../../../../../components/Title";
import { useAppSelector } from "../../../../../redux/hooks";

const SplitList: React.FC<ISplitList> = ({ data, messageOnEmpty }) => {
  const navigation = useNavigation<PropsStack>();
  const userId = useAppSelector((state) => state.user.id);

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

  const organizedByMe = data.filter((split) => split.participants.some((p) => userId === p.userId && p.organizer));
  const participating = data.filter((split) => split.participants.some((p) => userId === p.userId && !p.organizer));
  return (
    <FlatList
      data={organizedByMe}
      keyExtractor={(item) => item.id}
      renderItem={RenderItem}
      ListHeaderComponent={<Title>Organizados por mim</Title>}
      ListHeaderComponentStyle={styles.titleContainer}
      contentContainerStyle={styles.listContent}
      ListFooterComponent={
        <FlatList
          data={participating}
          keyExtractor={(item) => item.id}
          renderItem={RenderItem}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={<Title>Participando</Title>}
          ListHeaderComponentStyle={styles.titleContainer}
          ListEmptyComponent={<Text style={styles.centeredText}>{messageOnEmpty}</Text>}
        />
      }
      ListEmptyComponent={<Text style={styles.centeredText}>{messageOnEmpty}</Text>}
    />
  );
};

export default SplitList;
