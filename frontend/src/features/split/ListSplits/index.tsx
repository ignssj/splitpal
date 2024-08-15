import React from "react";
import { Screen } from "../../../components/Screen";
import Title from "../../../components/Title";
import SplitList from "../components/SplitList";
import useAllSplits from "../../../hooks/useAllSplits";

const ListSplits = () => {
  const { data } = useAllSplits();

  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus pagamentos</Title>
      </Screen.Header>
      <SplitList list={data} />
    </Screen.Root>
  );
};

export default ListSplits;
