import React, { useCallback } from "react";
import SplitItem from "../Item";
import Title from "../../../../../components/Title";
import Loading from "../Loading";
import styles from "../styles";
import { FlatList, TouchableOpacity } from "react-native";
import { ISplitList } from "../types";
import { Split } from "../../../../../services/splits/types";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../../infra/navigation/models";
import { Text } from "react-native-paper";
import { useAppSelector } from "../../../../../redux/hooks";

const SplitList: React.FC<ISplitList> = ({ data }) => {
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

  if (!data) return <Loading />;

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
          ListEmptyComponent={<Text style={styles.centeredText}>Você não possui participações em Splits</Text>}
        />
      }
      ListEmptyComponent={<Text style={styles.centeredText}>Você não organizou nenhum Split</Text>}
    />
  );
};

export default SplitList;
