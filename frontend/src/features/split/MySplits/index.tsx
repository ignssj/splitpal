import React from "react";
import { Screen } from "../../../components/Screen";
import Title from "../../../components/Title";
import SplitList from "../components/SplitList";
import useAllSplits from "../../../hooks/useAllSplits";

const MySplits = () => {
  const { data } = useAllSplits();
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus pagamentos</Title>
      </Screen.Header>
      <Screen.Content flex={0.9}>
        <SplitList list={data} />
      </Screen.Content>
    </Screen.Root>
  );
};

export default MySplits;
