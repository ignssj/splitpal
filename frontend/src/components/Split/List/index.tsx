import React, { useCallback } from "react";
import SplitItem from "../Item";
import Loading from "../Loading";
import Title from "../../Title";
import styles from "../styles";
import { FlatList, TouchableOpacity } from "react-native";
import { ISplitList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { useAppSelector } from "../../../redux/hooks";
import { PropsStack } from "../../../infra/navigation/models";
import { Split, SplitParticipant } from "../../../services/splits/types";

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

  const organizedByMe = data.filter((split) => split.participants.some((p: SplitParticipant) => userId === p.userId && p.organizer));
  const participating = data.filter((split) => split.participants.some((p: SplitParticipant) => userId === p.userId && !p.organizer));
  return (
    <FlatList
      testID='OrganizingList'
      data={organizedByMe}
      keyExtractor={(item) => item.id}
      renderItem={RenderItem}
      ListHeaderComponent={<Title>Organizados por mim</Title>}
      ListHeaderComponentStyle={styles.titleContainer}
      contentContainerStyle={styles.listContent}
      ListFooterComponent={
        <FlatList
          testID='ParticipatingList'
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
