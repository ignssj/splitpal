import React from "react";
import Title from "../../../components/Title";
import useAllSplits from "../../../hooks/useAllSplits";
import { Screen } from "../../../components/Screen";
import { Split } from "../components/Split";

const MySplits = () => {
  const { data, isLoading } = useAllSplits();

  if (isLoading) return <Screen.Loading />;
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus pagamentos</Title>
      </Screen.Header>
      <Screen.Content flex={0.9} loading={isLoading}>
        <Split.List data={data} />
      </Screen.Content>
    </Screen.Root>
  );
};

export default MySplits;
