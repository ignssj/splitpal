import React from "react";
import Title from "../../../components/Title";
import useMySplits from "../../../hooks/useMySplits";
import { Screen } from "../../../components/Screen";
import { Split } from "../components/Split";

const MySplits = () => {
  const { data, isLoading } = useMySplits();

  if (isLoading) return <Screen.Loading />;
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Feed</Title>
      </Screen.Header>
      <Screen.Content loading={isLoading}>
        <Split.List data={data} messageOnEmpty='Você não organizou nenhum pagamento' />
      </Screen.Content>
    </Screen.Root>
  );
};

export default MySplits;
